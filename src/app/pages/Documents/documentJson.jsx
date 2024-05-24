import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import useMainState from "@/hooks/useMainState";
import { api, helper } from "@/services";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Card, CardBody } from "reactstrap";

const DocumentJson = () => {
  const file_name = localStorage.getItem("fileName");

  const [state, changeState] = useMainState({
    isEdit: false,
    jsonLoading: false,
    editLoading: false,
    jsonData: null,
  });
  const getJsondata = () => {
    if (file_name) {
      sessionStorage.removeItem("pdfUrl");
      changeState({ jsonLoading: true });
      api
        .post(`http://40.87.56.22:8000/json?file_name=${file_name}`)
        .then((res) => {
          if (res) {
            changeState({ jsonLoading: false });
            changeState({ jsonData: res.json_output });
          }
        })
        .catch((err) => {
          helper.toaster.error("Something went wrong. Please try again!");
          changeState({ jsonLoading: false });
        });
    }
  };
  useEffect(() => {
    getJsondata();
  }, [file_name]);

  // const onJsonChange = (key, parent, type, data) => {
  //   const newJson = data;

  //   changeState({ jsonData: newJson });
  // };

  const saveJson = (data) => {
    api
      .post(
        `http://40.87.56.22:8001/updatejson?filename=${file_name.replace(
          ".pdf",
          ".json"
        )}`,
        {
          filename: file_name.replace(".pdf", ".json"),
          json_data: data.formData,
        }
      )
      .then((res) => {
        helper.toaster.success("json data updated successfully");
        changeState({ isEdit: false });
        getJsondata();
      })
      .catch((err) => {});
  };

  const jsonToSchema = (data, parentKey = "") => {
    if (typeof data === "object" && !Array.isArray(data)) {
      const properties = {};
      for (const key in data) {
        properties[key] = jsonToSchema(data[key], key);
      }
      return {
        type: "object",
        title: parentKey,
        properties,
      };
    } else if (Array.isArray(data)) {
      if (data.length > 0) {
        const firstItem = data[0];
        const itemType = typeof firstItem;

        if (itemType === "object" && !Array.isArray(firstItem)) {
          // Generate a blank template for the object
          const blankTemplate = {};
          for (const key in firstItem) {
            blankTemplate[key] = "";
          }
          return {
            type: "array",
            title: parentKey,
            items: jsonToSchema(firstItem, ""), // Schema of the object inside the array
            default: blankTemplate, // Template for adding new items
          };
        } else {
          console.log(itemType, " is not");
          return {
            type: "array",
            title: parentKey,
            items: {
              type: itemType,
            },
            default: data,
          };
        }
      } else {
        return {
          type: "array",
          title: parentKey,
        };
      }
    } else {
      return {
        type: typeof data,
        title: parentKey,
        default: data,
      };
    }
  };
  const data = jsonToSchema(state.jsonData);
  const schema = { ...data };

  return (
    <div className="documents-page">
      <PageHeader title={file_name} />
      <Container fluid>
        {!state.isEdit ? (
          <div className="text-end mb-2">
            <ReactButton
              size="sm"
              className=" border-1 border"
              onClick={() => {
                changeState({ isEdit: true });
                localStorage.setItem("flagCheck", "Hi  ...");
              }}
              disabled={!state.jsonData}
            >
              <Icon icon="mdi:pencil" className="mb-1 fs-6" />
            </ReactButton>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-end gap-2">
            {/* <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0"
              onClick={saveJson}
            >
              save
            </ReactButton> */}
          </div>
        )}

        {state.isEdit ? (
          <Card>
            <CardBody>
              <div className="document--form position-relative">
                <Form
                  schema={schema}
                  validator={validator}
                  onSubmit={saveJson}
                />{" "}
                <ReactButton
                  size="sm"
                  className="globel--btn text-white-primary bg-btn-theme border-0 cancel-button"
                  onClick={() => {
                    changeState({ isEdit: false });
                    changeState({ jsonUpdateData: state.jsonData });
                  }}
                >
                  cancel
                </ReactButton>
              </div>
            </CardBody>
          </Card>
        ) : !state.jsonLoading ? (
          typeof state.jsonData === "object" ? (
            <pre>{JSON.stringify(state.jsonData, null, 2)}</pre>
          ) : (
            <pre>{state.jsonData}</pre>
          )
        ) : (
          "loading..."
        )}
      </Container>
    </div>
  );
};

export default DocumentJson;

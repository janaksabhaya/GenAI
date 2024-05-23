import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import useMainState from "@/hooks/useMainState";
import { api, helper } from "@/services";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { JSONEditor } from "react-json-editor-viewer";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

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
  const log = (type) => console.log(type);

  const jsonToSchema = (data, title) => {
    if (typeof data === "object" && !Array.isArray(data)) {
      const properties = {};
      for (const key in data) {
        properties[key] = jsonToSchema(
          data[key],
          key === "Underlying Fund" ? key : undefined
        );
      }
      return {
        title: title,
        properties,
      };
    } else {
      return {
        type: typeof data,
        title: title,
        default: data.toString(),
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
            <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0"
              onClick={() => {
                changeState({ isEdit: false });
                changeState({ jsonUpdateData: state.jsonData });
              }}
            >
              cancel
            </ReactButton>
          </div>
        )}

        {state.isEdit ? (
          // <JSONEditor
          //   data={state.jsonUpdateData}
          //   collapsible
          //   onChange={onJsonChange}
          // />
          <div className="document--form">
            <Form schema={schema} validator={validator} onSubmit={saveJson} />{" "}
            {/* <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0"
              onClick={() => {
                changeState({ isEdit: false });
              }}
            >
              cancel
            </ReactButton> */}
          </div>
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

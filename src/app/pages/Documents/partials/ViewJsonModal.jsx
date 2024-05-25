import React, { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import { Icon } from "@iconify/react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Card, CardBody, Container, Table } from "reactstrap";
import { api, helper } from "@/services";
import useMainState from "@/hooks/useMainState";
import { JsonToTable } from "react-json-to-table";

const ViewJsonModal = ({ isOpen, setState, onClose, singleData }) => {
  const modalStyle = {
    content: {
      width: "50%",
      height: "100vh",
      padding: "0",
      transform: "translate(0%, -50%)",
    },
  };

  const file_name = localStorage.getItem("fileName");

  const [state, changeState] = useMainState({
    isEdit: false,
    jsonLoading: false,
    editLoading: false,
    jsonData: null,
  });

  const getJsondata = () => {
    if (singleData?.file_name) {
      sessionStorage.removeItem("pdfUrl");
      changeState({ jsonLoading: true });
      api
        .post(`http://40.87.56.22:8000/json?file_name=${singleData?.file_name}`)
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
  }, [singleData?.file_name]);

  const saveJson = (data) => {
    api
      .post(
        `http://40.87.56.22:8001/updatejson?filename=${singleData?.Filename.replace(
          ".pdf",
          ".json"
        )}`,
        {
          filename: singleData?.Filename.replace(".pdf", ".json"),
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
          const blankTemplate = {};
          for (const key in firstItem) {
            blankTemplate[key] = "";
          }
          return {
            type: "array",
            title: parentKey,
            items: jsonToSchema(blankTemplate, ""),
            default: data,
          };
        } else {
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

  const singleRecord = [
    { name: "FILE NAME", value: singleData?.file_name },
    { name: "DOC TYPE", value: singleData?.doc_type },
    { name: "# PAGES", value: singleData?.num_pages },
    { name: "FIRM ID", value: singleData?.firm_id },
    { name: "FIRM NAME", value: singleData?.firm_name },
    { name: "FUND", value: singleData?.fund_name },
    { name: "ACCOUNT NAME", value: singleData?.account_name },
    { name: "DATE TIME", value: singleData?.date_time },
    { name: "READ STATUS", value: '' },
    { name: "STATUS", value: singleData?.status },
  ];

  return (
    <ReactDynamicModal
      title="View Json"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={modalStyle}
      footerContent={null}
    >
      <div className="docs--json-modal">
        <Container fluid>
          <h3 className="mb-3">
            Document Details
          </h3>
          <Table striped bordered className="json-modal-table">
            <tbody>
              {singleRecord &&
                singleRecord.map((item) => {
                  return (
                    <tr>
                      <th className="w-25">{item?.name}</th>
                      <td className="w-75 text text-capitalize">{item?.value}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          {!state.isEdit && (
            <div className="text-end mb-2">
              <ReactButton
                size="sm"
                className=" border-1 border"
                onClick={() => {
                  changeState({ isEdit: true });
                }}
                disabled={!state.jsonData}
              >
                <Icon icon="mdi:pencil" className="mb-1 fs-6" />
              </ReactButton>
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
                  />
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
            <>
              <h3 className="mb-3">Extracted Document Detail</h3>
              <JsonToTable json={state.jsonData} />
            </>
          ) : (
            "loading..."
          )}
        </Container>
      </div>
    </ReactDynamicModal>
  );
};

export default ViewJsonModal;

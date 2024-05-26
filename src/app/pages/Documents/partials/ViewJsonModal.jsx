import React, { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import Chekbox from "@/components/ui/Chekbox";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import { Icon } from "@iconify/react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Card, CardBody, Container, Table } from "reactstrap";
import { api, helper } from "@/services";
import useMainState from "@/hooks/useMainState";
import { JsonToTable } from "react-json-to-table";
import ReactSelect from "@/components/ui/ReactSelect";

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
    show_content: 'table',
    checklistJsonItems: [],
    documentTypes: [],
    selectedDocumentType: '',
    selectedPickList: []
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

    api
			.get("http://40.87.56.22:8000/dropdown/document_types")
			.then((res) => {
				changeState({ documentTypes: res.document_types.filter(e => e) });
			})
			.catch((err) => {});

    api
			.get("http://40.87.56.22:8000/dropdown/checklist_fields", {
        json_file_name: singleData?.file_name.replace('.pdf', '')
      })
			.then((res) => {
				changeState({ checklistJsonItems: res.fields });
			})
			.catch((err) => {});
  }, [singleData?.file_name]);

  const saveJson = (data) => {
    api
      .post(
        `http://40.87.56.22:8001/updatejson?filename=${singleData?.file_name.replace(
          ".pdf",
          ".json"
        )}`,
        {
          filename: singleData?.file_name.replace(".pdf", ".json"),
          json_data: data.formData,
        }
      )
      .then((res) => {
        helper.toaster.success("json data updated successfully");
        changeState({ show_content: 'table' });
        getJsondata();
      })
      .catch((err) => { });
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
    // { name: "READ STATUS", value: "" },
    { name: "STATUS", value: singleData?.status },
  ];

  const selectChecklist = (value) => {
    let _selectedPickList = [...state.selectedPickList];
    if (_selectedPickList.includes(value)) {
      _selectedPickList = _selectedPickList.filter(e => e != value);
    } else {
      _selectedPickList.push(value);
    }

    console.log('selectChecklist', _selectedPickList)

    changeState({
      selectedPickList: _selectedPickList
    })
  }

  const addNewConfiguration = () => {
    api
      .post(
        `http://40.87.56.22:8000/add_configuration`,
        {
          fields: state.selectedPickList,
        }
      )
      .then((res) => {
        helper.toaster.success("Configuration added successfully!");
        changeState({ show_content: 'table' });
        getJsondata();
      })
      .catch((err) => { });
  }

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
          <h3 className="mb-3">Document Details</h3>
          <Table striped bordered className="json-modal-table">
            <tbody>
              {singleRecord &&
                singleRecord.map((item) => {
                  return (
                    <tr>
                      <th className="w-25">{item?.name}</th>
                      <td className="w-75 text text-capitalize">
                        {item?.value}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          {state.show_content == 'table' && (
            <div className="text-end mb-2 gap-4 px-5">
              <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0 mx-3"
              onClick={() => {
                changeState({ show_content: 'view-all' });
              }}
            >
              View All
            </ReactButton>
              <ReactButton
                size="sm"
                className=" border-1 border"
                onClick={() => {
                  // changeState({ isEdit: true });
                  changeState({ show_content: 'edit-json' });
                }}
                disabled={!state.jsonData}
              >
                <Icon icon="mdi:pencil" className="mb-1 fs-6" />
              </ReactButton>
            </div>
          )}

          {state.show_content == 'view-all' && (
            <div className="d-flex  mt-3 document-filter card">
              <div className="card-body">
                <div className="checklist-items">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mx-1 mb-3">Picklist</h5>
                    {/* <ReactSelect
                      options={state.documentTypes}
                      placeholder="Select Documents type"
                      value={state.selectedDocumentType}
                      onChange={(e) => {
                        changeState({
                          selectedDocumentType: e.value
                        })
                      }}
                    /> */}
                  </div>
                  <ul class="list-group">
                    {state.checklistJsonItems.map((item, i) => (
                      <li class="list-group-item">
                        <label htmlFor={'test'} key={i} className={`checkbox-wrapper`}>
                          <input type="checkbox" name="form-check" id={'test'} value={item} onChange={() => {
                            selectChecklist()
                          }} />
                          <span className="label font13 mx-2">{item}</span>
                        </label>
                      </li>
                    ))}

                    {state.checklistJsonItems.length == 0 && (
                      <b className="text-center">
                        Picklist Not Found
                      </b>
                    )}
                  </ul>
                  <div className="mt-3 d-flex justify-content-center">
                    <ReactButton
                      size="sm"
                      className="globel--btn text-white-primary bg-btn-theme border-0 mx-3"
                      onClick={() => {
                        addNewConfiguration()
                      }}
                    >
                      Save
                    </ReactButton>
                    <ReactButton
                      size="sm"
                      className="globel--btn text-white-primary bg-btn-theme border-0"
                      onClick={() => {
                        changeState({ show_content: 'table' });
                      }}
                    >
                      Cancel
                    </ReactButton>
                  </div>
                </div>
              </div>
            </div>
          )}

          {state.show_content == 'edit-json' ? (
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
                      changeState({ jsonUpdateData: state.jsonData, show_content: 'table' });
                    }}
                  >
                    cancel
                  </ReactButton>
                </div>
              </CardBody>
            </Card>
          ) : (
            <>
              {state.show_content == 'table' && (
                !state.jsonLoading ? (
                  <>
                    <h3 className="mb-3">Extracted Document Detail</h3>
                    <JsonToTable json={state.jsonData} />
                  </>
                ) : (
                  "loading..."
                )
              )}
            </>
          )}
        </Container>
      </div>
    </ReactDynamicModal>
  );
};

export default ViewJsonModal;

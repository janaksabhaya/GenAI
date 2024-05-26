import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import { api, helper } from "@/services";
import React, { useEffect, useState } from "react";
import loading from "@assets/images/loading.gif";
import useMainState from "@/hooks/useMainState";
import { Form, Table } from "reactstrap";
import Validators from "@/components/validations/Validator";
import Textinput from "@/components/ui/TextInput";

export default function CheckDocumentsModal({ isOpen, onClose, onSave }) {
  const [files, setFiles] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isProcessLoader, setIsProcessLoader] = useState(false);
  const [state, changeState] = useMainState({
    isAddNewDocument: false,
    isLoadingAddDocument: false,
    newDocumentformState: {
      file: ""
    }
  })

  const rules = {
    file: "required",
  };

  useEffect(() => {
    if (isOpen) {
      setIsLoader(true)
      api
        .get(`http://40.87.56.22:8001/check_drop_folder`)
        .then((res) => {
          // if (!res || helper.isEmpty(res.files)) {
          //   return;
          // }

          let _files = [
            'a.pdf',
            'b.pdf',
            'c.pdf',
            'd.pdf',
            'e.pdf',
            'f.pdf',
            'g.pdf',
            'h.pdf',
            'a.pdf',
            'a.pdf',
            'a.pdf',
            'a.pdf',
            'a.pdf',
            'a.pdf',
            'a.pdf',
          ].map((file) => {
            return {
              name: file,
              status: "pending",
              isChecked: false
            };
          });

          setFiles(_files);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoader(false)
        });
    }
  }, [isOpen]);

  const onProcessFiles = () => {
    setIsProcessLoader(true);

    let selectedFiles = files.filter(e => e.isChecked);
    let promisses = [];

    selectedFiles.forEach((file) => {
      promisses.push(
        api.post(`http://40.87.56.22:8000/json?file_name=${file.name}`)
      );

      promisses.push(
        api.post(
          `http://40.87.56.22:8000/doc_details?file_name=${file.name}`
        )
      );
    });

    Promise.allSettled(promisses)
      .then(() => {
        let _promisses = [];
        selectedFiles.forEach((file) => {
          _promisses.push(
            api.post(
              `http://40.87.56.22:8001/move_to_completed/${file.name}`
            )
          );
        });

        let _files = [...files]

        Promise.allSettled(_promisses)
          .then((response) => {
            response.forEach((resData, i) => {
              _files = _files.map((file) => {
                if (file.name == selectedFiles[i].name) {
                  file.status = resData.status == "rejected" ? "failed" : "success";
                }

                return file;
              })
            });

            setFiles([..._files]);
          })
          .catch(() => { });
      })
      .catch(() => { })
      .finally(() => {
        setIsProcessLoader(false);
        onSave();
      });
  }

  const readDocuments = () => {
    changeState({ isAddNewDocument: false })
  }

  return (

    <ReactDynamicModal
      title="Check Documents"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={{
        content: {
          top: '40%',
          width: "40%",
        },
      }}
      footerContent={null}
    >
      <div className="check--documents">
        {!state.isAddNewDocument ? (
          <>
            <div className="add-document-btn">
              <ReactButton
                className=" globel--btn text-white-primary bg-btn-theme border-0 px-4"
                size="sm"
                onClick={() => {
                  changeState({
                    isAddNewDocument: true
                  })
                }}
              >
                Add new document
              </ReactButton>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>File name</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoader ? (
                    <tr>
                      <td colSpan={3} className="text-center border-bottom-0">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    <>
                      {files.map((file, i) => (
                        <tr key={i}>
                          <td>{file.name}</td>
                          <td>
                            <span class={`ani-status ${file.status}`}></span>
                          </td>
                          <td>
                            <input type="checkbox" value={file.name} checked={file.isChecked} onChange={() => {
                              setFiles(prev => {
                                let _files = prev.map((item) => {
                                  if (item.name === file.name) {
                                    item.isChecked = !item.isChecked;
                                  }
                                  return item;
                                })
                                return [
                                  ..._files
                                ]
                              })
                            }} />
                          </td>
                        </tr>
                      ))}

                      {helper.isEmpty(files) && (
                        <tr>
                          <td colSpan={3} className="text-center border-bottom-0">
                            File Not Found
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
            <div className="text-end mt-3">
              <ReactButton
                size="sm"
                className="globel--btn text-white-primary bg-btn-theme border-0"
                onClick={onProcessFiles}
              >
                {isProcessLoader ? (
                  <img
                    src={loading}
                    height={20}
                    width={20}
                    className="me-2"
                  />
                ) : (
                  ""
                )}
                Ok
              </ReactButton>
            </div>
          </>
        ) : (
          <Validators formData={state.newDocumentformState} rules={rules}>
            {({ onSubmit, errors }) => {
              return (
                <Form
                  name="event-form"
                  id="form-event"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(readDocuments);
                  }}
                >
                  <div className="mb-2">
                    <div className="mt-2">
                      <Textinput
                        type="file"
                        name="file"
                        isShowLabel={false}
                        label={"File"}
                        id=""
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            file: Array.from(e.target.files),
                          }))
                        }
                        error={errors?.file}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end gap-2">
                    <ReactButton
                      size="sm"
                      className="globel--btn text-white-primary bg-btn-theme border-0 d-flex align-items-center justify-content-center"
                      type="submit"
                      disabled={state.isLoadingAddDocument}
                    >
                      {state.isLoadingAddDocument ? (
                        <img
                          src={loading}
                          height={20}
                          width={20}
                          className="me-2"
                        />
                      ) : (
                        ""
                      )}
                      Read
                    </ReactButton>
                    <ReactButton
                      size="sm"
                      className="globel--btn text-white-primary bg-btn-theme border-0"
                      onClick={() => changeState({ isAddNewDocument: false, newDocumentformState: { file: ""}})}
                    >
                      Cancel
                    </ReactButton>
                  </div>
                </Form>
              );
            }}
          </Validators>
        )}

      </div>
    </ReactDynamicModal>
  );
}

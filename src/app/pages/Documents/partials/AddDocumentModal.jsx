import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import Textinput from "@/components/ui/TextInput";
import Validators from "@/components/validations/Validator";
import { api } from "@/services";
import React, { useState } from "react";
import { Form, Table } from "reactstrap";
import loading from "../../../../assets/images/loading.gif";

const modalStyle = {
  content: {
    width: "40%",
  },
};

const AddDocumentModal = ({ isOpen, onClose, changeState }) => {
  const [formState, setFormState] = useState({ file: "" });
  const [isLoading, setIsLoading] = useState(false);

  const rules = {
    file: "required",
  };

  const AddDocument = () => {
    const uploadPromises = formState.file.map((item, i) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", item);

      api
        .post(`http://40.87.56.22:8000/json?file_name=${item?.name}`)
        .then((res) => {})
        .catch((err) => {});
      return api
        .post("http://40.87.56.22:8001/uploadfile/", formData)
        .then(() => {
          return api.post(
            `http://40.87.56.22:8000/doc_details?file_name=${item?.name}`
          );
        })
        .then((res) => {
          const updatedData = {
            ...res.doc_details,
            Current_Status: "pending",
            ReceivedDate: new Date(),
            Doc_UID: i + 1,
          };

          return updatedData;
        }) // Assuming the response structure has the data directly in res.data
        .catch((err) => {
          console.error("Error fetching document details:", err);
          return null; // Return null in case of error to handle it later
        });
    });

    Promise.all(uploadPromises)
      .then((results) => {
        onClose(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error during file uploads or fetching details:", err);
      });
  };
  return (
    <ReactDynamicModal
      title="Add Document"
      isOpen={isOpen}
      onClose={() => changeState({ addModal: false })}
      additionalStyle={modalStyle}
      footerContent={null}
    >
      <Validators formData={formState} rules={rules}>
        {({ onSubmit, errors }) => {
          return (
            <Form
              name="event-form"
              id="form-event"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(AddDocument);
              }}
            >
              <div className="mb-2">
                <div className="mt-2">
                  <Textinput
                    type="file"
                    name="file"
                    id=""
                    label="File"
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        file: Array.from(e.target.files),
                      }))
                    }
                    error={errors?.file}
                    multiple
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end gap-2">
                <ReactButton
                  size="sm"
                  className="globel--btn text-white-primary bg-btn-theme border-0 d-flex align-items-center justify-content-center"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <img
                      src={loading}
                      height={20}
                      width={20}
                      className="me-2"
                    />
                  ) : (
                    ""
                  )}
                  Save
                </ReactButton>
                <ReactButton
                  size="sm"
                  className="globel--btn text-white-primary bg-btn-theme border-0"
                  onClick={() => changeState({ addModal: false })}
                >
                  Cancle
                </ReactButton>
              </div>
            </Form>
          );
        }}
      </Validators>
    </ReactDynamicModal>
  );
};

export default AddDocumentModal;

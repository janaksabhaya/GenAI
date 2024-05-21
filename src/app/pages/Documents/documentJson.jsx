import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import useMainState from "@/hooks/useMainState";
import { api } from "@/services";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { JSONEditor } from "react-json-editor-viewer";

const DocumentJson = () => {
  const file_name = localStorage.getItem("fileName");

  const [state, changeState] = useMainState({
    isEdit: false,
    jsonLoading: false,
    editLoading: false,
    jsonUpdateData: null,
  });

  useEffect(() => {
    if (file_name) {
      changeState({ jsonLoading: true });
      api
        .post(`http://40.87.56.22:8000/json?file_name=${file_name}`)
        .then((res) => {
          if (res) {
            changeState({ jsonLoading: false });
            changeState({ jsonUpdateData: res });
          }
        })
        .catch((err) => {
          changeState({ jsonLoading: false });
        });
    }
  }, [file_name]);

  const onJsonChange = (key, parent, type, data) => {
    const newJson = data;

    changeState({ jsonUpdateData: newJson });
  };

  const saveJson = () => {
    api
      .post(
        `http://40.87.56.22:8001/updatejson?filename=${file_name.replace(
          ".pdf",
          ".json"
        )}`,
        {
          filename: file_name.replace(".pdf", ".json"),
          json_data: state.jsonUpdateData.json_output,
        }
      )
      .then((res) => {
        changeState({ isEdit: false });
      });
  };

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
            <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0"
              onClick={saveJson}
            >
              save
            </ReactButton>
            <ReactButton
              size="sm"
              className="globel--btn text-white-primary bg-btn-theme border-0"
              onClick={() => changeState({ isEdit: false })}
            >
              cancel
            </ReactButton>
          </div>
        )}
        {state.isEdit ? (
          <JSONEditor
            data={state.jsonUpdateData}
            collapsible
            onChange={onJsonChange}
          />
        ) : !state.jsonLoading ? (
          typeof state.jsonUpdateData === "object" ? (
            <pre>{JSON.stringify(state.jsonUpdateData, null, 2)}</pre>
          ) : (
            <pre>{state.jsonUpdateData}</pre>
          )
        ) : (
          "loading..."
        )}
      </Container>
    </div>
  );
};

export default DocumentJson;

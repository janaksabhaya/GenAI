import React, { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import { Icon } from "@iconify/react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { api, helper } from "@/services";
import useMainState from "@/hooks/useMainState";

const ViewPdfModal = ({ isOpen, setState, onClose, singleData }) => {
  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "9999",
      width: "50%",
      background: "rgba(0, 0, 0, 0.2)",
    },
    content: {
      width: "100%",
      height: "100vh",
      padding: "0",
      transform: "translate(-50%, -50%)",
    },
  };

  const [state, changeState] = useMainState({
    pdfUrl: "",
    isLoader: false,
  });

  useEffect(() => {
    if (singleData?.file_name) {
      changeState({ isLoader: true });

      api
        .get(`http://40.87.56.22:8001/files/${singleData?.file_name}`)
        .then((res) => {
          changeState({ pdfUrl: res?.file_url, isLoader: false });
        })
        .catch((err) => {})
        .finally(() => {
          changeState({ isLoader: false });
        });
    }
  }, [singleData?.file_name]);

  return (
    <ReactDynamicModal
      title="View Pdf"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={modalStyle}
      footerContent={null}
    >
      <div className="docs-modal">
        <Row>
          {state.isLoader ? (
            "Loading..."
          ) : state.pdfUrl ? (
            <object
              data={state.pdfUrl}
              type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          ) : (
            <div> File not Found </div>
          )}
        </Row>
      </div>
    </ReactDynamicModal>
  );
};

export default ViewPdfModal;

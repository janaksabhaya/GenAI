import ReactDynamicModal from "@/components/ui/ReactModal";
import React from "react";

const ViewPdf = ({ show, onClose }) => {
  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "9999",
      width: "50%",
      background: "none",
      transform: "translate(100%,0%)",
    },
    content: {
      width: "100%",
      height: "100vh",
      borderRadius: "0px",
      padding: "0",
    },
  };
  return (
    <ReactDynamicModal
      title="View PDF"
      show={show}
      className=""
      onClose={onClose}
      additionalStyle={modalStyle}
    >
      Hello
    </ReactDynamicModal>
  );
};

export default ViewPdf;

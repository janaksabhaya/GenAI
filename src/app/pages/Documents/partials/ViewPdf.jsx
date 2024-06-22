import PDFViewer from "@/components/common/PDFViewer";
import Loader from "@/components/ui/Loader";
import ReactDynamicModal from "@/components/ui/ReactModal";
import useMainState from "@/hooks/useMainState";
import React from "react";

const ViewPdf = ({ show, onClose, searchInPdfText = "" }) => {
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

  const [state, changeState] = useMainState({
    isLoading: false,
  });
  return (
    <ReactDynamicModal
      title="View PDF"
      show={show}
      className="full-screen-modal"
      onClose={onClose}
      additionalStyle={modalStyle}
    >
      {state.isLoading ? (
        <div className="d-flex align-items-center justify-content-center loading-height">
          <Loader isLoader={state.isLoading} />
        </div>
      ) : (
        <PDFViewer
          fileUrl={require("../../../data/Documents/Distribution/1545328_Stmt_20231227120925858.pdf")}
          searchText={searchInPdfText}
        />
      )}
    </ReactDynamicModal>
  );
};

export default ViewPdf;

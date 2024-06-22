import Radio from "@/components/ui/Radio";
import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactModal";
import React from "react";

const ResolveModal = ({ show, onClose, data }) => {
  const modalStyle = {
    overlay: {
      zIndex: "999999",
    },
    content: {
      width: "400px",
    },
  };

  const options = data.map((doc) => ({
    value: doc.documentName,
    label: doc.documentName,
  }));

  return (
    <ReactDynamicModal
      title="Select Latest Version"
      show={show}
      className="select--version--modal"
      onClose={onClose}
      additionalStyle={modalStyle}
    >
      <div className="d-flex align-items-center justify-content-end">
        <ReactButton
          className="global-outline-btn font-10 b-theme-light text-theme-default br-2 me-2"
          onClick={onClose}
        >
          Cancel
        </ReactButton>
        <ReactButton
          className="global-btn font-10 bg-static-black text-theme-color br-2"
          onClick={onClose}
        >
          Save
        </ReactButton>
      </div>
      <div>
        <Radio
          name="resolve"
          value={options[0].value}
          options={options}
          contentWrapper="flex-wrap"
        />
      </div>
    </ReactDynamicModal>
  );
};

export default ResolveModal;

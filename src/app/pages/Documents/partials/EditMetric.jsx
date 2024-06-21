import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactModal";
import ReactSelect from "@/components/ui/ReactSelect";
import Textinput from "@/components/ui/TextInput";
import React from "react";

const EditMetric = ({ show, onClose }) => {
  const modalStyle = {
    overlay: {
        zIndex:'999999'
    },
    content: {
      width: "400px",
    },
  };

  const defaultValue = [
    {
      label: "Investor_Name",
      value: "Investor_Name",
    },
    {
      label: "Fund_Name",
      value: "Fund_Name",
    },
    {
      label: "Doc_Type",
      value: "Doc_Type",
    },
    {
      label: "Account_ID",
      value: "Account_ID",
    },
    {
      label: "Portfolio_Valuation _MTD",
      value: "Portfolio_Valuation _MTD",
    },
    {
      label: "Portfolio_Valuation _MTD",
      value: "Portfolio_Valuation _MTD",
    },
  ];

  return (
    <ReactDynamicModal
      show={show}
      onClose={onClose}
      additionalStyle={modalStyle}
      className="edit--metric"
      title="Edit Metric"
    >
      <div className="d-flex align-items-center justify-content-end">
        <ReactButton
          className="global-outline-btn font-10 b-theme-light text-theme-default  br-2 me-2"
          disabled
          onClick={onClose}
        >
          Discard
        </ReactButton>
        <ReactButton
          className="global-btn font-10 bg-static-black text-theme-color br-2"
          disabled
          onClick={onClose}
        >
          Save
        </ReactButton>
      </div>

      <div>
        <Textinput label="Metric Name" placeholder="Investor Name" />
        <Textinput label="Value" placeholder="Thomas Cramer" />
        <div className="select--filter--modal">
          <ReactSelect label="Default Value" options={defaultValue} />
        </div>
      </div>
    </ReactDynamicModal>
  );
};

export default EditMetric;

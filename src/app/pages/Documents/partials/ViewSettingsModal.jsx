import Chekbox from "@/components/ui/Chekbox";
import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactModal";
import React from "react";

const ViewSettingsModal = ({ show, onClose }) => {
  const modalStyle = {
    content: {
      width: "400px",
    },
  };
  return (
    <ReactDynamicModal
      title="Select Grid Fields"
      show={show}
      className="view--settings--modal"
      onClose={onClose}
      additionalStyle={modalStyle}
    >
      <div className="d-flex align-items-center justify-content-end">
        <ReactButton
          className="global-outline-btn font-10 b-theme-light text-theme-default  br-2 me-2"
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
      <div className="view-setting-list">
      <ul className="list-unstyled mb-0">
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Select All" value="Select All"/>
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Document Name" value="Document Name"/>
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Document Type" id="document_type" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Document ID" id="document_id" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="#Pg." id="#Pg." />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Firm Name" id="firm_name" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Fund Name" id="fund_name" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Investor Name" id="investor_name" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Account SID" id="account_sid" />
  </li>
  <li className="setting-li d-flex align-items-center">
    <Chekbox label="Account No." id="account_no" />
  </li>
</ul>

      </div>
    </ReactDynamicModal>
  );
};

export default ViewSettingsModal;

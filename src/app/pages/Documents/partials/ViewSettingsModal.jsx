import ReactButton from "@/components/ui/ReactButton";
import ReactModal from "@/components/ui/ReactModal";
import React from "react";

const ViewSettingsModal = ({ show, onClose }) => {
  return (
    <ReactModal
      title="Select Grid Feilds"
      show={show}
      className="view--settings--modal"
      onClose={onClose}
    >
      <div className="d-flex align-items-center justify-content-end">
        <ReactButton className="global-outline-btn font-10 b-theme-light text-theme-default  br-2 me-2">
          Cancel
        </ReactButton>
        <ReactButton className="global-btn font-10 bg-static-black text-theme-color br-2">
          Save
        </ReactButton>
      </div>
      <div className="view-setting-list">
        <ul className="list-unstyled mb-0">
          <li className="setting-li d-flex align-items-center">
            <input type="checkbox" className="theme--checkbox" id="select" />
            <label htmlFor="select" className="font-12 ms-2">
              Select All
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="document_name"
            />
            <label htmlFor="document_name" className="font-12 ms-2">
              Document Name
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="document_type"
            />
            <label htmlFor="document_type" className="font-12 ms-2">
              Document Type
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="document_id"
            />
            <label htmlFor="document_id" className="font-12 ms-2">
              Document ID
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input type="checkbox" className="theme--checkbox" id="#Pg." />
            <label htmlFor="#Pg." className="font-12 ms-2">
              #Pg.
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input type="checkbox" className="theme--checkbox" id="firm_name" />
            <label htmlFor="firm_name" className="font-12 ms-2">
              Firm Name
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input type="checkbox" className="theme--checkbox" id="fund_name" />
            <label htmlFor="fund_name" className="font-12 ms-2">
              Fund Name
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="investor_name"
            />
            <label htmlFor="investor_name" className="font-12 ms-2">
              Investor Name
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="account_sid"
            />
            <label htmlFor="account_sid" className="font-12 ms-2">
              Account SID
            </label>
          </li>
          <li className="setting-li d-flex align-items-center">
            <input
              type="checkbox"
              className="theme--checkbox"
              id="account_no"
            />
            <label htmlFor="account_no" className="font-12 ms-2">
              Account No.
            </label>
          </li>
        </ul>
      </div>
    </ReactModal>
  );
};

export default ViewSettingsModal;

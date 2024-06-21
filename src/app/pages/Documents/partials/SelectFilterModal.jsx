import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactModal";
import ReactSelect from "@/components/ui/ReactSelect";
import React from "react";
import { Col, Row } from "react-bootstrap";

const SelectFilterModal = ({ show, onClose }) => {
  const fundOption = [
    {
      label: "ACK Asset Partners II LP",
      value: "LP",
    },
    {
      label: "ACK Asset II LP",
      value: "ACK",
    },
    {
      label: "ACK Asset Partners LP",
      value: "Partners",
    },
  ];

  const modalStyle = {
		content: {
		width:'650px'
		},
	};

  return (
    <ReactDynamicModal
      title="Select Filters"
      show={show}
      className="select--filter--modal"
      onClose={onClose}
      additionalStyle={modalStyle}
    >
      <div className="d-flex align-items-center justify-content-end">
        <ReactButton
          className="global-outline-btn font-10 b-theme-light text-theme-default br-2 me-2"
          disabled
        >
          Reset
        </ReactButton>
        <ReactButton
          className="global-btn font-10 bg-static-black text-theme-color br-2"
          disabled
        >
          Apply
        </ReactButton>
      </div>
      <div>
        <Row className="m-0">
          <Col md={6} className="px-1">
            <ReactSelect label="Fund Name" options={fundOption} />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Account SID" />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Investor Name" />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Account No." />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Document Type" />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Document Source" />
          </Col>
          <Col md={6} className="px-1">
            <ReactSelect label="Status" />
          </Col>
        </Row>
      </div>
      <div></div>
    </ReactDynamicModal>
  );
};

export default SelectFilterModal;

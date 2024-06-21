import ReactButton from "@/components/ui/ReactButton";
import ReactModal from "@/components/ui/ReactModal";
import ReactSelect from "@/components/ui/ReactSelect";
import React from "react";
import { Col, Row } from "react-bootstrap";

const SelectFilterModal = ({ show, onClose }) => {
  const fundOption = [
    {
      label: "ACK Asset Partners II LP",
      value: "ACK Asset Partners II LP",
    },
    {
      label: "ACK Asset Partners II LP",
      value: "ACK Asset Partners II LP",
    },
    {
      label: "ACK Asset Partners II LP",
      value: "ACK Asset Partners II LP",
    },
  ];

  return (
    <ReactModal
      title="Select Grid Feilds"
      show={show}
      className="select--filter--modal"
      onClose={onClose}
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
        <Row>
          <Col md={6}>
            <ReactSelect label="Fund Name" options={fundOption} />
          </Col>
          <Col md={6}>
            <ReactSelect label="Account SID" />
          </Col>
          <Col md={6}>
            <ReactSelect label="Investor Name" />
          </Col>
          <Col md={6}>
            <ReactSelect label="Account No." />
          </Col>
          <Col md={6}>
            <ReactSelect label="Document Type" />
          </Col>
          <Col md={6}>
            <ReactSelect label="Document Source" />
          </Col>
          <Col md={6}>
            <ReactSelect label="Status" />
          </Col>
        </Row>
      </div>
      <div></div>
    </ReactModal>
  );
};

export default SelectFilterModal;

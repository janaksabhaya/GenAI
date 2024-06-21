import ReactDynamicModal from "@/components/ui/ReactModal";
import React from "react";
import { Table } from "react-bootstrap";

const DocumentDetail = ({ show, onClose }) => {
  const modalStyle = {
    overlay: {
      zIndex:'999999'
  },
    content: {
      width: "400px",
    },
  };
  return (
    <ReactDynamicModal
      show={show}
      onClose={onClose}
      className="document--details"
      title="Document Details"
      additionalStyle={modalStyle}
    >

      <Table striped className="theme-custom-table">
        <tbody>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Document Name</td>
            <td className="font-10 table-body-outline text-color">CapitalCall-123</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Document Type</td>
            <td className="font-10 table-body-outline text-color">Statement</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Document ID</td>
            <td className="font-10 table-body-outline text-color">39485858382</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Fund Name</td>
            <td className="font-10 table-body-outline text-color">ACK Asset Partners II LP</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Investor Name</td>
            <td className="font-10 table-body-outline text-color">Thomas Cramer</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Account SID</td>
            <td className="font-10 table-body-outline text-color">283747</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Account No.</td>
            <td className="font-10 table-body-outline text-color">ACK Asset Partners II LP|Thomas Cramer</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Status</td>
            <td className="font-10 table-body-outline text-color">Extracted</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Report Date</td>
            <td className="font-10 table-body-outline text-color">01-Jan-24</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Received Date</td>
            <td className="font-10 table-body-outline text-color">16-Jan-24</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Firm Name</td>
            <td className="font-10 table-body-outline text-color">Thomas Cramer</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">#Pg.</td>
            <td className="font-10 table-body-outline text-color">1</td>
          </tr>
          <tr>
            <td className="font-10 table-body-outline text-theme-default">Document Source</td>
            <td className="font-10 table-body-outline text-color">Adder</td>
          </tr>
        </tbody>
      </Table>
    </ReactDynamicModal>
  );
};

export default DocumentDetail;

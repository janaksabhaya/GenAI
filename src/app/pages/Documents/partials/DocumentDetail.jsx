import ReactDynamicModal from "@/components/ui/ReactModal";
import React from "react";
import jsonData from "../../../data/Documents/Distribution/1545328_Stmt_20231227120925858.pdf.json";
import { Table } from "react-bootstrap";
import ReactButton from "@/components/ui/ReactButton";

const DocumentDetail = ({ show, onClose, json }) => {
  const modalStyle = {
    overlay: {
      zIndex: "999999",
    },
    content: {
      width: "600px",
    },
  };

  const downloadJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(jsonData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `1545328_Stmt_20231227120925858.json`;
    link.click();
    onClose();
  };

  return (
    <ReactDynamicModal
      show={show}
      onClose={onClose}
      className="document--details"
      title="Document Details"
      additionalStyle={modalStyle}
    >
      {json ? (
        <>
          <div className="d-flex align-items-center justify-content-end">
            <ReactButton
              className="global-outline-btn font-10 b-theme-light text-theme-default br-2 me-2"
              onClick={onClose}
            >
              Copy Code
            </ReactButton>
            <ReactButton
              className="global-btn font-10 bg-static-black text-theme-color br-2"
              onClick={downloadJson}
            >
              Download
            </ReactButton>
          </div>
          <div className="json--file bg-theme br-2 b-theme mt-3">
            {typeof jsonData === "object" ? (
              <pre className="mb-0">{JSON.stringify(jsonData, null, 2)}</pre>
            ) : (
              <pre className="mb-0">{jsonData}</pre>
            )}
          </div>
        </>
      ) : (
        <Table striped className="theme-custom-table">
          <tbody>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Document Name
              </td>
              <td className="font-10 table-body-outline text-color">
                CapitalCall-123
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Document Type
              </td>
              <td className="font-10 table-body-outline text-color">
                Statement
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Document ID
              </td>
              <td className="font-10 table-body-outline text-color">
                39485858382
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Fund Name
              </td>
              <td className="font-10 table-body-outline text-color">
                ACK Asset Partners II LP
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Investor Name
              </td>
              <td className="font-10 table-body-outline text-color">
                Thomas Cramer
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Account SID
              </td>
              <td className="font-10 table-body-outline text-color">283747</td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Account No.
              </td>
              <td className="font-10 table-body-outline text-color">
                ACK Asset Partners II LP|Thomas Cramer
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Status
              </td>
              <td className="font-10 table-body-outline text-color">
                Extracted
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Report Date
              </td>
              <td className="font-10 table-body-outline text-color">
                01-Jan-24
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Received Date
              </td>
              <td className="font-10 table-body-outline text-color">
                16-Jan-24
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Firm Name
              </td>
              <td className="font-10 table-body-outline text-color">
                Thomas Cramer
              </td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                #Pg.
              </td>
              <td className="font-10 table-body-outline text-color">1</td>
            </tr>
            <tr>
              <td className="font-10 table-body-outline text-theme-default">
                Document Source
              </td>
              <td className="font-10 table-body-outline text-color">Adder</td>
            </tr>
          </tbody>
        </Table>
      )}
    </ReactDynamicModal>
  );
};

export default DocumentDetail;

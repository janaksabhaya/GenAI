import IconButton from "@/components/ui/IconButton";
import Loader from "@/components/ui/Loader";
import ReactButton from "@/components/ui/ReactButton";
import ReactDynamicModal from "@/components/ui/ReactModal";
import useMainState from "@/hooks/useMainState";
import { Icon } from "@iconify/react";
import React from "react";
import { Table } from "react-bootstrap";
import EditMetric from "./EditMetric";
import DocumentDetail from "./DocumentDetail";
import ResolveModal from "./ResolveModal";

const ViewExtractedData = ({ show, onClose, onSearchTextOnPdf, status }) => {
  const [state, changeState] = useMainState({
    jsonAction: false,
    isLoading: false,
    isEdit: false,
    editMetric: false,
    viewDetail: false,
    selectFeild: null,
    isResolve: false,
    json: false,
    data: [],
    tableType: "",
    selectedRowIndex: "",
  });

  const documents = [
    {
      documentName: "Financial-Statement-123",
      receivedOn: "16-Jan-2024",
      document_type: "statement",
      total: 10,
      found: "7/10",
      missing: "3/10",
      unverified: 2,
      mapData: [
        {
          field_name: "Investor Name",
          value: "Thomas Camer",
          default_value: "Investor_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Fund Name",
          value: "ACK Asset Pa",
          default_value: "Fund_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Document Type",
          value: "Capital Call",
          default_value: "Doc_Type",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Account ID",
          value: "TCRAMER",
          default_value: "Account_ID",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Currency",
          value: "United States Dollar",
          default_value: "Currency",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Portfolio Valuation MTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_MTD",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Portfolio Valuation YTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_YTD",
          pg: 1,
          score: "100%",
          status: "success",
        },
      ],
      unverifiedFields: [
        {
          field_name: "Email ID",
          value: "tom.cramer@tekvisions.com",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
        {
          field_name: "Fax Number",
          value: "-",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
      ],
      missingMetrics: ["Metric 1", "Metric 2", "Metric 3"],
    },
  ];

  const duplicateDocuments = [
    {
      documentName: "Financial-Statement-768",
      receivedOn: "16-Jan-2024",
      document_type: "statement",
      total: 10,
      found: "7/10",
      missing: "3/10",
      unverified: 2,
      mapData: [
        {
          field_name: "Investor Name",
          value: "Thomas Camer",
          default_value: "Investor_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Fund Name",
          value: "ACK Asset Pa",
          default_value: "Fund_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Document Type",
          value: "Capital Call",
          default_value: "Doc_Type",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Account ID",
          value: "TCRAMER",
          default_value: "Account_ID",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Currency",
          value: "United States Dollar",
          default_value: "Currency",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Portfolio Valuation MTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_MTD",
          pg: 1,
          score: "100%",
          isDuplicated: true,
          status: "success",
        },
        {
          field_name: "Portfolio Valuation YTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_YTD",
          pg: 1,
          score: "100%",
          status: "success",
        },
      ],
      unverifiedFields: [
        {
          field_name: "Email ID",
          value: "tom.cramer@tekvisions.com",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
        {
          field_name: "Fax Number",
          value: "-",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
      ],
      missingMetrics: ["Metric 1", "Metric 2", "Metric 3"],
    },
    {
      documentName: "Financial-Statement-123",
      receivedOn: "16-Jan-2024",
      document_type: "statement",
      total: 10,
      found: "7/10",
      missing: "3/10",
      unverified: 2,
      mapData: [
        {
          field_name: "Investor Name",
          value: "Thomas Camer",
          default_value: "Investor_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Fund Name",
          value: "ACK Asset Pa",
          default_value: "Fund_Name",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Document Type",
          value: "Capital Call",
          default_value: "Doc_Type",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Account ID",
          value: "TCRAMER",
          default_value: "Account_ID",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Currency",
          value: "United States Dollar",
          default_value: "Currency",
          pg: 1,
          score: "100%",
          status: "success",
        },
        {
          field_name: "Portfolio Valuation MTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_MTD",
          pg: 1,
          score: "100%",
          isDuplicated: true,
          status: "success",
        },
        {
          field_name: "Portfolio Valuation YTD",
          value: "$270,960.82",
          default_value: "Portfolio_Valuation_YTD",
          pg: 1,
          score: "100%",
          status: "success",
        },
      ],
      unverifiedFields: [
        {
          field_name: "Email ID",
          value: "tom.cramer@tekvisions.com",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
        {
          field_name: "Fax Number",
          value: "-",
          pg: 1,
          score: "100%",
          status: "unverified",
        },
      ],
      missingMetrics: ["Metric 1", "Metric 2", "Metric 3"],
    },
  ];

  const modalStyle = {
    content: {
      width: "50%",
      height: "100vh",
      padding: "0",
      borderRadius: "0px",
      transform: "translate(-50%, 0%)",
    },
  };

  const data = status == "Duplicate" ? duplicateDocuments : documents;
  return (
    <>
      <ReactDynamicModal
        show={show}
        onClose={onClose}
        className="full-screen-modal"
        additionalStyle={modalStyle}
        title="View Extracted Data"
      >
        {data.map((doc, index) => (
          <div key={index}>
            <div
              className={`d-flex align-items-center view--modal--header justify-content-between ${
                index != 0 ? "duplicate-table" : " "
              }`}
            >
              <div className="d-flex align-items-center">
                <Icon icon="lets-icons:folder-alt-fill" className="me-2" />
                <div className="divider" />
                <h4 className="font-19 mb-0 ms-2 fw-500">{doc.documentName}</h4>
              </div>
              <div className="d-flex align-items-center">
                {!state.isEdit ? (
                  <>
                    {status == "Duplicate" ? (
                      index == 0 && (
                        <ReactButton
                          className="global-btn font-10 bg-static-black text-theme-color br-2"
                          onClick={() => {
                            changeState({
                              isResolve: true,
                              data: [...data],
                            });
                          }}
                        >
                          Resolve
                        </ReactButton>
                      )
                    ) : (
                      <ReactButton
                        className="global-btn font-10 bg-static-black text-theme-color br-2"
                        onClick={() => {
                          changeState({ isEdit: true });
                        }}
                      >
                        Edit
                      </ReactButton>
                    )}
                    {index == 0 && (
                      <div className="ms-2  position-relative">
                        <IconButton
                          icon="mdi:dots-horizontal"
                          onClick={() =>
                            changeState({ jsonAction: !state.jsonAction })
                          }
                        />
                        {state.jsonAction && (
                          <div className="setting--modal theme-box-shadow border-0 position-absolute z-1 bg-white  b-theme br-2">
                            <ul className="list-unstyled my-1">
                              <li
                                className="font-10 text-color"
                                onClick={() =>
                                  changeState({
                                    viewDetail: true,
                                    json: false,
                                    jsonAction: false,
                                  })
                                }
                              >
                                View Details
                              </li>
                              <li
                                className="font-10 text-color"
                                onClick={() =>
                                  changeState({
                                    viewDetail: true,
                                    jsonAction: false,
                                    json: true,
                                  })
                                }
                              >
                                Download .json
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <ReactButton
                      className="global-outline-btn font-10 b-theme-light text-theme-default br-2 me-2"
                      onClick={() => {
                        changeState({ isEdit: false });
                      }}
                    >
                      Cancel
                    </ReactButton>
                    <ReactButton
                      className="global-btn font-10 bg-static-black text-theme-color br-2"
                      disabled
                      onClick={() => {
                        changeState({ isEdit: true });
                      }}
                    >
                      Save
                    </ReactButton>
                  </>
                )}
              </div>
            </div>
            {state.isLoading ? (
              <div className="d-flex align-items-center justify-content-center loading-height">
                <Loader isLoader={state.isLoading} />
              </div>
            ) : (
              <>
                <div className="mt-2 pt-1">
                  <div>
                    <Table
                      responsive
                      className="theme-custom-table b-theme mb-0 br-2"
                    >
                      <thead>
                        <tr className="bg-theme-light-black ">
                          <th className="text-theme-color table-head-outline font-10">
                            Document Type
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Received on
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Total
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Found
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Missing
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Unverified
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-10 table-body-outline text-color">
                            {doc.document_type}
                          </td>
                          <td className="font-10 table-body-outline text-color">
                            {doc.receivedOn}
                          </td>
                          <td className="font-10 table-body-outline text-color">
                            {doc.total}
                          </td>
                          <td className="font-10 table-body-outline text-color">
                            {doc.found}
                          </td>
                          <td className="font-10 table-body-outline text-theme-warning">
                            {doc.missing}
                          </td>
                          <td className="font-10 table-body-outline text-color">
                            {doc.unverified}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="mt-4 pt-1">
                    <h4 className="font-16 fw-400">
                      Mapped Fields ({doc.mapData.length}/10)
                    </h4>
                    <Table
                      responsive
                      striped
                      className="theme-custom-table mapped-table b-theme mb-0 br-2"
                    >
                      <thead>
                        <tr className="bg-theme-light-black ">
                          <th className="text-theme-color table-head-outline font-10"></th>
                          <th className="text-theme-color table-head-outline font-10">
                            Field Name
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Value
                          </th>
                          <th className="text-theme-color table-head-outline font-10">
                            Default Name
                          </th>
                          <th className="text-theme-color table-head-outline text-center font-10">
                            #Pg.
                          </th>
                          <th className="text-theme-color table-head-outline text-center font-10">
                            Score
                          </th>
                          <th className="text-theme-color table-head-outline text-center font-10">
                            Status
                          </th>
                          {state.isEdit && (
                            <th className="text-theme-color table-head-outline text-center font-10"></th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {doc.mapData.map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              state.tableType == "mapFields" && state.selectedRowIndex == index && "bg-select-theme"
                            } ${item.isDuplicated && "bg-theme-danger"}`}
                          >
                            <td
                              className="font-10 table-body-outline text-color text-center"
                              onClick={() => {
                                changeState({ 
                                  tableType: "mapFields",
                                  selectedRowIndex: index,
                                 });
                                onSearchTextOnPdf(item.value)
                              }}
                            >
                              <Icon icon="ph:gps-bold" />
                            </td>
                            <td className="font-10 table-body-outline text-color">
                              {item.field_name}
                            </td>
                            <td className={`font-10 table-body-outline text-color ${item.isDuplicated && "text-danger"}`}>
                              {item.value}
                            </td>
                            <td className="font-10 table-body-outline text-color">
                              {item.default_value}
                            </td>
                            <td className="font-10 table-body-outline text-color text-center">
                              {item.pg}
                            </td>
                            <td className="font-10 table-body-outline text-center">
                              {item.score}
                            </td>
                            <td className="font-10 table-body-outline status-field text-center">
                              <Icon
                                icon="solar:check-circle-bold"
                                className={
                                  item.status === "success"
                                    ? "text-theme-success"
                                    : "text-theme-warning"
                                }
                              />
                            </td>
                            {state.isEdit && (
                              <td
                                className="font-10 table-body-outline text-center"
                                onClick={() =>
                                  changeState({ editMetric: true })
                                }
                              >
                                <Icon icon="mdi:edit" />
                              </td>
                            )}
                          </tr>
                        ))}
                        {state.isEdit &&
                          doc.missingMetrics.map((metric, idx) => (
                            <tr key={idx}>
                              <td className="font-10 table-body-outline text-color text-center disable-point">
                                <Icon icon="ph:gps-bold" />
                              </td>
                              <td className="font-10 table-body-outline text-color">
                                -
                              </td>
                              <td className="font-10 table-body-outline text-color">
                                -
                              </td>
                              <td className="font-10 table-body-outline text-color">
                                {metric}
                              </td>
                              <td className="font-10 table-body-outline text-color text-center">
                                -
                              </td>
                              <td className="font-10 table-body-outline  text-center">
                                -
                              </td>
                              <td className="font-10 table-body-outline status-field text-center">
                                <Icon
                                  icon="mingcute:flag-3-fill"
                                  className="text-theme-warning"
                                />
                              </td>
                              <td
                                className="font-10 table-body-outline text-center"
                                onClick={() =>
                                  changeState({ editMetric: true })
                                }
                              >
                                <Icon icon="mdi:edit" />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                  {!state.isEdit && (
                    <div className="mt-4 pt-1">
                      <Table
                        responsive
                        className="theme-custom-table b-theme mb-0 br-2 metrics--table"
                      >
                        <tbody>
                          <tr className="bg-table">
                            <td className="font-10 table-body-outline text-color text-center">
                              <Icon
                                icon="mingcute:flag-3-fill"
                                className="text-theme-warning"
                              />
                            </td>
                            <td className="font-10 table-body-outline text-color">
                              Missing Metrics
                            </td>
                            <td className="font-10 table-body-outline text-color">
                              {doc.missingMetrics.join(", ")}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-1">
                  <h4 className="font-16 fw-400">Unverified (2)</h4>
                  <Table
                    responsive
                    striped
                    className="theme-custom-table mapped-table b-theme mb-0 br-2"
                  >
                    <thead>
                      <tr className="bg-theme-light-black ">
                        <th className="text-theme-color table-head-outline font-10"></th>
                        <th className="text-theme-color table-head-outline font-10">
                          Field Name
                        </th>
                        <th className="text-theme-color table-head-outline font-10">
                          Value
                        </th>

                        <th className="text-theme-color table-head-outline text-center font-10">
                          #Pg.
                        </th>
                        <th className="text-theme-color table-head-outline text-center font-10">
                          Score
                        </th>
                        <th className="text-theme-color table-head-outline text-center font-10">
                          Status
                        </th>
                        {state.isEdit && (
                          <th className="text-theme-color table-head-outline text-center font-10"></th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {doc.unverifiedFields.map((field, index) => (
                        <tr
                          key={index}
                          className={`${
                            state.tableType == "unverified" && state.selectedRowIndex == index && "bg-select-theme"
                          }`}
                        >
                          <td
                            className="font-10 table-body-outline text-color text-center"
                            onClick={() => {
                              changeState({ 
                                tableType: "unverified",
                                selectedRowIndex: index,
                               });
                              onSearchTextOnPdf(field.value)
                            }}
                            
                          >
                            <Icon icon="ph:gps-bold" />
                          </td>
                          <td className="font-10 table-body-outline text-color">
                            {field.field_name}
                          </td>
                          <td className={`font-10 table-body-outline text-color`}>
                            {field.value}
                          </td>
                          <td className="font-10 table-body-outline text-color text-center">
                            {field.pg}
                          </td>
                          <td className="font-10 table-body-outline text-center">
                            {field.score}
                          </td>
                          <td className="font-10 table-body-outline status-field text-center">
                            <Icon
                              icon="solar:check-circle-bold"
                              className="text-theme-warning"
                            />
                          </td>
                          {state.isEdit && (
                            <td
                              className="font-10 table-body-outline text-center"
                              onClick={() => changeState({ editMetric: true })}
                            >
                              <Icon icon="mdi:edit" />
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </>
            )}
          </div>
        ))}
      </ReactDynamicModal>
      {state.editMetric && (
        <EditMetric
          show={state.editMetric}
          onClose={() => {
            changeState({ editMetric: false });
          }}
        />
      )}
      {state.viewDetail && (
        <DocumentDetail
          show={state.viewDetail}
          onClose={() => {
            changeState({ viewDetail: false });
          }}
          json={state.json}
        />
      )}
      {state.isResolve && (
        <ResolveModal
          show={state.isResolve}
          onClose={() => {
            changeState({ isResolve: false });
          }}
          data={state.data}
        />
      )}
    </>
  );
};

export default ViewExtractedData;

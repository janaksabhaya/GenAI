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

const ViewExtractedData = ({ show, onClose }) => {
  const [state, changeState] = useMainState({
    jsonAction: false,
    isLoading: false,
    isEdit: false,
    editMetric: false,
    viewDetail: false,
  });

  const mapData = [
    {
      feild_name: "Investor Name",
      value: "Thomas Camer",
      default_value: "Investor_Name",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Fund Name",
      value: "ACK Asset Pa",
      default_value: "Fund_Name",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Document Type",
      value: "Capital Call",
      default_value: "Doc_Type",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Account ID",
      value: "TCRAMER",
      default_value: "Account_ID",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Currency",
      value: "United States Dollar",
      default_value: "Currency",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Portfolio Valuation MTD",
      value: "$270,960.82",
      default_value: "Portfolio_Valuation_MTD",
      pg: 1,
      score: "100%",
      staus: "success",
    },
    {
      feild_name: "Portfolio Valuation YTD",
      value: "$270,960.82",
      default_value: "Portfolio_Valuation_YTD",
      pg: 1,
      score: "100%",
      staus: "success",
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

  return (
    <>
      <ReactDynamicModal
        show={show}
        onClose={onClose}
        className="full-screen-modal"
        additionalStyle={modalStyle}
        title="View Extracted Data"
      >
        <div className="d-flex align-items-center view--modal--header justify-content-between">
          <div className="d-flex align-items-center">
            <Icon icon="lets-icons:folder-alt-fill" className="me-2" />
            <div className="divider" />
            <h4 className="font-19 mb-0 ms-2 fw-500">
              Financial-Statement-123
            </h4>
          </div>
          <div className="d-flex align-items-center">
            {!state.isEdit ? (
              <>
                <ReactButton
                  className="global-btn font-10 bg-static-black text-theme-color br-2"
                  onClick={() => {
                    changeState({ isEdit: true });
                  }}
                >
                  Edit
                </ReactButton>
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
                        <li className="font-10 text-color" onClick={()=>changeState({viewDetail:true , jsonAction:false})}>View Details</li>
                        <li className="font-10 text-color">Download .json</li>
                      </ul>
                    </div>
                  )}
                </div>
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
                      Statement
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      16-Jan-2024
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      10
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      7/10
                    </td>
                    <td className="font-10 table-body-outline text-theme-warning">
                      3/10
                    </td>
                    <td className="font-10 table-body-outline text-color">2</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="mt-4 pt-1">
              <h4 className="font-16 fw-400">Mapped Fields (7/10)</h4>
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
                  {mapData.map((item) => {
                    return (
                      <tr>
                        <td className="font-10 table-body-outline text-color text-center">
                          <Icon icon="ph:gps-bold" />
                        </td>
                        <td className="font-10 table-body-outline text-color">
                          {item.feild_name}
                        </td>
                        <td className="font-10 table-body-outline text-color">
                          {item.value}
                        </td>
                        <td className="font-10 table-body-outline text-color">
                          {item.default_value}
                        </td>
                        <td className="font-10 table-body-outline text-color text-center">
                          {item.pg}
                        </td>
                        <td className="font-10 table-body-outline text-theme-warning text-center">
                          {item.score}
                        </td>
                        <td className="font-10 table-body-outline status-field text-center">
                          <Icon
                            icon="solar:check-circle-bold"
                            className={
                              item.staus == "success"
                                ? "text-theme-success"
                                : "text-theme-warning"
                            }
                          />
                        </td>
                        {state.isEdit && (
                          <td
                            className="font-10 table-body-outline text-center"
                            onClick={() => {
                              changeState({ editMetric: true });
                            }}
                          >
                            <Icon icon="mdi:edit" />
                          </td>
                        )}
                      </tr>
                    );
                  })}
                  {state.isEdit && (
                    <>
                      <tr>
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
                          Metric 1
                        </td>
                        <td className="font-10 table-body-outline text-color text-center">
                          -
                        </td>
                        <td className="font-10 table-body-outline text-theme-warning text-center">
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
                          onClick={() => {
                            changeState({ editMetric: true });
                          }}
                        >
                          <Icon icon="mdi:edit" />
                        </td>
                      </tr>
                      <tr>
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
                          Metric 1
                        </td>
                        <td className="font-10 table-body-outline text-color text-center">
                          -
                        </td>
                        <td className="font-10 table-body-outline text-theme-warning text-center">
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
                          onClick={() => {
                            changeState({ editMetric: true });
                          }}
                        >
                          <Icon icon="mdi:edit" />
                        </td>
                      </tr>
                      <tr>
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
                          Metric 1
                        </td>
                        <td className="font-10 table-body-outline text-color text-center">
                          -
                        </td>
                        <td className="font-10 table-body-outline text-theme-warning text-center">
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
                          onClick={() => {
                            changeState({ editMetric: true });
                          }}
                        >
                          <Icon icon="mdi:edit" />
                        </td>
                      </tr>
                    </>
                  )}
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
                        Metric 1, Metric 2, Metric 3
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
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
                  <tr>
                    <td className="font-10 table-body-outline text-color text-center">
                      <Icon icon="ph:gps-bold" />
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      Email ID
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      tom.cramer@tekvisions.com
                    </td>

                    <td className="font-10 table-body-outline text-color text-center">
                      1
                    </td>
                    <td className="font-10 table-body-outline text-theme-warning text-center">
                      100%
                    </td>
                    <td className="font-10 table-body-outline text-color status-field text-center">
                      <Icon
                        icon="solar:check-circle-bold"
                        className={"text-theme-warning"}
                      />
                    </td>
                    {state.isEdit && (
                      <td
                        className="font-10 table-body-outline text-center"
                        onClick={() => {
                          changeState({ editMetric: true });
                        }}
                      >
                        <Icon icon="mdi:edit" />
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="font-10 table-body-outline text-color text-center">
                      <Icon icon="ph:gps-bold" />
                    </td>
                    <td className="font-10 table-body-outline text-color">
                      Fax Number
                    </td>
                    <td className="font-10 table-body-outline text-color">-</td>

                    <td className="font-10 table-body-outline text-color text-center">
                      1
                    </td>
                    <td className="font-10 table-body-outline text-theme-warning text-center">
                      100%
                    </td>
                    <td className="font-10 table-body-outline text-color status-field text-center">
                      <Icon
                        icon="solar:check-circle-bold"
                        className={"text-theme-warning"}
                      />
                    </td>
                    {state.isEdit && (
                      <td
                        className="font-10 table-body-outline text-center"
                        onClick={() => {
                          changeState({ editMetric: true });
                        }}
                      >
                        <Icon icon="mdi:edit" />
                      </td>
                    )}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </ReactDynamicModal>
      <EditMetric
        show={state.editMetric}
        onClose={() => {
          changeState({ editMetric: false });
        }}
      />
      <DocumentDetail
        show={state.viewDetail}
        onClose={() => {
          changeState({ viewDetail: false });
        }}
      />
    </>
  );
};

export default ViewExtractedData;

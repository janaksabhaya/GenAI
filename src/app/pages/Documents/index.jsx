import React, { useEffect, useMemo } from "react";
import { Card, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import PageHeader from "@/components/common/PageHeader";
import useMainState from "@/hooks/useMainState";
import Dropdowns from "@/components/ui/Dropdowns";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";
import ReactButton from "@/components/ui/ReactButton";
import { api } from "@/services";
import { apiConfig, pageRoutes } from "@/configs";
import moment from "moment";
import AddDocumentModal from "./partials/AddDocumentModal";
import { UncontrolledTooltip } from "reactstrap";
import ThemeDatePicker from "@/components/ui/DatePickerUi";
import ViewJsonModal from "./partials/ViewJsonModal";
import ViewPdfModal from "./partials/ViewPdfModal";
import ReactSelect from "@/components/ui/ReactSelect";
import CheckDocumentsModal from "./CheckDocuments";

export default function DocumentsPage() {
  const [state, changeState] = useMainState({
    top: 40,
    isLoading: false,
    viewModal: false,
    statusUpdated: false,
    addModal: false,
    fundId: "",
    fundName: "",
    accountName: "",
    firmName: "",
    DateRangePicker: [null, null],
    viewJsonModal: false,
    resetReactSelect: false,
    viewPdfModal: false,
    checkDocumentsModal: false,
    Filename: "",
    singleData: {},
    activeTab: "existing_configurations",
    columns: [
      {
        accessor: "file_name",
        Header: "File name",
        Cell: (rows, i) => {
          return (
            <>
              <div id={`FileName-${rows.row.id}`} className="">
                {rows.row.original.file_name}
                <UncontrolledTooltip
                  placement="top"
                  target={`FileName-${rows.row.id}`}
                >
                  <div className="text-uppercase">
                    {rows.row.original.file_name}
                  </div>
                </UncontrolledTooltip>
              </div>
            </>
          );
        },
      },
      {
        accessor: "doc_type",
        Header: "Doc Type",
      },
      {
        accessor: "num_pages",
        Header: "# Pages",
      },
      {
        accessor: "firm_id",
        Header: "Firm ID",
      },
      {
        accessor: "firm_name",
        Header: "Firm name",
        Cell: (rows) => {
          return (
            <>
              <div id={`Firm_name-${rows.row.id}`} className="">
                {rows.row.original.firm_name}
                <UncontrolledTooltip
                  placement="top"
                  target={`Firm_name-${rows.row.id}`}
                >
                  <div className="text-uppercase">
                    {rows.row.original.firm_name}
                  </div>
                </UncontrolledTooltip>
              </div>
            </>
          );
        },
      },
      {
        accessor: "fund_name",
        Header: "Fund",
        Cell: (rows) => {
          return (
            <>
              <div id={`Fund-${rows.row.id}`} className="">
                {rows.row.original.fund_name}
                <UncontrolledTooltip
                  placement="top"
                  target={`Fund-${rows.row.id}`}
                >
                  <div className="text-uppercase">
                    {rows.row.original.fund_name}
                  </div>
                </UncontrolledTooltip>
              </div>
            </>
          );
        },
      },
      {
        accessor: "account_name",
        Header: "Account name",
        Cell: (rows, i) => {
          return (
            <>
              <div id={`accountName-${rows.row.id}`} className="">
                {rows.row.original.account_name}
                <UncontrolledTooltip
                  placement="top"
                  target={`accountName-${rows.row.id}`}
                >
                  <div className="text-uppercase">
                    {rows.row.original.account_name}
                  </div>
                </UncontrolledTooltip>
              </div>
            </>
          );
        },
      },
      {
        accessor: "date_time",
        Header: "Date Time",
        Cell: (rows) => {
          return (
            <>
              <div>{rows.row.original.date_time}</div>
              {/* <div>{rows.row.original.Completion_Time}</div> */}
            </>
          );
        },
      },
      {
        accessor: "read_Status",
        Header: "read status",
      },
      {
        accessor: "status",
        Header: "Status",
        Cell: (rows) => {
          const status = rows.row.original.status;
          return (
            <>
              <div id={`status-${rows.row.id}`} className="status-width">
                <div
                  className={`dot-status  ${
                    status == "Received" || status == "Duplicate"
                      ? "pending-dot"
                      : status == "Extraction failed" ||
                        status == "Linking failed" ||
                        status == "Failed ingested"
                      ? "error-dot"
                      : "complete-dot"
                  }`}
                ></div>
                <UncontrolledTooltip
                  placement="top"
                  target={`status-${rows.row.id}`}
                >
                  <div className="text-uppercase">{status}</div>
                </UncontrolledTooltip>
              </div>
            </>
          );
        },
      },
      {
        accessor: "confidence",
        Header: "confidence",
      },
      {
        accessor: "action",
        Header: "Action",
      },
    ],
    // columns: [
    //   {
    //     accessor: "doc_id",
    //     Header: "Doc ID",
    //     Cell: (rows, i) => {
    //       return (
    //         <>
    //           <div id={`doc_id-${rows.row.id}`} className="">
    //             {rows.row.original.doc_id}
    //             <UncontrolledTooltip
    //               placement="top"
    //               target={`doc_id-${rows.row.id}`}
    //             >
    //               <div className="text-uppercase">
    //                 {rows.row.original.doc_id}
    //               </div>
    //             </UncontrolledTooltip>
    //           </div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "Account_Name",
    //     Header: "Account name",
    //     Cell: (rows, i) => {
    //       return (
    //         <>
    //           <div id={`accountName-${rows.row.id}`} className="">
    //             {rows.row.original.Account_Name}
    //             <UncontrolledTooltip
    //               placement="top"
    //               target={`accountName-${rows.row.id}`}
    //             >
    //               <div className="text-uppercase">
    //                 {rows.row.original.Account_Name}
    //               </div>
    //             </UncontrolledTooltip>
    //           </div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "Firm_ID",
    //     Header: "Firm ID",
    //   },
    //   {
    //     accessor: "Firm_name",
    //     Header: "Firm name",
    //     Cell: (rows) => {
    //       return (
    //         <>
    //           <div id={`Firm_name-${rows.row.id}`} className="">
    //             {rows.row.original.Firm_name}
    //             <UncontrolledTooltip
    //               placement="top"
    //               target={`Firm_name-${rows.row.id}`}
    //             >
    //               <div className="text-uppercase">
    //                 {rows.row.original.Firm_name}
    //               </div>
    //             </UncontrolledTooltip>
    //           </div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "Fund",
    //     Header: "Fund name",
    //     Cell: (rows) => {
    //       return (
    //         <>
    //           <div id={`Fund-${rows.row.id}`} className="">
    //             {rows.row.original.Fund}
    //             <UncontrolledTooltip
    //               placement="top"
    //               target={`Fund-${rows.row.id}`}
    //             >
    //               <div className="text-uppercase">{rows.row.original.Fund}</div>
    //             </UncontrolledTooltip>
    //           </div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "Document_type",
    //     Header: "Doc Type",
    //   },
    //   {
    //     accessor: "Filename",
    //     Header: "File name",
    //     Cell: (rows, i) => {
    //       return (
    //         <>
    //           <div id={`FileName-${rows.row.id}`} className="">
    //             {rows.row.original.Filename}
    //             <UncontrolledTooltip
    //               placement="top"
    //               target={`FileName-${rows.row.id}`}
    //             >
    //               <div className="text-uppercase">
    //                 {rows.row.original.Filename}
    //               </div>
    //             </UncontrolledTooltip>
    //           </div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "Type",
    //     Header: "File Type",
    //   },

    //   // {
    //   //   accessor: "FileURL",
    //   //   Header: "File URL",
    //   // },
    //   // {
    //   //   accessor: "entity_name",
    //   //   Header: "Entity Name",
    //   // },

    //   {
    //     accessor: "num_pages",
    //     Header: "# Pages",
    //   },
    //   {
    //     accessor: "Date",
    //     Header: "Date Time",
    //     Cell: (rows) => {
    //       return (
    //         <>
    //           <div>{rows.row.original.ReceivedDate}</div>
    //           <div>{rows.row.original.Completion_Time}</div>
    //         </>
    //       );
    //     },
    //   },
    //   {
    //     accessor: "read_Status",
    //     Header: "read status",
    //   },
    //   {
    //     accessor: "Current_Status",
    //     Header: "Status",
    //     Cell: (rows) => {
    //       const status = rows.row.original.Current_Status;
    //       return (
    //         <>
    //           <div
    //             className={`dot-status  ${
    //               status == "pending"
    //                 ? "pending-dot"
    //                 : status == "error"
    //                 ? "error-dot"
    //                 : "complete-dot"
    //             }`}
    //           ></div>
    //         </>
    //       );
    //     },
    //   },

    //   // {
    //   //   accessor: "Conversion Confidence score",
    //   //   Header: "Conversion Confidence score",
    //   // },
    //   {
    //     accessor: "action",
    //     Header: "Action",
    //   },
    //   // {
    //   //   accessor: "genai_score",
    //   //   Header: "GenAI Score",
    //   // },
    // ],
    data: [],
    selectedAction: "",
  });

  const changeTab = (changedTab) => {
    changeState({ activeTab: changedTab });
  };

  let docs = {
    CapCall: {
      pdf: [
        // '1552625_Stmt_20240111010709333',
        // '1554933_Stmt_20240116110708637',
        // '1556929_Stmt_20240119120243767',
        // '1560379_Stmt_20240129014238012',
        // '1562512_Stmt_20240131013751125',
        // '1562724_Stmt_20240131021650583',
        // '1564457_Stmt_20240202081417311',
        // '1564827_Stmt_20240205043328296',
        // '1567720_Stmt_20240208022007281',
        // '1567974_Stmt_20240209120824720',
        "1545328_Stmt_20231227120925858",
        "1545788_Stmt_20231227050819671",
        "1545788_Stmt_20231227050819671",
        "1547130_Stmt_20240102115046921",
        "1548299_Stmt_20240103055843655",
        "1555967_Stmt_20240118122644055",
        "1556147_Stmt_20240118020031013",
        "1560982_Stmt_20240129060254090",
        "1568277_Stmt_20240209111246157",
      ],
      json: [
        "1545328_Stmt_20231227120925858.pdf",
        "1545788_Stmt_20231227050819671.pdf",
        "1545788_Stmt_20231227050819671.pdf",
        "1547130_Stmt_20240102115046921.pdf",
        "1548299_Stmt_20240103055843655.pdf",
        "1555967_Stmt_20240118122644055.pdf",
        "1556147_Stmt_20240118020031013.pdf",
        "1560982_Stmt_20240129060254090.pdf",
        "1568277_Stmt_20240209111246157.pdf",
      ],
    },
    Distribution: {
      pdf: [
        "1545328_Stmt_20231227120925858",
        "1545788_Stmt_20231227050819671",
        "1546522_Stmt_20231229070552011",
        "1547130_Stmt_20240102115046921",
        // '1547204_Stmt_20240102033438390',
        // '1548299_Stmt_20240103055843655',
        // '1555967_Stmt_20240118122644055',
        // '1556147_Stmt_20240118020031013',
        // '1560982_Stmt_20240129060254090',
        // '1568277_Stmt_20240209111246157',
      ],
      json: [
        "1545328_Stmt_20231227120925858.pdf",
        "1545788_Stmt_20231227050819671.pdf",
        "1546522_Stmt_20231229070552011.pdf",
        "1547130_Stmt_20240102115046921.pdf",
      ],
    },
    Statement: {
      pdf: [
        "1568458_Stmt_20240212092201156",
        "1568480_Stmt_20240212110308940",
        "1568490_Stmt_20240212112618836",
        "1568515_Stmt_20240212115231083",
        "1568556_Stmt_20240212012607470",
        "1568560_Stmt_20240212013936447",
        // '1568465_Stmt_20240212093851937',
        // '1568474_Stmt_20240212102233652',
        // '1568549_Stmt_20240212011011795',
        // '1568553_Stmt_20240212011813343',
      ],
      json: [
        "1568458_Stmt_20240212092201156.pdf",
        "1568480_Stmt_20240212110308940.pdf",
        "1568490_Stmt_20240212112618836.pdf",
        "1568515_Stmt_20240212115231083.pdf",
        "1568556_Stmt_20240212012607470.pdf",
        "1568560_Stmt_20240212013936447.pdf",
      ],
    },
  };

  const exportJsonData = (files, type) => {
    api.post(`http://40.87.56.22:8000/json?file_name=${files}`).then((res) => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(res)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = `${files}.json`;

      link.click();
    });
  };

  const downloadPdf = (Filename) => {
    api
      .get(`http://40.87.56.22:8001/files/${Filename}`)
      .then((res) => {
        const fileUrl = res?.file_url;
        fetch(fileUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", Filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .catch((err) => console.error("Error downloading the file:", err));
      })
      .catch((err) => {});
  };

  const data = useMemo(() => {
    return state.data.map((row, i) => {
      const metadata = row?.Metadata && JSON.parse(row?.Metadata);
      return {
        doc_id: row?.doc_id,
        // Filename: row?.Filename || row?.File_Name,
        // Type: row?.File_Type,
        // Fund: metadata?.Fund || row?.Fund_Name,
        // // entity_name: row.Entity_Name,
        // num_pages: row?.Num_Pages,
        // Document_type: row?.Type || row?.Document_Type,
        // AccountType: metadata?.Investor,
        // Current_Status: row?.Current_Status,
        // ReceivedDate:
        //   (metadata?.Timestamp &&
        //     moment(metadata?.Timestamp).format("DD-MM-yyyy")) ||
        //   (row?.ReceivedDate &&
        //     moment(row?.ReceivedDate).format("DD-MM-yyyy HH:mm")),
        // Completion_Time:
        //   row?.Completion_Time &&
        //   moment(row?.Completion_Time).format("DD-MM-yyyy HH:mm"),

        account_name: row?.account_name,
        confidence: row?.confidence,
        date_time: row?.date_time,
        doc_type: row?.doc_type,
        file_name: row?.file_name,
        file_type: row?.file_type,
        firm_id: row?.firm_id,
        firm_name: row?.firm_name,
        fund_name: row?.fund_name,
        num_pages: row?.num_pages,
        status: row?.status,
      };
    });
  }, [state.data]);

  const getPdfUrl = (Filename) => {
    api
      .get(`http://40.87.56.22:8001/files/${Filename}`)
      .then((res) => {
        // sessionStorage.setItem("pdfUrl", res?.file_url);
        // window.open(sessionStorage.getItem("pdfUrl"), "_blank");
      })
      .catch((err) => {});
  };

  const columns = useMemo(() => {
    let _columns = [...state.columns];

    if (state.activeTab == "ignored-documents") {
      _columns = _columns.filter((e) => e.accessor != "genai_score");
    }

    return _columns.map((column) => {
      if (column.accessor == "action") {
        column.Cell = (rows) => {
          return (
            <Dropdowns
              active={state.selectedAction}
              onChange={(value) => {
                changeState({
                  selectedAction: value,
                });
                if (value === "view_doc") {
                  if (state.statusUpdated == false) {
                    const updatedData = state.data.map((item) => {
                      return item.doc_id == rows.row.original.doc_id
                        ? {
                            ...item,
                            status:
                              rows.row.original.status == "error"
                                ? "complete"
                                : rows.row.original.status,
                            // Completion_Time: new Date(),
                          }
                        : item;
                    });
                    changeState({
                      data: [...updatedData],
                      filename: rows.row.original.file_name,
                      singleData: rows.row.original,
                      viewJsonModal: true,
                      viewPdfModal: true,
                      statusUpdated: true,
                    });
                  }
                  changeState({
                    filename: rows.row.original.file_name,
                    singleData: rows.row.original,
                    viewJsonModal: true,
                    viewPdfModal: true,
                  });

                  // localStorage.setItem("fileName", rows.row.original.file_name);
                  getPdfUrl(rows.row.original.file_name);
                  // window.open(pageRoutes.documents_json, "_blank");
                }
                if (value === "view_extract_data") {
                  exportJsonData(rows.row.original.file_name);
                }
                if (value === "download") {
                  downloadPdf(rows.row.original.file_name);
                }
              }}
              data={[
                {
                  label: "View doc",
                  value: "view_doc",
                },
                // {
                //   label: "View Jason - export",
                //   value: "view_extract_data",
                // },
                {
                  label: "Download document",
                  value: "download",
                },
                {
                  label: "Document re Read",
                  value: "Document_re_Read",
                },
                {
                  label: "Audit log",
                  value: "Audit_log",
                },
                {
                  label: "Accept / Reject Duplicate",
                  value: "Accept_Reject_Duplicate",
                },
              ]}
            >
              <Icon icon="bi:three-dots-vertical" width={20} />
            </Dropdowns>
          );
        };
      } else if (column.accessor == "genai_score") {
        column.Cell = () => {
          return (
            <Dropdowns
              active={state.selectedGenAIScore}
              onChange={(value) => {
                if (value == "allow_user_feedback") {
                  onUserFeedback(value);
                }

                changeState({
                  selectedGenAIScore: value,
                });
              }}
              data={[
                {
                  label: "Allow user feedback?",
                  value: "allow_user_feedback",
                },
                {
                  label: "Retrain?",
                  value: "retrain",
                },
              ]}
            >
              <Icon icon="bi:three-dots-vertical" width={20} />
            </Dropdowns>
          );
        };
      }

      return column;
    });
  }, [
    state.activeTab,
    state.selectedAction,
    state.selectedGenAIScore,
    state.data,
  ]);

  const getDocumentData = () => {
    // api
    //   .get(`${apiConfig.document}?$top=${state.top}`)
    //   .then((response) => {
    //     changeState({ data: response.value });
    //     changeState({ isLoading: false });
    //   })
    //   .catch((err) => {
    //     changeState({ isLoading: false });
    //   });

    changeState({ isLoading: true });
    const payload = {
      fund_id: state.fundId,
      fund_name: state.fundName,
      account_name: state.accountName,
      firm_name: state.firmName,
    };
    api
      .post("http://40.87.56.22:8000/documents/filter", payload)
      .then((res) => {
        changeState({ data: res });
        changeState({ isLoading: false });
      })
      .catch((err) => {
        changeState({ isLoading: false });
      });
  };

  console.log(state.data);
  useEffect(() => {
    getDocumentData();
  }, [state.resetReactSelect]);

  const onUserFeedback = (value) => {
    Swal.fire({
      title: "Allow user feedback?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#4bc3ff",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return (
    <div className="documents-page">
      <PageHeader title="Documents" />
      <Container fluid>
        <Card className="">
          <Card.Body as="div">
            <Nav
              fill
              variant="tabs"
              className="documents--tabs gap-2"
              defaultActiveKey={state.activeTab}
            >
              <Nav.Item onClick={() => changeTab("existing_configurations")}>
                <Nav.Link
                  eventKey="existing_configurations"
                  className="font-14 text-capitalize"
                >
                  Existing configurations
                </Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => changeTab("new_configurations")}>
                <Nav.Link
                  eventKey="new_configurations"
                  className="font-14 text-capitalize"
                >
                  New configurations
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="d-flex  mt-3 document-filter card">
              <div className="card-body">
                <div className="row align-items-end">
                  <div className="col-8 row gap-x-2">
                    <div className="col-3 ">
                      <label htmlFor="" className="mb-1">
                        Fund Id
                      </label>
                      <ReactSelect
                        key={
                          state.resetReactSelect ? "rerender" : "no-rerender"
                        }
                        options={[{ label: "Fund Id", value: "Fund Id" }]}
                        placeholder="Select Fund Id"
                        value={state.fundId}
                        onChange={(e) => changeState({ fundId: e.value })}
                      />
                    </div>
                    <div className="col-3 ">
                      <label htmlFor="" className="mb-1">
                        Fund Name
                      </label>
                      <ReactSelect
                        key={
                          state.resetReactSelect ? "rerender" : "no-rerender"
                        }
                        options={[{ label: "Fund Name", value: "Fund Name" }]}
                        placeholder="Select Fund Name"
                        value={state.fundName}
                        onChange={(e) => changeState({ fundName: e.value })}
                      />
                    </div>

                    <div className="col-3">
                      <label htmlFor="" className="mb-1">
                        Acoount Name
                      </label>
                      <ReactSelect
                        key={
                          state.resetReactSelect ? "rerender" : "no-rerender"
                        }
                        options={[
                          { label: "Acoount Name", value: "Acoount Name" },
                        ]}
                        placeholder="Select Acoount Name"
                        value={state.accountName}
                        onChange={(e) => changeState({ accountName: e.value })}
                      />
                    </div>
                    <div className="col-3">
                      <label htmlFor="" className="mb-1">
                        Firm Name
                      </label>
                      <ReactSelect
                        key={
                          state.resetReactSelect ? "rerender" : "no-rerender"
                        }
                        options={[{ label: "Firm Name", value: "Firm Name" }]}
                        placeholder="Select Firm Name"
                        value={state.firmName}
                        onChange={(e) => changeState({ firmName: e.value })}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2 col-4">
                    <ReactButton
                      size="sm"
                      className="border-0 font-14 download--btn me-2"
                      onClick={getDocumentData}
                    >
                      Filter
                    </ReactButton>
                    <ReactButton
                      className=" border-0 font-14 download--btn me-2"
                      size="sm"
                      onClick={() => {
                        changeState({
                          fundId: "",
                          fundName: "",
                          accountName: "",
                          firmName: "",
                          resetReactSelect: !state.resetReactSelect,
                        });
                      }}
                    >
                      Reset
                    </ReactButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-end mt-3">
              <ThemeDatePicker
                name="date range"
                className=""
                placeholder="select date"
                startDate={state.DateRangePicker[0]}
                endDate={state.DateRangePicker[1]}
                onChange={(e) => {
                  changeState({ DateRangePicker: e.target.value });
                }}
                dateFormat="dd-MM-yyyy"
                selectsRange
              />
            </div>
            <div className="mt-3">
              <ThemeTable
                columns={columns}
                data={data}
                isLoading={state.isLoading}
              />
            </div>
          </Card.Body>
        </Card>
        {state.activeTab == "new_configurations" && (
          <div className="my-3 d-flex align-items-center gap-2">
            <ReactButton
              size="sm"
              className="d-flex align-items-center gap-2 border-0 font-14 download--btn me-2"
              onClick={() => {
                changeState({ checkDocumentsModal: true });
              }}
            >
              <Icon icon="ic:baseline-plus" className="d-block" /> check for new
              documents
            </ReactButton>

            <ReactButton
              size="sm"
              className="d-flex align-items-center gap-2 border-0 font-14 download--btn me-2"
              onClick={() => {
                changeState({ addModal: true });
              }}
            >
              <Icon icon="ic:baseline-plus" className="d-block" /> Add documents
            </ReactButton>
          </div>
        )}
        {/* <DateRangePicker
            ranges={[state.DateRangePicker]}
            onChange={(e) => changeState({ DateRangePicker: e })}
          /> */}

        {/* <ReactButton
                size="sm"
                className="d-flex align-items-center gap-2 border-0 font-14 download--btn"
                onClick={() => {}}
              >
                <Icon icon="material-symbols:download" className="d-block" />{" "}
                download
              </ReactButton> */}
      </Container>
      {/* {state.viewModal && (
        <ViewDocsModal
          isOpen={state.viewModal}
          setState={changeState}
          onClose={() => {
            changeState({
              viewModal: false,
            });
          }}
          // files={state.files}
          // docType={state.docType}
          Filename={state.Filename}
        />
      )} */}
      {state.addModal && (
        <AddDocumentModal
          isOpen={state.addModal}
          changeState={changeState}
          onClose={(newDocDetail) => {
            debugger;
            if (newDocDetail) {
              changeState({
                addModal: false,
                data: [...newDocDetail, ...state.data],
              });
            }
          }}
        />
      )}
      {state.viewJsonModal && (
        <ViewJsonModal
          isOpen={state.viewJsonModal}
          setState={changeState}
          onClose={() => {
            changeState({
              viewJsonModal: false,
            });
          }}
          singleData={state.singleData}
        />
      )}
      {state.viewPdfModal && (
        <ViewPdfModal
          isOpen={state.viewPdfModal}
          setState={changeState}
          onClose={() => {
            changeState({
              viewPdfModal: false,
            });
          }}
          singleData={state.singleData}
        />
      )}

      <CheckDocumentsModal
        isOpen={state.checkDocumentsModal}
        onClose={() => {
          changeState({
            checkDocumentsModal: false,
          });
        }}
      />
    </div>
  );
}

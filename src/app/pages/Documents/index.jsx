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
import { apiConfig } from "@/configs";
import moment from "moment";
import ViewDocsModal from "./partials/ViewDocsModal";

export default function DocumentsPage() {
  const [state, changeState] = useMainState({
    top: 40,
    isLoading: true,
    viewModal: false,
    docType: "",
    activeTab: "captured-documents",
    columns: [
      {
        accessor: "Doc_UID",
        Header: "Document ID",
      },
      {
        accessor: "Filename",
        Header: "File name",
      },
      {
        accessor: "Type",
        Header: "File Type",
      },
      {
        accessor: "FileURL",
        Header: "File URL",
      },
      {
        accessor: "EntityName",
        Header: "Entity Name",
      },
      {
        accessor: "Fund",
        Header: "Fund name",
      },
      {
        accessor: "Number of pages",
        Header: "Number of pages",
      },
      {
        accessor: "Document Type",
        Header: "Document Type",
      },
      {
        accessor: "Current Status",
        Header: "Current Status",
      },
      {
        accessor: "ReceivedDate",
        Header: "Date receive - time stamp",
      },
      {
        accessor: "Completion - time stamp",
        Header: "Completion - time stamp",
      },
      {
        accessor: "Conversion Confidence score",
        Header: "Conversion Confidence score",
      },
      {
        accessor: "action",
        Header: "Action",
      },
      {
        accessor: "genai_score",
        Header: "GenAI Score",
      },
    ],
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

  const exportJsonData = (files) => {
    import(`../../data/Documents/Statement/${files.json}`).then((res) => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(res.default)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = files.json;

      link.click();
    });
  };

  const data = useMemo(() => {
    return state.data.map((row) => {
      let randomIndex = null;
      if (["CapCall", "Distribution", "Statement"].includes(row.Type)) {
        randomIndex = Math.floor(Math.random() * docs[row.Type].pdf.length);
      }

      const metadata = JSON.parse(row.Metadata);
      return {
        Doc_UID: row.Doc_UID,
        Filename: row.Filename,
        Type: row.Type,
        Fund: metadata?.Fund,
        AccountType: metadata?.Investor,
        ReceivedDate: moment(metadata?.Timestamp).format("DD-MM-yyyy"),
        ...(randomIndex != null && {
          files: {
            pdf: `${docs[row.Type].pdf[randomIndex]}.pdf`,
            json: `${docs[row.Type].json[randomIndex]}.json`,
          },
        }),
      };
    });
  }, [state.data]);

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
                  changeState({
                    viewModal: true,
                    files: rows.row.original.files,
                  });
                }
                if (value === "view_extract_data") {
                  exportJsonData(rows.row.original.files);
                }
              }}
              data={[
                {
                  label: "View Doc",
                  value: "view_doc",
                },
                {
                  label: "View Jason - export",
                  value: "view_extract_data",
                },
                {
                  label: "View and ingest",
                  value: "view_ingest",
                },
                {
                  label: "Document re-read",
                  value: "document_re-read",
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
  }, [state.activeTab, state.selectedAction, state.selectedGenAIScore]);

  const getDocumentData = () => {
    api
      .get(`${apiConfig.document}?$top=${state.top}`)
      .then((response) => {
        changeState({ data: response.value });
        changeState({ isLoading: false });
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getDocumentData();
  }, [state.activePage]);

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
              <Nav.Item onClick={() => changeTab("captured-documents")}>
                <Nav.Link
                  eventKey="captured-documents"
                  className="font-14 text-capitalize"
                >
                  Captured for ingestion documents
                </Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => changeTab("ignored-documents")}>
                <Nav.Link
                  eventKey="ignored-documents"
                  className="font-14 text-capitalize"
                >
                  Ignored for ingestion documents
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="d-flex align-items-center justify-content-end mt-3">
              <ReactButton
                size="sm"
                className="d-flex align-items-center gap-2 border-0 font-14 download--btn"
                onClick={() => {}}
              >
                <Icon icon="material-symbols:download" className="d-block" />{" "}
                download
              </ReactButton>
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
      </Container>
      {state.viewModal && (
        <ViewDocsModal
          isOpen={state.viewModal}
          onClose={() => {
            changeState({ viewModal: false });
          }}
          files={state.files}
        />
      )}
    </div>
  );
}

import React, { useMemo, useState } from "react";
import useMainState from "@/hooks/useMainState";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import IconButton from "@/components/ui/IconButton";
import { Icon } from "@iconify/react";
import Textinput from "@/components/ui/TextInput";
import ReactButton from "@/components/ui/ReactButton";
import ThemeDatePicker from "@/components/ui/DatePickerUi";
import ViewSettingsModal from "./partials/ViewSettingsModal";
import SelectFilterModal from "./partials/SelectFilterModal";
import ThemeTablePagination from "@/components/ui/Tables/ThemeTablePagination";
import ReactSelect from "@/components/ui/ReactSelect";
import ViewExtractedData from "./partials/ViewExtractedData";
import ViewPdf from "./partials/ViewPdf";

export default function DocumentsPage() {
  const [state, changeState] = useMainState({
    rowCount: 0,
    pagesize: 20,
    viewExtracted: false,
    columns: [
      {
        accessor: "action",
        Header: "",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              <DropdownButton
                key="end"
                id={`dropdown-button-drop`}
                drop="end"
                className="custom-dropdown table-action"
                title={<Icon icon="mdi:dots-horizontal" />}
              >
                <Dropdown.Item
                  eventKey="1"
                  className="font-10 text-color"
                  onClick={() => {
                    changeState({ viewExtracted: true });
                  }}
                >
                  View Document
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" className="font-10 text-color">
                  Replay
                </Dropdown.Item>
              </DropdownButton>
            </div>
          );
        },
      },
      {
        accessor: "document_name",
        Header: "Document Name",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.document_name}
            </div>
          );
        },
      },
      {
        accessor: "document_type",
        Header: "Document Type",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.document_type}
            </div>
          );
        },
      },
      {
        accessor: "document_id",
        Header: "Document ID",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.document_id}
            </div>
          );
        },
      },
      {
        accessor: "fund_name",
        Header: "Fund Name",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.fund_name}
            </div>
          );
        },
      },
      {
        accessor: "investor_name",
        Header: "Investor Name",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.investor_name}
            </div>
          );
        },
      },
      {
        accessor: "account_SID",
        Header: "Account SID",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.account_SID}
            </div>
          );
        },
      },
      {
        accessor: "display_name",
        Header: "Account No.",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.display_name}
            </div>
          );
        },
      },
      {
        accessor: "status",
        Header: "Status",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.status}
            </div>
          );
        },
      },
      {
        accessor: "report_date",
        Header: "Report Date",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.report_date}
            </div>
          );
        },
      },
      {
        accessor: "received_date",
        Header: "Received Date",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.received_date}
            </div>
          );
        },
      },
      {
        accessor: "firm_name",
        Header: "Firm Name",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.firm_name}
            </div>
          );
        },
      },
      {
        accessor: "pg",
        Header: "#Pg.",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.pg}
            </div>
          );
        },
      },
      {
        accessor: "document_source",
        Header: "Document Source",
        Cell: (row) => {
          return (
            <div
              className={`${
                row.original.status == "Duplicate" ? "duplicate-status" : ""
              }`}
            >
              {row.original.document_source}
            </div>
          );
        },
      },
    ],
    data: [
      {
        document_name: "Financial-Statement-123",
        document_type: "Statement",
        document_id: 39485858382,
        fund_name: "ACK Asset Partners II LP",
        investor_name: "Thomas Cramer",
        account_SID: 283747,
        display_name: "ACK Asset Partners II LP|Thomas Cramer",
        status: "Extracted",
        report_date: "01-Jan-24",
        received_date: "16-Jan-24",
        firm_name: "Thomas Cramer",
        pg: 1,
        document_source: "Adder",
      },
      {
        document_name: "Financial-Statement-123",
        document_type: "Statement",
        document_id: 39485858382,
        fund_name: "ACK Asset Partners II LP",
        investor_name: "Thomas Cramer",
        account_SID: 283747,
        display_name: "ACK Asset Partners II LP|Thomas Cramer",
        status: "Duplicate",
        report_date: "01-Jan-24",
        received_date: "16-Jan-24",
        firm_name: "Thomas Cramer",
        pg: 1,
        document_source: "Adder",
      },
    ],
    settingModal: false,
    ViewSetting: false,
    filterModal: false,
    loading: false,
  });

  const onSortedChange = () => {};
  const handlePages = () => {};
  const onPageSizeChange = () => {};
  const onPageChange = () => {};

  const data = useMemo(() => {
    return state.data.map((row, i) => {
      return {
        doc_id: row?.doc_id,
        account_name: row?.account_name,
        confidence: row?.confidence,
        date_time: row?.date_time,
        doc_type: row?.doc_type,
        file_name: row?.file_name,
        file_type: row?.file_type,
        firm_name: row?.firm_name,
        fund_name: row?.fund_name,
        num_pages: row?.num_pages,
        status: row?.status,
      };
    });
  }, [state.data]);

  const options = [
    {
      label: "System Views",
      options: [{ label: "Default view", value: "default_view" }],
    },
    {
      label: "Public Views",
      options: [
        { label: "My view-1", value: "view-1" },
        { label: "My view-2", value: "view-2" },
      ],
    },
  ];

  return (
    <>
      <Container fluid>
        <div className="section-page">
          <div className="documents-page">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <h4 className="font-19 text-color mb-0">
                  Existing Configurations
                </h4>
              </div>
              <div className="d-flex align-items-center">
                <div className="document--select">
                  <ReactSelect options={options} isClearable />
                </div>
                <div className="ms-2 me-2 pe-1 position-relative">
                  <IconButton
                    icon="icon-park-solid:setting"
                    onClick={() =>
                      changeState({ settingModal: !state.settingModal })
                    }
                  />
                  {state.settingModal && (
                    <div className="setting--modal position-absolute z-1 bg-white  b-theme br-2">
                      <ul className="list-unstyled mb-0">
                        <li className="font-10">Save</li>
                        <li className="font-10">Save As</li>
                        <li className="divider-li"></li>
                        <li
                          className="font-10"
                          onClick={() => {
                            changeState({
                              ViewSetting: true,
                              settingModal: false,
                            });
                          }}
                        >
                          View Settings
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="divider" />
                <div className="filter-input">
                  <Textinput
                    isShowLabel={false}
                    isButton={true}
                    placeholder="Search by Fund Name"
                  >
                    <Icon icon="ic:baseline-close" />
                  </Textinput>
                </div>
                <div>
                  <IconButton
                    icon="mdi:filter"
                    onClick={() => {
                      changeState({ filterModal: true });
                    }}
                  />
                </div>
                <div className="ms-2 me-2 pe-1">
                  <ReactButton
                    size="sm"
                    className="clear-btn bg-primary-light br-2 font-10 "
                    disabled
                  >
                    Clear
                  </ReactButton>
                </div>
                <div className="divider" />
                <div className="filter-datepicker">
                  <ThemeDatePicker />
                </div>
                <div>
                  <IconButton icon="ph:eye-fill" />
                </div>
              </div>
            </div>

            <ThemeTablePagination
              key={state.key}
              data={state.data}
              columns={state.columns}
              page={state.page || 0}
              pageSize={state.pagesize}
              className="-striped -highlight grid"
              onSortedChange={onSortedChange}
              cancelLoader={() => {
                changeState({
                  loading: false,
                });
              }}
              onPageSizeChange={onPageSizeChange}
              onPageChange={onPageChange}
              loading={state.loading}
              manual={true}
            />
          </div>
        </div>
      </Container>
      {state.ViewSetting && (
        <ViewSettingsModal
          onClose={() => changeState({ ViewSetting: false })}
          show={state.ViewSetting}
        />
      )}
      {state.filterModal && (
        <SelectFilterModal
          onClose={() => changeState({ filterModal: false })}
          show={state.filterModal}
        />
      )}

      {console.log(state.viewExtracted, "fdsfhgfjdh")}
      {state.viewExtracted && (
        <>
          <ViewExtractedData
            onClose={() => changeState({ viewExtracted: false })}
            show={state.viewExtracted}
          />
          <ViewPdf
            onClose={() => changeState({ viewExtracted: false })}
            show={state.viewExtracted}
          />
        </>
      )}
    </>
  );
}

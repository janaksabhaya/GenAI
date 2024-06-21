import React, { useMemo } from "react";
import useMainState from "@/hooks/useMainState";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "react-bootstrap";
import IconButton from "@/components/ui/IconButton";
import Select from "react-select";
import { Icon } from "@iconify/react";
import Textinput from "@/components/ui/TextInput";
import ReactButton from "@/components/ui/ReactButton";
import ThemeDatePicker from "@/components/ui/DatePickerUi";
import ViewSettingsModal from "./partials/ViewSettingsModal";
import SelectFilterModal from "./partials/SelectFilterModal";

export default function DocumentsPage() {
  const [state, changeState] = useMainState({
    rowCount: 0,
    pagesize: 20,
    columns: [
      {
        accessor: "action",
        Header: "",
        Cell: (row) => {
          return (
            <>
              <div className="position-relative">
                <Icon icon="mdi:dots-horizontal" />
                <div className="position-absolute">
                  <ul className="list-unstyled mb-0">
                    <li></li>
                  </ul>
                </div>
              </div>
            </>
          );
        },
      },
      {
        accessor: "document_name",
        Header: "Document Name",
      },
      {
        accessor: "document_type",
        Header: "Document Type",
      },
      {
        accessor: "document_id",
        Header: "Document ID",
      },
      {
        accessor: "fund_name",
        Header: "Fund Name",
      },
      {
        accessor: "investor_name",
        Header: "Investor Name",
      },
      {
        accessor: "account_SID",
        Header: "Account SID",
      },
      {
        accessor: "display_name",
        Header: "Account No.",
      },
      {
        accessor: "status",
        Header: "Status",
      },
      {
        accessor: "report_date",
        Header: "Report Date",
      },
      {
        accessor: "received_date",
        Header: "Received Date",
      },
      {
        accessor: "firm_name",
        Header: "Firm Name",
      },
      {
        accessor: "pg",
        Header: "#Pg.",
      },
      {
        accessor: "document_source",
        Header: "Document Source",
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

  const customStyles = {
    groupHeading: (provided) => ({
      ...provided,
      fontWeight: "bold",
      color: "#252525",
      backgroundColor: "#F2F2F2",
      height: "20px",
      fontSize: "10px",
      lineHeight: "20px",
      padding: " 0 10px !important",
      margin: 0,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "10px",
      height: "23px",
      lineHeight: "23px",
      color: "#252525",
      padding: " 0 10px !important",
      margin: 0,
    }),
  };

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
                  <Select
                    options={options}
                    isClearable
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 4,
                      colors: {
                        ...theme.colors,
                        primary25: "#EBF5FF",
                        primary: "#EBF5FF",
                      },
                    })}
                    styles={customStyles}
                  />
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
                            changeState({ ViewSetting: true });
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

            <div className="table--container">
              <ReactTable
                key={state.key}
                data={state.data}
                columns={state.columns}
                page={state.page || 0}
                pages={handlePages(Math.ceil(state.rowCount / state.pagesize))}
                pageSize={state.pagesize}
                className="-striped -highlight grid"
                onSortedChange={onSortedChange}
                // NoDataComponent={() => {
                //   return (
                //     !state.loading && (
                //       <div className="rt-noData-custom">No rows found</div>
                //     )
                //   );
                // }}
                onPageSizeChange={onPageSizeChange}
                onPageChange={onPageChange}
                loading={state.loading}
                manual={true}
              />
              {state.rowCount && state.rowCount > 0 ? (
                <div className="grid-total-records">
                  {state.rowCount &&
                    `${state.rowCount.toLocaleString()} Total Records`}
                </div>
              ) : null}
            </div>
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
    </>
  );
}

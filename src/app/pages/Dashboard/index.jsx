import React from "react";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/common/PageHeader";
import ReactSelect from "@/components/ui/ReactSelect";

const columns = [
  {
    accessor: "FileName",
    Header: "File name",
  },
  {
    accessor: "FileType",
    Header: "File Type",
  },
  {
    accessor: "ProcessStatus",
    Header: "Process Status",
  },
  {
    accessor: "FundName",
    Header: "Fund name",
  },
  {
    accessor: "AccountType",
    Header: "Account Type",
  },
  {
    accessor: "ReceivedDate",
    Header: "Received date",
  },
  {
    accessor: "EffectiveDate",
    Header: "Effective date",
  },
];

const data = [
  {
    "FileName": "file1.txt",
    "FileType": "text",
    "FundName": "Fund Alpha",
    "AccountType": "Type A",
    "ReceivedDate": "2024-05-06",
    "EffectiveDate": "2024-05-10",
    "ProcessStatus": "In-progress",
  },
  {
    "FileName": "file2.docx",
    "FileType": "document",
    "FundName": "Fund Beta",
    "AccountType": "Type B",
    "ReceivedDate": "2024-05-07",
    "EffectiveDate": "2024-05-11",
    "ProcessStatus": "Processed",
  },
  {
    "FileName": "file3.xlsx",
    "FileType": "spreadsheet",
    "FundName": "Fund Gamma",
    "AccountType": "Type C",
    "ReceivedDate": "2024-05-08",
    "EffectiveDate": "2024-05-12",
    "ProcessStatus": "In-progress",
  },
  {
    "FileName": "file4.jpg",
    "FileType": "image",
    "FundName": "Fund Delta",
    "AccountType": "Type D",
    "ReceivedDate": "2024-05-09",
    "EffectiveDate": "2024-05-13",
    "ProcessStatus": "Pending",
  },
  {
    "FileName": "file5.pdf",
    "FileType": "pdf",
    "FundName": "Fund Epsilon",
    "AccountType": "Type E",
    "ReceivedDate": "2024-05-10",
    "EffectiveDate": "2024-05-14",
    "ProcessStatus": "Processed",
  },
  {
    "FileName": "file6.txt",
    "FileType": "text",
    "FundName": "Fund Zeta",
    "AccountType": "Type Z",
    "ReceivedDate": "2024-05-11",
    "EffectiveDate": "2024-05-15",
    "ProcessStatus": "Pending",
  },
  {
    "FileName": "file7.docx",
    "FileType": "document",
    "FundName": "Fund Eta",
    "AccountType": "Type H",
    "ReceivedDate": "2024-05-12",
    "EffectiveDate": "2024-05-16",
    "ProcessStatus": "Processed",
  },
  {
    "FileName": "file8.xlsx",
    "FileType": "spreadsheet",
    "FundName": "Fund Theta",
    "AccountType": "Type T",
    "ReceivedDate": "2024-05-13",
    "EffectiveDate": "2024-05-17",
    "ProcessStatus": "Pending",
  },
  {
    "FileName": "file9.jpg",
    "FileType": "image",
    "FundName": "Fund Iota",
    "AccountType": "Type I",
    "ReceivedDate": "2024-05-14",
    "EffectiveDate": "2024-05-18",
    "ProcessStatus": "Processed",
  },
  {
    "FileName": "file10.pdf",
    "FileType": "pdf",
    "FundName": "Fund Kappa",
    "AccountType": "Type K",
    "ReceivedDate": "2024-05-15",
    "EffectiveDate": "2024-05-19",
    "ProcessStatus": "Pending",
  }
];

export default function DashboardPage() {
  return (
    <div className="dashboard-page-content">
      <PageHeader title="Dashboard" />
      <Container fluid>
        <Card className="">
          <Card.Header as="div" className="d-flex align-items-center justify-content-between">

          </Card.Header>
          <Card.Body as="div">
            <div className="filters-dropdown">
              <label>Document Filter :- </label>
              <ReactSelect
                className="select-dropdown"
                value="All"
                options={[
                  {
                    "label": "All",
                    "value": "All"
                  },
                  {
                    "label": "Docs Extracted",
                    "value": "Docs Extracted"
                  },
                  {
                    "label": "Docs Failed",
                    "value": "Docs Failed"
                  },
                  {
                    "label": "A/cs linked",
                    "value": "A/cs linked"
                  },
                  {
                    "label": "A/cs linking failed",
                    "value": "A/cs linking failed"
                  },
                  {
                    "label": "RLHF suggestions for linking",
                    "value": "RLHF suggestions for linking"
                  },
                  {
                    "label": "Docs Ingested",
                    "value": "Docs Ingested"
                  },
                  {
                    "label": "Docs Ingested Failed",
                    "value": "Docs Ingested Failed"
                  },
                  {
                    "label": "Feedback from Break Resolution",
                    "value": "Feedback from Break Resolution"
                  },
                  {
                    "label": "Retraining on feedbacks",
                    "value": "Retraining on feedbacks"
                  }
                ]
                }
                onChange={() => { }}
              />
            </div>
            <ThemeTable columns={columns} data={data} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

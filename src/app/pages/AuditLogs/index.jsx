import React from "react";
import PageHeader from "@/components/common/PageHeader";
import { Card, Container } from "react-bootstrap";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import useMainState from "@/hooks/useMainState";
import Dropdowns from "@/components/ui/Dropdowns";
import { Icon } from "@iconify/react";

export default function AuditLogs() {
  const [state, changeState] = useMainState({
    selectedAction: "",
    data: [
      {
        DocumentID: "1",
        FileName: "example_document_1.pdf",
        FileType: "PDF",
        FileURL: "https://example.com/documents/example_document_1.pdf",
        EntityName: "Example Entity 1",
        FundName: "Example Fund 1",
        NumberOfPages: 10,
        DocumentType: "Financial Report",
        CurrentStatus: "Pending Review",
        AuditedBy: "John Doe",
        ReviewerComments: "Some comments...",
      },
      {
        DocumentID: "2",
        FileName: "example_document_2.docx",
        FileType: "Word Document",
        FileURL: "https://example.com/documents/example_document_2.docx",
        EntityName: "Example Entity 2",
        FundName: "Example Fund 2",
        NumberOfPages: 5,
        DocumentType: "Policy Document",
        CurrentStatus: "Approved",
        AuditedBy: "Jane Smith",
        ReviewerComments: "",
      },
    ],
    columns: [
      {
        accessor: "DocumentID",
        Header: "Document ID",
      },
      {
        accessor: "FileName",
        Header: "File name",
      },
      {
        accessor: "FileType",
        Header: "File type",
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
        accessor: "FundName",
        Header: "Fund Name",
      },
      {
        accessor: "NumberOfPages",
        Header: "Number of pages",
      },
      {
        accessor: "DocumentType",
        Header: "Document Type",
      },
      {
        accessor: "CurrentStatus",
        Header: "Current Status",
      },
      {
        accessor: "AuditedBy",
        Header: "Audited by",
      },
      {
        accessor: "ReviewerComments",
        Header: "Reviewer comments",
      },
      {
        accessor: "Action",
        Header: "Action",
        Cell: () => {
          return (
            <Dropdowns
              active={state.selectedAction}
              onChange={(value) => {
                changeState({
                  selectedAction: value,
                });
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
              ]}
            >
              <Icon icon="bi:three-dots-vertical" width={20} />
            </Dropdowns>
          );
        },
      },
    ],
  });
  return (
    <>
      <PageHeader title="Audit Logs" />
      <Container fluid>
        <Card>
          <Card.Body as="div" className="audit-logs--table">
            <ThemeTable columns={state.columns} data={state.data} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

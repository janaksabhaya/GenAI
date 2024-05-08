import React from "react";
import PageHeader from "@/components/common/PageHeader";
import { Card, Container } from "react-bootstrap";
import useMainState from "@/hooks/useMainState";
import ThemeTable from "@/components/ui/Tables/ThemeTable";

const columns = [
    {
        accessor: "timestamp",
        Header: "Timestamp",
    },
    {
        accessor: "processID",
        Header: "ProcessID",
    },
    {
        accessor: "message",
        Header: "Message",
    },
];
const data = [
    {
        timestamp: "Timestamp",
        processID: "ProcessID",
        message: "Message",
    },
    {
        timestamp: "Timestamp",
        processID: "ProcessID",
        message: "Message",
    },
];

export default function AuditLogs() {
    return (
        <>
            <PageHeader title="Audit Logs" />
            <Container fluid>
                <Card>
                    <Card.Body as="div" className="audit-logs--table">
                        <ThemeTable columns={columns} data={data} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

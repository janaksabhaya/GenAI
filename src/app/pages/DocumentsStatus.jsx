import React from "react";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";

const columns = [
	{
		accessor: "fileName",
		Header: "File name",
	},
	{
		accessor: "processingStatus",
		Header: "Processing status",
	},
	{
		accessor: "receivedDate",
		Header: "Received date",
	},
	{
		accessor: "effectiveDate",
		Header: "Effective date",
	},
	{
		accessor: "fundName",
		Header: "Fund name",
	},
	{
		accessor: "accountName",
		Header: "Account Name",
	},
];

const data = [
	{
		processingStatus: "Processed",
		receivedDate: "2024-05-06",
		effectiveDate: "2024-05-07",
		fileName: "document1.pdf",
		fundName: "Growth Equity Fund",
		accountName: "John Doe",
	},
	{
		processingStatus: "Pending",
		receivedDate: "2024-05-05",
		effectiveDate: "2024-05-07",
		fileName: "document2.pdf",
		fundName: "Balanced Mutual Fund",
		accountName: "Jane Smith",
	},
	{
		processingStatus: "Processed",
		receivedDate: "2024-05-04",
		effectiveDate: "2024-05-05",
		fileName: "document3.pdf",
		fundName: "Index Tracker Fund",
		accountName: "Alice Johnson",
	},
	{
		processingStatus: "Pending",
		receivedDate: "2024-05-03",
		effectiveDate: "2024-05-07",
		fileName: "document4.pdf",
		fundName: "Fixed Income Fund",
		accountName: "Bob Brown",
	},
	{
		processingStatus: "Processed",
		receivedDate: "2024-05-02",
		effectiveDate: "2024-05-03",
		fileName: "document5.pdf",
		fundName: "Real Estate Investment Trust",
		accountName: "Eve Wilson",
	},
	{
		processingStatus: "Pending",
		receivedDate: "2024-05-01",
		effectiveDate: "2024-05-07",
		fileName: "document6.pdf",
		fundName: "High-Yield Corporate Bond Fund",
		accountName: "Charlie Davis",
	},
	{
		processingStatus: "Processed",
		receivedDate: "2024-04-30",
		effectiveDate: "2024-05-01",
		fileName: "document7.pdf",
		fundName: "Technology Sector Fund",
		accountName: "Grace Lee",
	},
	{
		processingStatus: "Pending",
		receivedDate: "2024-04-29",
		effectiveDate: "2024-05-07",
		fileName: "document8.pdf",
		fundName: "Healthcare Industry Fund",
		accountName: "Alex Martinez",
	},
	{
		processingStatus: "Processed",
		receivedDate: "2024-04-28",
		effectiveDate: "2024-04-29",
		fileName: "document9.pdf",
		fundName: "Emerging Markets Fund",
		accountName: "Olivia Garcia",
	},
	{
		processingStatus: "Pending",
		receivedDate: "2024-04-27",
		effectiveDate: "2024-05-07",
		fileName: "document10.pdf",
		fundName: "Global Infrastructure Fund",
		accountName: "Liam Rodriguez",
	},
];

export default function DocumentsStatus() {
	return (
		<div>
			<PageHeader title="Document Status" />
			<Container fluid>
				<Card>
					<Card.Body as="div">
						<ThemeTable columns={columns} data={data} />
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

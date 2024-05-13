import React from "react";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import PageHeader from "@/components/common/PageHeader";
import ReactSelect from "@/components/ui/ReactSelect";
import ReactChart from "@/components/ui/ReactChart";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactButton from "@/components/ui/ReactButton";
import { Icon } from "@iconify/react";

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
		FileName: "file1.txt",
		FileType: "text",
		FundName: "Fund Alpha",
		AccountType: "Type A",
		ReceivedDate: "2024-05-06",
		EffectiveDate: "2024-05-10",
		ProcessStatus: "In-progress",
	},
	{
		FileName: "file2.docx",
		FileType: "document",
		FundName: "Fund Beta",
		AccountType: "Type B",
		ReceivedDate: "2024-05-07",
		EffectiveDate: "2024-05-11",
		ProcessStatus: "Processed",
	},
	{
		FileName: "file3.xlsx",
		FileType: "spreadsheet",
		FundName: "Fund Gamma",
		AccountType: "Type C",
		ReceivedDate: "2024-05-08",
		EffectiveDate: "2024-05-12",
		ProcessStatus: "In-progress",
	},
	{
		FileName: "file4.jpg",
		FileType: "image",
		FundName: "Fund Delta",
		AccountType: "Type D",
		ReceivedDate: "2024-05-09",
		EffectiveDate: "2024-05-13",
		ProcessStatus: "Pending",
	},
	{
		FileName: "file5.pdf",
		FileType: "pdf",
		FundName: "Fund Epsilon",
		AccountType: "Type E",
		ReceivedDate: "2024-05-10",
		EffectiveDate: "2024-05-14",
		ProcessStatus: "Processed",
	},
	{
		FileName: "file6.txt",
		FileType: "text",
		FundName: "Fund Zeta",
		AccountType: "Type Z",
		ReceivedDate: "2024-05-11",
		EffectiveDate: "2024-05-15",
		ProcessStatus: "Pending",
	},
	{
		FileName: "file7.docx",
		FileType: "document",
		FundName: "Fund Eta",
		AccountType: "Type H",
		ReceivedDate: "2024-05-12",
		EffectiveDate: "2024-05-16",
		ProcessStatus: "Processed",
	},
	{
		FileName: "file8.xlsx",
		FileType: "spreadsheet",
		FundName: "Fund Theta",
		AccountType: "Type T",
		ReceivedDate: "2024-05-13",
		EffectiveDate: "2024-05-17",
		ProcessStatus: "Pending",
	},
	{
		FileName: "file9.jpg",
		FileType: "image",
		FundName: "Fund Iota",
		AccountType: "Type I",
		ReceivedDate: "2024-05-14",
		EffectiveDate: "2024-05-18",
		ProcessStatus: "Processed",
	},
	{
		FileName: "file10.pdf",
		FileType: "pdf",
		FundName: "Fund Kappa",
		AccountType: "Type K",
		ReceivedDate: "2024-05-15",
		EffectiveDate: "2024-05-19",
		ProcessStatus: "Pending",
	},
];

const options = {
	chart: {
		type: "pie",
	},
	title: {
		text: "Dashboard chart",
		align: "left",
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
		point: {
			valueSuffix: "%",
		},
	},
	plotOptions: {
		series: {
			borderRadius: 5,
			dataLabels: [
				{
					enabled: true,
					distance: 15,
					format: "{point.name}",
				},
				{
					enabled: true,
					distance: "-30%",
					filter: {
						property: "percentage",
						operator: ">",
						value: 5,
					},
					format: "{point.y:.1f}%",
					style: {
						fontSize: "0.9em",
						textOutline: "none",
					},
				},
			],
		},
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
	},
	series: [
		{
			name: "Browsers",
			colorByPoint: true,
			data: [
				{
					name: "Docs Extracted",
					y: 9.47,
					drilldown: "Docs Extracted",
				},

				{
					name: "Docs Failed",
					y: 9.32,
					drilldown: "Docs Failed",
				},
				{
					name: "A/cs linked",
					y: 8.15,
					drilldown: "A/cs linked",
				},
				{
					name: "RLHF suggestions for linking",
					y: 11.02,
					drilldown: "RLHF suggestions for linking",
				},
				{
					name: "Docs Ingested",
					y: 11.02,
					drilldown: "Docs Ingested",
				},
				{
					name: "Feedback from Break Resolution",
					y: 11.02,
					drilldown: "Feedback from Break Resolution",
				},
				{
					name: "Retraining on feedbacks",
					y: 9.47,
					drilldown: "Retraining on feedbacks",
				},
			],
		},
	],
	drilldown: {
		series: [
			{
				name: "Chrome",
				id: "Chrome",
				data: [
					["v97.0", 36.89],
					["v96.0", 18.16],
					["v95.0", 0.54],
					["v94.0", 0.7],
					["v93.0", 0.8],
					["v92.0", 0.41],
					["v91.0", 0.31],
					["v90.0", 0.13],
					["v89.0", 0.14],
					["v88.0", 0.1],
					["v87.0", 0.35],
					["v86.0", 0.17],
					["v85.0", 0.18],
					["v84.0", 0.17],
					["v83.0", 0.21],
					["v81.0", 0.1],
					["v80.0", 0.16],
					["v79.0", 0.43],
					["v78.0", 0.11],
					["v76.0", 0.16],
					["v75.0", 0.15],
					["v72.0", 0.14],
					["v70.0", 0.11],
					["v69.0", 0.13],
					["v56.0", 0.12],
					["v49.0", 0.17],
				],
			},
			{
				name: "Safari",
				id: "Safari",
				data: [
					["v15.3", 0.1],
					["v15.2", 2.01],
					["v15.1", 2.29],
					["v15.0", 0.49],
					["v14.1", 2.48],
					["v14.0", 0.64],
					["v13.1", 1.17],
					["v13.0", 0.13],
					["v12.1", 0.16],
				],
			},
			{
				name: "Edge",
				id: "Edge",
				data: [
					["v97", 6.62],
					["v96", 2.55],
					["v95", 0.15],
				],
			},
			{
				name: "Firefox",
				id: "Firefox",
				data: [
					["v96.0", 4.17],
					["v95.0", 3.33],
					["v94.0", 0.11],
					["v91.0", 0.23],
					["v78.0", 0.16],
					["v52.0", 0.15],
				],
			},
		],
	},
};

export default function DashboardPage() {
	return (
		<div className="dashboard-page-content">
			<PageHeader title="Dashboard" />
			<Container fluid>
				<Card className="">
					<Card.Body as="div">
						<Row>
							<Col xxl={3}>
								<ReactChart options={options} />
							</Col>
							<Col xxl={9}>
								<div className="filters-dropdown d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center gap-2">
										<label className="font-14 text-nowrap">Document Filter :- </label>
										<ReactSelect
											className="select-dropdown"
											value="All"
											options={[
												{
													label: "All",
													value: "All",
												},
												{
													label: "Docs Extracted",
													value: "Docs Extracted",
												},
												{
													label: "Docs Failed",
													value: "Docs Failed",
												},
												{
													label: "A/cs linked",
													value: "A/cs linked",
												},
												{
													label: "A/cs linking failed",
													value: "A/cs linking failed",
												},
												{
													label: "RLHF suggestions for linking",
													value: "RLHF suggestions for linking",
												},
												{
													label: "Docs Ingested",
													value: "Docs Ingested",
												},
												{
													label: "Docs Ingested Failed",
													value: "Docs Ingested Failed",
												},
												{
													label: "Feedback from Break Resolution",
													value: "Feedback from Break Resolution",
												},
												{
													label: "Retraining on feedbacks",
													value: "Retraining on feedbacks",
												},
											]}
											onChange={() => {}}
										/>
									</div>
									<ReactButton size="sm" className="d-flex align-items-center gap-2 border-0 font-14 add-new--item" onClick={() => {}}>
										<Icon icon="tabler:plus" className="d-block" /> add new document
									</ReactButton>
								</div>
								<ThemeTable columns={columns} data={data} />
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
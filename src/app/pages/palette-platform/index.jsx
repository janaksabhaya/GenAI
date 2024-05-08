import React, { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import ReactChart from "@/components/ui/ReactChart";
import ThemeTable from "@/components/ui/Tables/ThemeTable";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { themeConfig } from "@/configs";
import ReactButton from "@/components/ui/ReactButton";
import { Icon } from "@iconify/react";
import AddNewItems from "./partials/AddNewItems";

const columns = [
	{
		accessor: "title",
		Header: "Title",
	},
	{
		accessor: "status",
		Header: "Status",
	},
	{
		accessor: "priority",
		Header: "Priority",
	},
	{
		accessor: "dueDate",
		Header: "Due Date",
	},
	{
		accessor: "superHousehold",
		Header: "Super Household",
	},
];

const data = [
	{
		title: "title",
		status: "status",
		priority: "priority",
		dueDate: "dueDate",
		superHousehold: "superHousehold",
	},
	{
		title: "title",
		status: "status",
		priority: "priority",
		dueDate: "dueDate",
		superHousehold: "superHousehold",
	},
];

const options = {
	chart: {
		type: "column",
	},
	title: {
		text: "Firm AUM",
		align: "start",
	},
	xAxis: {
		categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
		crosshair: true,
		accessibility: {
			description: "Countries",
		},
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0,
		},
	},
	series: [
		{
			name: "Corn",
			data: [406292, 260000, 107000, 68300, 27500, 14500],
		},
		{
			name: "Wheat",
			data: [51086, 136000, 5500, 141000, 107180, 77000],
		},
	],
};

const pieOptions = {
	chart: {
		type: "pie",
	},
	title: {
		text: "Egg Yolk Composition",
	},
	plotOptions: {
		series: {
			allowPointSelect: true,
			cursor: "pointer",
			dataLabels: [
				{
					enabled: true,
					distance: 20,
				},
				{
					enabled: true,
					distance: -40,
					format: "{point.percentage:.1f}%",
					style: {
						fontSize: "1.2em",
						textOutline: "none",
						opacity: 0.7,
					},
					filter: {
						operator: ">",
						property: "percentage",
						value: 10,
					},
				},
			],
		},
	},
	series: [
		{
			name: "Percentage",
			colorByPoint: true,
			data: [
				{
					name: "Water",
					y: 55.02,
				},
				{
					name: "Fat",
					sliced: true,
					selected: true,
					y: 26.71,
				},
				{
					name: "Carbohydrates",
					y: 1.09,
				},
				{
					name: "Protein",
					y: 15.5,
				},
				{
					name: "Ash",
					y: 1.68,
				},
			],
		},
	],
};

export default function PalettePlatformPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<PageHeader title="home" />
			<Container fluid>
				<Row className="row-gap-3">
					<Col xxl={3}>
						<ReactChart options={options} />
					</Col>
					<Col xxl={9}>
						<Card className="">
							<Card.Header as="div" className="d-flex align-items-center justify-content-between">
								<Link to="#!" className="font-14 text-theme-color text-decoration-none">
									My Open Tasks
								</Link>
								<ReactButton
									onClick={() => {
										setIsModalOpen(true);
									}}
									className="font-12 d-flex align-items-center gap-2"
								>
									<Icon icon="ic:round-plus" className="d-block font-16" /> Add new items
								</ReactButton>
							</Card.Header>
							<Card.Body as="div">
								<ThemeTable columns={columns} data={data} />
							</Card.Body>
						</Card>
					</Col>
					<Col xxl={3}>
						<ReactChart options={pieOptions} />
					</Col>
					<Col xxl={9}>
						<Row>
							<Col xxl={4}>
								<div className="viewer--content">
									<h1 className="font-16 mb-0 text-theme-color text-capitalize">News</h1>
									<p className="font-14 text-parimary-black text-capitalize mb-0 mt-2">
										The requested RSS feed could not be displayed. Please verify the settings and url for this feed. If this problem persists, please
										contact your administrator.
									</p>
								</div>
							</Col>
							<Col xxl={4}>
								<div className="viewer--content">
									<h1 className="font-16 mb-0 text-theme-color text-capitalize">WSRP Viewer</h1>
									<div className="d-flex align-items-baseline mt-2 gap-2">
										<img src={themeConfig.images.FileInfo} alt="FileInfo" className="img-fluid d-block" />
										<p className="font-14 text-parimary-black text-capitalize mb-0 ">
											<Link to="#!" className="text-decoration-none text-parimary-black text-nowrap">
												Open the tool pane
											</Link>
											&nbsp;Open the tool pane and select a trusted portlet server and portlet.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

			<AddNewItems
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
				}}
				onSave={() => {
					setIsModalOpen(false);
				}}
			/>
		</>
	);
}

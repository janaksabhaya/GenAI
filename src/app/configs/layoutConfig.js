import pageRoutes from "./routes";

const layoutConfig = {
	images: {},
	menus: [
		{ label: "DASHBOARD", path: pageRoutes.dashboard, childrens: [] },
		{ label: "DOCUMENTS", path: pageRoutes.documents, childrens: [] },
		{ label: "AUDIT LOGS", path: pageRoutes.audit_logs, childrens: [] },
		// {
		// 	label: "MIS",
		// 	path: "",
		// 	childrens: [
		// 		{ label: "Account Hierarchy", path: "#!" },
		// 		{ label: "Client View", path: "#!" },
		// 		{
		// 			label: "Custodian View",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Manager View",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Relationship Tracking",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Top Activity",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// {
		// 	label: "PORTFOLIO VIEWS",
		// 	path: "",
		// 	childrens: [
		// 		{ label: "Account Summary", path: "#!" },
		// 		{ label: "Alternative Investments", path: "#!" },
		// 		{ label: "Asset Allocation", path: "#!" },
		// 		{ label: "Asset Allocation Target Ranges", path: "#!" },
		// 		{ label: "Composite Flows", path: "#!" },
		// 		{
		// 			label: "Fixed Income",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Investment Gain/Loss",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Manager Performance",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Market Value",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Market Value Log",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Pivot Analyzer",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Portfolio Summary",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Realized Gain Loss",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Security Screener",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Style Performance",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Transaction Audit",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Transactions",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Unrealized Gain Loss",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// {
		// 	label: "REPORTING",
		// 	path: "",
		// 	childrens: [
		// 		{
		// 			label: "Report Management",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Published Reports",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Rebalance Report",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Report Run Scheduler",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Scheduled Report Manager",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Report Pack Manager",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// {
		// 	label: "DOCUMENT MANAGEMENT",
		// 	path: "",
		// 	childrens: [
		// 		{
		// 			label: "Custodian Forms",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Invoices",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "LoAs",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Statements",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Client Reports",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Other Documents",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// {
		// 	label: "COLLABORATION CENTER",
		// 	path: "",
		// 	childrens: [
		// 		{
		// 			label: "Collaboration Center",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Asset Hierarchy",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Benchmarks",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "FX Conversion Rates",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Last Statement Date",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Missing Cost",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Platform Login Report",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// {
		// 	label: "MANAGEMENT",
		// 	path: "",
		// 	childrens: [
		// 		{
		// 			label: "Asset Hierarchy",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Benchmark Maintenance",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Client Hierarchy",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Performance Backfill",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Security Overrides",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Login Report",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Growth Summary",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Client Fact Sheet",
		// 			path: "#!",
		// 		},
		// 		{
		// 			label: "Transaction Count",
		// 			path: "#!",
		// 		},
		// 	],
		// },
		// { label: "TAX LOT LOG", path: "" },
		// { label: "WEALTH OVERVIEW", path: "" },
		// { label: "EXTENDED REPORT DATA", path: "" },
	],
};
export default layoutConfig;

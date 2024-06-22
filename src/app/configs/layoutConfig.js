import pageRoutes from "./routes";

const layoutConfig = {
	images: {},
	menus: [
		{ label: "DASHBOARD", path: pageRoutes.dashboard, childrens: [] },
		{ label: "DOCUMENTS", path: pageRoutes.documents, childrens: [] },
		{ label: "AUDIT LOGS", path: pageRoutes.audit_logs, childrens: [] },
	],
};
export default layoutConfig;

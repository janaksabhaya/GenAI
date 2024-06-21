import { pageRoutes } from "@/configs";
import { lazy } from "react";

const Login = lazy(() => import("../pages/core/login"));
// const PalettePlatform = lazy(() => import("./../pages/palette-platform"));
// const DocumentsStatus = lazy(() => import("./../pages/DocumentsStatus"));
const DashboardPage = lazy(() => import("./../pages/Dashboard"));
const DocumentsPage = lazy(() => import("./../pages/Documents"));
// const AuditLogs = lazy(() => import("../pages/AuditLogs"));
// const DocumentJson = lazy(() => import("../pages/Documents/documentJson"));


export const webRoutes = {
	private: [
		// {
		// 	path: pageRoutes.palette_platform,
		// 	element: PalettePlatform,
		// },
		{
			path: pageRoutes.dashboard,
			element: DashboardPage,
		},
		{
			path: pageRoutes.documents,
			element: DocumentsPage,
		},
		// {
		// 	path: pageRoutes.audit_logs,
		// 	element: AuditLogs,
		// },
	],

	public: [
		{
			path: pageRoutes.login,
			element: Login,
		},
	],
};

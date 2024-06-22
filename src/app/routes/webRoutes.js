import { pageRoutes } from "@/configs";
import { lazy } from "react";

const Login = lazy(() => import("../pages/core/login"));
const DashboardPage = lazy(() => import("./../pages/Dashboard"));
const DocumentsPage = lazy(() => import("./../pages/Documents"));

export const webRoutes = {
	private: [
		{
			path: pageRoutes.dashboard,
			element: DashboardPage,
		},
		{
			path: pageRoutes.documents,
			element: DocumentsPage,
		},
	],

	public: [
		{
			path: pageRoutes.login,
			element: Login,
		},
	],
};

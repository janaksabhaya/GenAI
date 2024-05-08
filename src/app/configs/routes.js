const pageRoutes = {
	login: "/login",
	dashboard: "/",
	palette_platform: "/palette-platform",
	documents_status: "/documents-status",
	documents: "/documents",
	audit_logs:'/audit-logs'
};

export default pageRoutes;

export const filterRoute = (route) => {
	return route.substring(1);
};

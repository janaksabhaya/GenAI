const pageRoutes = {
	login: "/login",
	dashboard: "/",
	documents: "/documents",
};

export default pageRoutes;

export const filterRoute = (route) => {
	return route.substring(1);
};

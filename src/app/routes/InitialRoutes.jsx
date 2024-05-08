import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { webRoutes } from "./webRoutes";
import pageRoutes, { filterRoute } from "@/configs/routes";
import PageNotFound from "@/components/PageNotFound";
import Layout from "@/pages/core/layout";

export default function InitialRoutes() {
	return (
		<>
			<Routes>
				<Route path="*" element={<PageNotFound />} />

				{webRoutes.public.map((route, i) => (
					<Route key={i} path={filterRoute(route.path)} element={<PublicRoutes component={route.element} {...route} />} />
				))}

				<Route path="/*" element={<Layout />}>
					{webRoutes.private.map((route, i) => (
						<Route key={i} path={filterRoute(route.path)} element={<PrivateRoutes component={route.element} {...route} />} />
					))}
				</Route>
			</Routes>
		</>
	);
}

function PublicRoutes({ component: Component }) {
	// let isNotAuth = false == helper.isAuth();
	let isNotAuth = true;

	return isNotAuth ? (
		<Suspense fallback={"Loading..."}>
			<Component />
		</Suspense>
	) : (
		<Navigate to={pageRoutes.login} />
	);
}

function PrivateRoutes({ component: Component }) {
	// let isAuth = helper.isAuth();
	let isAuth = true; //static for now
	return isAuth ? <Component /> : <Navigate to={pageRoutes.login} />;
}

import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
	return (
		<div>
			<>
				<Header />
				<Suspense fallback={"Loading..."}>
					<Outlet />
				</Suspense>
			</>
		</div>
	);
}

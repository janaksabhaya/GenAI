import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";

export default function Layout() {
	return (
		<div>
			<>
				<Header />
				<Navbar />
				<Suspense fallback={"Loading..."}>
					<Outlet />
				</Suspense>
			</>
		</div>
	);
}

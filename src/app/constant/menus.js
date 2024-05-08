import { helper } from "@/services";
import { webRoutes } from "@/routes/webRoutes";
import { pageRoutes } from "@/configs";

export const menus = [
	{
		id: "dashboard",
		label: "Dashboard",
		link: "/#",
		subItems: [
			{
				id: "admin dashboard",
				label: "Admin Dashboard",
				link: pageRoutes.admin.home,
			},
		],
	},
];

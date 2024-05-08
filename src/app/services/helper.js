import _, { isArray } from "lodash";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

export const isEmpty = (value) => {
	if (value == null || value === "null") {
		return true;
	}
	if (typeof value == "object") {
		return Object.keys(value).length === 0;
	}
	return (isArray(value) && value.length === 0) || value === undefined || value === "undefined" || value == null || value === "";
};

export const isDefined = (value) => {
	return !isEmpty(value);
};

export const toaster = {
	error: (message, config = {}) => {
		toast.error(message);
	},
	success: (message, config = {}) => {
		toast.success(message);
	},
};

export const isAuth = () => {
	return false;
};

export const sweetAlert = {
	delete: () => {
		return new Promise((resolve) => {
			Swal.fire({
				title: "Are you sure?",
				text: `Are you sure you want to delete this record`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete !",
				customClass: {
					container: "custom-container",
					popup: "custom-popup",
					title: "custom-title",
					htmlContainer: "custom-html",
					confirmButton: "custom-confirm",
					cancelButton: "custom-cancel",
				},
			}).then((result) => {
				if (result.isConfirmed) {
					resolve(result);
				}
			});
		});
	},

	success: (message = "Your work has been saved") => {
		Swal.fire({
			position: "top-end",
			text: message,
			showConfirmButton: false,
			width: "300px",
			timer: 1500,
		});
	},

	deleted: (message = "Record deleted") => {
		Swal.fire("Deleted!", message, "success");
	},
};

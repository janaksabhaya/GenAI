import axios from "axios";
import { apiConfig, appConfig } from "../configs";
import { helper } from ".";

const instance = axios.create({
	baseURL: apiConfig.baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

// handle errors
instance.interceptors.request.use(
	(config) => {
		let token = localStorage.getItem(appConfig.localStorage.token);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		if (config.method === "post" || config.method === "put") {
			if (config.data instanceof FormData) {
				config.headers["Content-Type"] = "multipart/form-data";
			}
		}

		return config;
	},
	(error) => Promise.reject(error)
);
// handle errors
instance.interceptors.response.use(
	(response) => {
		return response.data.success ? response.data.data : response.data.error;
	},
	(error) => {
		// in the case, server is stoped
		if (error.code == "ERR_NETWORK") {
			helper.toaster.error("Something went wrong, Please try after sometimes.");
		}

		return Promise.reject(error);
	}
);

const post = (url, data = {}, headers = {}) => instance.post(url, data, headers);

const destroy = (url) => instance.delete(url);

const get = (url, params = {}, other = {}) =>
	instance.get(url, {
		params,
		...other,
	});

const put = (url, data, headers = {}) => instance.put(url, data, headers);

export default {
	post,
	destroy,
	get,
	put,
};

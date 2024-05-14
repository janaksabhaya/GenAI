import axios from "axios";
import { apiConfig, appConfig } from "../configs";
import { helper } from ".";

const instance = axios.create({
	baseURL: apiConfig.publicURL,
	headers: {
		"Content-Type": "application/json",
		"Ocp-Apim-Subscription-Key": "f8fe54dbfc564363860ddd98e16c39dc",
		"Integrator-Key": "x-universal-session=qCa1i4XsdFpvTThUMeQ2qFeSWDXUQbSWKEpxdAphJRt+w9QeigL6cVJ73pwk20R7nX42RRX7i3FF5bPOyNmwKkMR/LbWXx6Jg0C/Lm8q98OJj2cleY9R7EzOddMM081HXcktcQKTqMwzuMLh/a9/G0+8zgbs1BKCsCIqD0zrmfVRCd6EFXPWhsdG6v7GzpE8995BABHLgU2Kqfzubx3zKYCsQn87agVF4uQhN0pXVqsd+dGY0Z1maRtg4a80x1glo9uvLipRPVcoD0N9DUoAh+nTg4VPRLZ8BoVCca1CxY15dfD3Ni/6tIp0C7VdkCUT"
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
		return response.data;
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

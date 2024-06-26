import appConfig from "./appConfig";

const apiConfig = {
	baseURL: (appConfig.host + "/" + appConfig.prefix + "/" + appConfig.version + "/").replace(/([^:]\/)\/+/g, "$1"),

	publicURL: (appConfig.host + "/").replace(/([^:]\/)\/+/g, "$1"),

	// auth apis
	login: "login",
	document: "document/DOCUMENTS",
};

export default apiConfig;

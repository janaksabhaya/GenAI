const appConfig = {
	host: 'https://devapi.totalwealthviews.net',
	prefix: process.env.REACT_APP_API_PREFIX,

	localStorage: {
		token: "bearer-token", // for saving bearer token
	},

	persistKey: {
		authReducer: "auth",
	},
};

export default appConfig;

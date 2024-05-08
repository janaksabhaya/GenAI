const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/app/"),
			"@assets": path.resolve(__dirname, "src/assets/"),
		},
	},
};

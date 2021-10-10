export default {
	services: {
		login: process.env.VUE_APP_SERVICE_LOGIN,
		kong: process.env.VUE_APP_SERVICE_KONG,
	},
	oauth: {
		clientId: process.env.VUE_APP_CLIENT_ID,
		clientSecret: process.env.VUE_APP_CLIENT_SECRET,
		grantType: process.env.VUE_APP_CLIENT_GRANTYPE,
	},
	crypto: {
		secret: process.env.VUE_APP_CRYPTO_SECRET,
	}
};

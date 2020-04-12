
const https = require("https")
const axios = require("axios")
axios.defaults.withCredentials = true;

const API_ENDPONT = "https://localhost:44382/api/v1"

const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
	withCredentials: true
})

let cookie = null;

axios.interceptors.response.use(response => {

	if (response.headers['set-cookie']) {
		cookie = response.headers['set-cookie'];
	}

	return response;
});

axios.interceptors.request.use(config => {

	config.headers["cookie"] = cookie;

	return config;
}, error => {
	return Promise.reject(error);
});

const STEPS = [
	{
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "events manager",
	    "Username": "Wallace",
	    "Email": "Wallace@me.com",
	    "Password": "abcABC123;"
		}
	}
]

async function makeRequest(step) {
	const url = `${API_ENDPONT}/${step.domain}/${step.action}`

	console.log(url)

	try {
		const response = await axios.post(url, step.payload, {
			withCredentials: true,
			httpsAgent
		})
		console.log(response.status)
		console.log(response.data)
	} catch (e) {
		console.log("Task failure: ")
		console.log(e.response.status)
		console.log(e.response.data)
	}
}

async function main() {
	for (let i = 0; i < STEPS.length; i++) {
		console.log("Command: " + i)
		await makeRequest(STEPS[i])
		console.log("\n\n\n\n\n")
	}
}

(async () => {
	try {
		await main();
	} catch (e) {
		console.log("Program failure: ")
		console.log(e)
	}
})();


const https = require("https")
const axios = require("axios")
const base64Img = require('base64-img');

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

console.log(base64Img.base64Sync("profile-pics/Eliot_Elmer.jpg"), "base64 encoding");
const STEPS = [
  // Eliot Elmer
	{
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "events manager",
	    "Username": "E-Elmer",
	    "Email": "e.elmer@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "E-Elmer",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["Folk", "Prog Rock", "Indie", "Alt-rock", "EDM"],
      "Venues" : ["UPSU", "Back Bar"],
      "Name" : "Eliot Elmer Events",
      "Picture" : base64EncodeImg("profile-pics/Eliot_Elmer.jpg"),
      "Bio" : "Hi! I'm Elliot and I manage events for a number of venues around the Plymouth area. I have an ever growing list of venues that I provide and recommend acts for, if you think we might be suited give us a match and hopefully we can sort something out!",
      "LookingFor" : "More recently I've had requests for solo folk and indie artists who' be looking to play smaller gigs and support larger names. Perfect opportunities for the up and coming performers coming out of plymouth",
      "MatchRadius" : 50,
      "Lat" : 50.372279299999995,
      "Lon" : -4.1342303
    }
  },
  //Ted Jevans
  {
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "artist",
	    "Username": "TedJev",
	    "Email": "ted.jev@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "TedJev",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["Folk", "Rock", "Psyc Folk", "PunkFolk", "New Wave"],
      "Venues" : ["The Cavern", "The Red Lion - Totness", "The Underground", "The Blue Anchor - Teignmouth"],
      "Name" : "Ted Jevans",
      "Picture" : base64EncodeImg("profile-pics/Ted_Jevans.jpg"),
      "Bio" : "Ted Jevans here! Solo guitarist with a real passion for the emotional value of music and t's impact on people! I love playing the smaller, more intimate, venues where I can really feel the impact of my music.",
      "LookingFor" : "I'm looking for a performing buddy to support me in my local south devon pub tour where I'll be playing right across the cot from Exmouth to Plymouth",
      "MatchRadius" : 90,
      "Lat" :  50.4364847, // Totness
      "Lon" : -3.6861514000000004
    }
  },
  // Bill Tucker
	{
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "artist",
	    "Username": "TuckerMan",
	    "Email": "b.tucker@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "TuckerMan",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["EDM", "DnB", "Jump-up", "Jungle", "Bassline"],
      "Venues" : ["Factory", "The Junction", "Prysm", "The Hub"],
      "Name" : "Tucker Man - DJ",
      "Picture" : base64EncodeImg("profile-pics/Tucker_Man.jpg"),
      "Bio" : "What's up?! DJ Tucker Man here! I may be from the small town of Ivy Bridge but I've got a big attitude with even bigger beats. My fan base if growing more than ever and I'm up for some collabs",
      "LookingFor" : "I'm looking for venues to host some of my biggest events I have coming-up, alongside some other beat brothers to mix with!",
      "MatchRadius" : 50,
      "Lat" : 50.3927834, //Ivy Bridge
      "Lon" : -3.9270912000000004
    }
  },
  // Violet Eye
	{
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "artist",
	    "Username": "VioletEye",
	    "Email": "violet.eye@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "VioletEye",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["Grunge", "Alt-Rock", "Rock", "Metal", "Nu-Metal"],
      "Venues" : ["The New Quay Inn ", "Moloy's Tavern", "The Apple & Parrot", "The Cove", "The Junction", "The Ship Pub", "Chagstock - Festival"],
      "Name" : "Violet Eye",
      "Picture" : base64EncodeImg("profile-pics/Violet_Eye.jpg"),
      "Bio" : "We're a hard hitting 3 piece original Grunge and Metal band with a passion for bringing back the 90s rock sound with a new twist. We've been together for almost 3 years now, having performed at a vast number of venues and festivals across the south west and further afield",
      "LookingFor" : "We're looking for a guitarist to join us and add to our heavy sound! We're looking to expand our influence and will never say no to a new gig! ",
      "MatchRadius" : 50,
      "Lat" : 50.3755, //Plymouth
      "Lon" : -4.1427
    }
  },
  // The Junction/Underground (Peter Terrance)
  {
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "events manager",
	    "Username": "PeteT",
	    "Email": "peter.terrance@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "PeteT",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["Grunge", "Alt-Rock", "Rock", "Metal", "Nu-Metal", "Reggae", "EDM", "Punk", "Prog Rock"],
      "Venues" : ["The Junction", "The Underground"],
      "Name" : "Peter Terrance",
      "Picture" : base64EncodeImg("profile-pics/Peter_Terrance.jpg"),
      "Bio" : "I organise all the events for both the Junction an Underground pubs in plymouth, we mainly support alternate and underground original music",
      "LookingFor" : "We're always looking for new acts to perform at our venues especially those with a pre-existing following. We book roughly 6 months in advance and slots fill up fast! ",
      "MatchRadius" : 50,
      "Lat" : 50.380386300000005, //Plymouth
      "Lon" : -4.1335071999999995
    }
  },
  // The Pit and Pendulum 
  {
		domain: "account",
		action: "createaccount",
		payload: {
			"AccountRole" : "events manager",
	    "Username": "PitNPen",
	    "Email": "pit.pen@me.com",
	    "Password": "abcABC123;"
    } 
  },
  {
		domain: "account",
		action: "signin",
		payload: {
      "Credential": "PitNPen",
      "Password": "abcABC123;"
    }
  },
  {
		domain: "account",
		action: "updateaccountdetails",
		payload: {
	
      "Genres" : ["Grunge", "Alt-Rock", "Rock", "Metal", "Nu-Metal"],
      "Venues" : ["The Junction", "The Underground"],
      "Name" : "The Pit 'n Pendulum ",
      "Picture" : base64EncodeImg("profile-pics/Pit_N_Pen.jpg"),
      "Bio" : "The Pit & Pendulum is a metal & rock Pub on Ebrington Street Plymouth, we take acts from all over!",
      "LookingFor" : "We're looking specifically for original metal bands to book for our yearly summer festival! ",
      "MatchRadius" : 50,
      "Lat" : 50.3726008, //Plymouth
      "Lon" : -4.1342776
    }
  },
  
]

function base64EncodeImg(path) {
  data = base64Img.base64Sync(path)
  data = data.substring(22)
  return data
}

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

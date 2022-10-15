const businessNews = document.querySelector(".src1");
const techNews = document.querySelector(".src2");
const WSJNews = document.querySelector(".src3");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const City = document.querySelector(".City");
const listOfNews = document.querySelector(".newsList");

document.addEventListener("DOMContentLoaded", getBusinessNews);
businessNews.addEventListener("click", getBusinessNews);
techNews.addEventListener("click", getTechNews);
WSJNews.addEventListener("click", getWSJNews);

//API
let apiKey1 = API_TOKEN_HERE;
let apiKey2 = API_TOKEN_HERE;

//News Section
function getBusinessNews() {
	fetch(
		"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
			apiKey1,
		{
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => {
			if (!response.ok) {
				alert("No data found.");
				throw new Error("Cannot Find News... ");
			}
			return response.json();
		})
		.then((obj) => {
			businessArticles = obj.articles;
			listOfNews.innerHTML = "";
			businessArticles.forEach((element) => {
				let list = `<li>${element.title}<br/><a href="${element.url}" target="_blank">Read more..</a></li>`;
				listOfNews.innerHTML += list;
			});
			businessNews.disabled = true;
			techNews.disabled = false;
			WSJNews.disabled = false;
		});
}

function getTechNews() {
	fetch(
		"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + apiKey2,
		{
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => {
			if (!response.ok) {
				alert("No data found.");
				throw new Error("Cannot Find News... ");
			}
			return response.json();
		})
		.then((obj) => {
			businessArticles = obj.articles;
			listOfNews.innerHTML = "";
			businessArticles.forEach((element) => {
				let list = `<li>${element.title}<br/><a href="${element.url}" target="_blank">Read more..</a></li>`;
				listOfNews.innerHTML += list;
			});
			businessNews.disabled = false;
			techNews.disabled = true;
			WSJNews.disabled = false;
		});
}

function getWSJNews() {
	let apiKey1 = "c064d2536a8c48aaaf726544892cd00d";
	fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=" + apiKey1, {
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				alert("No data found.");
				throw new Error("Cannot Find News... ");
			}
			return response.json();
		})
		.then((obj) => {
			businessArticles = obj.articles;
			listOfNews.innerHTML = "";
			businessArticles.forEach((element) => {
				let list = `<li>${element.title}<br/><a href="${element.url}" target="_blank">Read more..</a></li>`;
				listOfNews.innerHTML += list;
			});
			businessNews.disabled = false;
			techNews.disabled = false;
			WSJNews.disabled = true;
		});
}

//Weather Section
let apiKey = "6c9676cf98ccabb0fccf37ff740afc31";
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude;
		let long = position.coords.longitude;
		getWeather(lat, long);
	});
}
function getWeather(lat, long) {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?lat=" +
			lat +
			"&lon=" +
			long +
			"&appid=" +
			apiKey,
		{
			header: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => {
			if (!response.ok) {
				alert("No weather found.");
				throw new Error("No weather found.");
			}
			return response.json();
		})
		.then((data) => {
			City.innerHTML = `<h4>${data.name}</h4>`;
			temp.innerHTML = `Temp: <strong>${data.main.temp}F</strong>`;
			desc.innerHTML = `Description: <strong>${data.weather[0].description}</strong>`;
		});
}

const axios = require("axios");

export async function postURL(url) {
  return await axios.post("http://localhost:3001", url);
}

export async function getURL(shortUrl) {
  return await axios.get(`http://localhost:3001/${shortUrl || "not-found"}`);
}

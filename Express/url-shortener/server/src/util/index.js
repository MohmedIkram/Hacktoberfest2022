require("dotenv").config();
const { MongoClient } = require("mongodb");

module.exports.getUrlsCollection = () => {
  return new MongoClient(process.env.MONGODB_URI)
    .db("UrlShortener")
    .collection("urls");
};

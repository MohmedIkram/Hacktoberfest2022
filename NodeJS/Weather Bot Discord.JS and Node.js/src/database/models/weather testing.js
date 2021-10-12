const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
    Username: String,
    userID: String,
    date: { type: String, default: Date.now },
});

const weatherData = mongoose.model("weatherData", weatherDataSchema);

module.exports = {
    weatherData,
};

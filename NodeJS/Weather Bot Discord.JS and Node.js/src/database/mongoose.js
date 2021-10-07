const mongoose = require('mongoose');

module.exports = {
  init: () => {
    mongoose.connect(
      "mongodb+srv://NoxBot:Zs08Ss16@cluster0.6urzl.mongodb.net/bunkerbot"
    );
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () => {
      console.log("The bot connected to the database.");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("The bot disconnected from the database.");
    });

    mongoose.connection.on("error", () => {
      console.log("There was an error connecting to the database.");
    });
  },
};

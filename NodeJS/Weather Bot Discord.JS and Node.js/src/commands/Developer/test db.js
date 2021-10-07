const Data = require("../../database/models/weather testing");

module.exports = {
    name: "test-db",
    description: "Database Tester For Developers",
    async execute(interaction) {
        let weatherData = await Data.weatherData.findOne({ userID: interaction.user.id });
        if (weatherData) {
            interaction.reply("```Already in database```");
        } else {
            data = new Data.weatherData({
                Username: interaction.user.tag,
                userID: interaction.user.id,
                date: new Date(),
            });
            await data.save();
            interaction.reply("```Added you to the database```");
        }
    },
};

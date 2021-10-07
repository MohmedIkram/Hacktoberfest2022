const { MessageEmbed } = require("discord.js");
const axios = require('axios')

module.exports = {
    name: "weather",
    description: "Get Weather Information For A City",
    options: [{
        type: 3,
        name: 'city',
        description: 'choose a city',
        required: true
    }],
    async execute(interaction) {
        const city = interaction.options.getString('city');
        if (!city) {
            return interaction.reply('City Was Not Provided! Provide a City To Get Information')
        }
        axios.post('https://bunkapi.xyz/api/v2/weather/840870073233309698', {city: city}, {
            headers: {
                'token': '2WJfzZGOwg4TlT4e9IUnrKkV6I1jKfEYV6u-BTk4vHH3j47bafPNO7tg3OfSgdSTGo8vvTC'
            },
        })
            .then(async res => {
                console.log(res.data)
                const embed = new MessageEmbed()
                    .setTitle(`\`\`\`${city} Weather Information\`\`\``)
                    .setDescription(`\n\n **__Location:__**\n**Country:** ${res.data.data.country}\n**State:** ${res.data.data.location}\n\n **__Temperature:__**\n **Temperature:** ${res.data.data.temp_c}°C | ${res.data.data.temp_f}°F\n **Feels Like:** ${res.data.data.feelslike_c}°C | ${res.data.data.feelslike_f}°F\n\n **__Wind Info:__**\n **Wind Speed:** ${res.data.data.wind_kph} KPH | ${res.data.data.wind_mph} MPH\n **Wind Direction:** ${res.data.data.wind_dir}\n\n **__Humidity:__**\n **Humidity:** ${res.data.data.humidity}%`)
                    .setThumbnail(`${res.data.data.img}`)
                    .setFooter('Note: This Information Might Not Be Accurate')
                    .setColor('#FEFEDF')
                await interaction.reply({embeds: [embed]});
            })
            .catch(async error => {
                console.error(error)
                if (error.response.data.error) {
                    if (error.response.data.errCode === 10684) {
                        return await interaction.reply("INVALID CITY");
                    }
                }
            })
    },
}
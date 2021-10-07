const { MessageEmbed } = require("discord.js");
const axios = require('axios')

module.exports = {
    name: "humidity",
    description: "Get Humidity Information For A City",
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
                    .setDescription(`\n\n **__Location:__**\n**Country:** ${res.data.data.country}\n**State:** ${res.data.data.location}\n\n **__Humidity:__**\n **Humidity:** ${res.data.data.humidity}%`)
                    .setThumbnail(`${res.data.data.img}`)
                    .setFooter('Note: This Information Might Not Be Accurate')
                    .setColor('#FF9671')
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
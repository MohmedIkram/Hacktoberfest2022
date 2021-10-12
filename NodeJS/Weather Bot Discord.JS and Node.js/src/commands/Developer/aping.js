const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "aping",
    description: "Sends the Latency Ping",
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setDescription(`🏓 **Pong** |  ***${interaction.client.ws.ping} ms!***`)
            .setColor("#CAF33F");
        await interaction.reply({ embeds: [embed] });
    },
};

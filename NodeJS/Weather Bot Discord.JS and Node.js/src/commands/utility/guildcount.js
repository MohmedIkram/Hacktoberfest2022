const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guild-count",
    description: "Sends The Guild Count for The Bot",
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle("Guild Count")
            .setColor("#84D9C6")
            .addField("Servers:", `${interaction.client.guilds.cache.size}`, false)
        await interaction.reply({ embeds: [embed] });
    },
};

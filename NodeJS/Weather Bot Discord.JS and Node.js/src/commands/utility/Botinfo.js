const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "botinfo",
    description: "Sends The Info For The Bot",
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle("Bot Info")
            .setColor("#5AF568")
            .addField("Servers:", `${interaction.client.guilds.cache.size}`, true)

            .addField("Users:", `${interaction.client.users.cache.size}`, true)

            .addField("Creator:", "Gladiator#7976", true)

            .addField("Version:", "1.0.0", true)

            .addField("Library:", "Discord.JS", true)

            .addField("DJS Documentation:", "https://discord.js.org/", true)

            .addField("Website:", "https://www.bunkdev.xyz/", true)

            .addField("Server:", "https://discord.gg/d5crGqkZsn", true)

            .addField("Invite Link:", "https://bit.ly/3mBf87v", true);
        await interaction.reply({ embeds: [embed] });
    },
};

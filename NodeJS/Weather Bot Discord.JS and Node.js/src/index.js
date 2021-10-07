const { Client, Collection, Intents } = require("discord.js");
const { clientId, guildId } = require("../config.json");
const { walkdir } = require("./utils/index2");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const { resolve } = require("path");

const mongoose = require("./database/mongoose");
mongoose.init();

require("dotenv").config();
const { DISCORD_TOKEN } = process.env;

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
  ],
});

client.commands = new Collection();

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

if (command === 'w' || 'weather') {
  axios
      .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apitoken}`
      )
      .then(response => {

      }
      }).catch(err => {
    message.reply(`Enter a valid city name`)
  })

(async () => {
  try {
    for await (const path of walkdir("src/commands")) {
      const command = require(resolve(path));
      client.commands.set(command.name, command);
      console.log(`Loaded "${command.name}" command`);
    }

    for await (const path of walkdir("src/events")) {
      const event = require(resolve(path));
      client[!event.once ? "on" : "once"](event.name, event.listener);
      console.log(`Loaded "${event.name}" event`);
    }

    console.log("Started refreshing application slash commands");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: [...client.commands.values()],
    });

    console.log("Successfully reloaded application slash commands");
  } catch (error) {
    console.error(error);
  }
})();

client.login(DISCORD_TOKEN);

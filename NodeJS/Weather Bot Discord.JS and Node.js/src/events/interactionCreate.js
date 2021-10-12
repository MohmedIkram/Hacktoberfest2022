module.exports = {
    name: 'interactionCreate',
    async listener(interaction) {
      if (!interaction.isCommand()) return;
      const { commandName } = interaction;
      if (!interaction.client.commands.has(commandName)) return;
  
      try {
        await interaction.client.commands.get(commandName).execute(interaction);
        // eslint-disable-next-line brace-style
      } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  };
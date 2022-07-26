const { CommandInteraction } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      return interaction.reply({ content: "This command id dead." });
    }
    command.execute(interaction, client);
  },
};

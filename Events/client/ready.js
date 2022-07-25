const { Client } = require("discord.js");

module.exports = {
  name: "ready",
  rest: true,
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(`client is logged as ${client.user.username}`);
  },
};

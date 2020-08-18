const Command = require("../../base/Command.js");

class Ping extends Command {
  constructor (client) {
    super(client, {
      name: "ping",
      description: "Latency and API response times.",
      usage: "ping",
      aliases: ["pong"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const msg = await message.channel.send('Pinging...')
      msg.edit(
        `Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\` (💗 \`${Math.round(this.client.ws.ping)}ms\`)`
      )
    } catch (err) {
      this.client.logger.err(err)
    }
  }
}

module.exports = Ping;

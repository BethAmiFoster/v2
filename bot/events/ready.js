module.exports = class {
  constructor (client) {
    this.client = client;
  }

  async run () {
    await this.client.wait(1000);
    this.client.user.setActivity(`BNA | v${this.client.package.version}`, { type: "WATCHING" }) // lol
    this.client.logger.ready(`Connected to Discord as ${this.client.user.tag}`);
  }
};

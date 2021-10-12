module.exports = {
    name: 'ready',
    once: true,
    listener(client) {
      console.log(`Logged in as ${client.user.tag}`);
    }
  };
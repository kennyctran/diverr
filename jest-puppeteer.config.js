const PORT = 14000;

module.exports = {
  launch: {
    headless: "true",
  },
  browserContext: process.env.INCOGNITO ? "incognito" : "default",
  server: {
    command: `yarn run dev --port ${PORT}`,
    port: PORT,
    launchTimeout: 10000,
  },
};

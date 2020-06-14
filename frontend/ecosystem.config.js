module.exports = {
  apps: [
    {
      name: 'pizzaveryapp',
      script: 'node_modules/serve/bin/serve.js',
      args: "-s build -l " + process.env.PORT, // Heroku will set this env var
      exec_mode: "fork_mode",
    },
  ],
};

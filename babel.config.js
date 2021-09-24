module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            helper: "./src/helper",
            screens: "./src/screens",
          },
        },
      ],
    ],
  };
};

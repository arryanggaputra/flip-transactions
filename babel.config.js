module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            lib: "./src/lib",
            screens: "./src/screens",
            components: "./src/components",
            hooks: "./src/hooks",
            types: "./src/types",
          },
        },
      ],
    ],
  };
};

import postcss from "postcss-pxtorem";

export default ({ env }) => {
  const isProd = env === "production";
  const plugins = [];

  if (isProd) {
    plugins.push(
      postcss({
        propList: ["*"],
        mediaQuery: true,
      })
    );
  }

  return {
    plugins,
  };
};

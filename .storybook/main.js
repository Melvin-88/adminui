const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const sass = require("sass");

module.exports = {
  stories: ["../src/**/stories.tsx", "../src/**/*.stories.mdx"],

  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          implementation: sass,
        },
        cssLoaderOptions: {
          modules: {
            auto: true,
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
    },
  ],

  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },

  webpackFinal: async (config) => {
    config.plugins.push(
      new EslintWebpackPlugin({
        extensions: ["tsx"],
      }),
      new StylelintPlugin({
        fix: true,
        emitErrors: true,
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          async: false,
          useTypescriptIncrementalApi: false,
          workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
          memoryLimit: ForkTsCheckerWebpackPlugin.DEFAULT_MEMORY_LIMIT,
        },
      })
    );

    const resolvePlugins = config.resolve.plugins || [];

    resolvePlugins.push(new TsconfigPathsPlugin());

    config.resolve.plugins = resolvePlugins;
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

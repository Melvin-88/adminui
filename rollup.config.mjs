import { resolve } from "path";

import typescript from "rollup-plugin-typescript2";
import tsPatch from "ts-patch/compiler/typescript.js";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import eslint from "@rollup/plugin-eslint";
import stylelint from "rollup-plugin-stylelint";
import copy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";
import styles from "rollup-plugin-styles";
import aliasImporter from "node-sass-alias-importer";

const SOURCE_DIR = "src";
const DEST_DIR = "dist";
const ROOT_INDEX = "index.ts";

const config = {
  logLevel: "debug",
  input: resolve(SOURCE_DIR, ROOT_INDEX),
  output: {
    format: "es",
    file: resolve(DEST_DIR, ROOT_INDEX.replace(/\.[tj]sx?$/, ".js")),
  },
  // to include suneditor css in the bundle
  external: [/\.css$/u],
  plugins: [
    alias({
      entries: [
        { find: /\^styles\/(.*)/, replacement: "src/assets/scss/$1.scss" },
      ],
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
    }),
    typescript({
      typescript: tsPatch,
      clean: true,
      abortOnError: true,
      tsconfigDefaults: {
        compilerOptions: {
          sourceMap: true,
          plugins: [
            { transform: "typescript-transform-paths" },
            {
              transform: "typescript-transform-paths",
              afterDeclarations: true,
            },
          ],
        },
      },
      tsconfigOverride: {
        exclude: ["**/stories.tsx", "src/docs"],
      },
    }),

    stylelint.default({
      throwOnError: true,
      throwOnWarning: true,
    }),
    styles({
      mode: ["inject", { prepend: true }],
      autoModules: /\.module\.scss/,
      sass: {
        importer: aliasImporter(
          {
            "^styles": "assets/scss",
          },
          {
            root: "./src",
          }
        ),
      },
    }),
    peerDepsExternal(),
    nodeResolve({
      browser: true,

      // TODO: double check
      preferBuiltins: true,
    }),
    commonjs(),
    copy({
      targets: [{ src: `${SOURCE_DIR}/assets`, dest: `${DEST_DIR}` }],
    }),
  ],
};

export default config;

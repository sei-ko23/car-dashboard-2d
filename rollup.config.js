import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "rollup-plugin-url";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        dir: "output",
        format: "cjs",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      terser(),
      image(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
      postcss({
        plugins: [postcssImport()],
        extensions: [".css"],
        minimize: true,
        extract: true,
      }),
      url({
        include: ["**/*.png", "**/*.jpg", "**/*.gif", "**/*.svg"],
        limit: 8192,
      }),
      commonjs(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];

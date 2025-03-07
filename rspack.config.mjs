import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';

export default defineConfig({
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [new rspack.HtmlRspackPlugin({
    templateContent: '<body><div id="root"></div></body>'
  })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic'
                }
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
});
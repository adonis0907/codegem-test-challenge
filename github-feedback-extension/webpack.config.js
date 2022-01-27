const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "index.jsx")
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 8080
    },
    // devtool: "inline-source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', { targets: "defaults" }],
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-class-properties"],
                            ["@emotion"]
                        ]
                    }
                }
            },
            {
                test: /\.(ttf|woff)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json" },
                { from: "./src/assets/logo192.png" },
                { from: "./src/assets/fonts/*.ttf", to: function(context, filePath) {
                    return "fonts/[name].[ext]";
                }},
                { from: "node_modules/webextension-polyfill/dist/browser-polyfill.min.js", to: function(context, filePath) {
                    return "browser-polyfill.min.js";
                }}
            ],
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify("http://localhost:3000"),
            IS_PRODUCTION: JSON.stringify(process.env.NODE_ENV == "production")
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx"]
        })
    ],
};
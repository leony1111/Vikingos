const path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
        ],    
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "bundle.js"
    }
};
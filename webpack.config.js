// This file export an object and this object
// lets you configure what webpack does


 // 1. entry property tells webpack where it should start proccessing your code
module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
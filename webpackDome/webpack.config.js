const path = require('path')
module.exports = {
    mode:'production',
    entry:'./demo4/src/index.js',
    output:{
        path:path.join(__dirname,'./demo4/dist'),
        filename:'main.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
}
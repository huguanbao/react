const path = require('path')
module.exports = {
    entry:{
        index:'./demo3/src/index.js',
        a:'./demo3/src/a.js'
    },
    output:{
        path:path.join(__dirname,'./demo3/dist'),
        filename:"[name]_[hash].js"
    }
    
}
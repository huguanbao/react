const path = require('path');
module.exports={
    mode:'production',
    entry:'./demo2/src/index.js',
    output:{
        path:path.join(__dirname,'./demo2/dist'),
        filename:'xixi.js'
    }
    
}
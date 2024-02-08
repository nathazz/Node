const fs = require('fs')

const newTxt = 'new.txt'

fs.stat(newTxt, (err,stats) =>{
    if(err) console.log(err)

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);
    

})
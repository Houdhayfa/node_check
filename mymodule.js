const fs=require('fs')
const path=require('path')
const { error } = require('console')

//console.log(`inputPath:${inputdir}`)
//console.log(`inputExtension:${inputext}`)
module.exports=(inputdir,inputext,callback)=>{
    fs.readdir(inputdir,['utf8',true],function(err,data){
        if(err) {return callback(err)}
       const filteredElements=data.map((elem)=>path.parse(elem)).filter(el=>el.ext==='.'+inputext).map(el=>el.base)
        
    
        callback(null,filteredElements)
    })
    
}


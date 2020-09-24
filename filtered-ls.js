const path=require('path')
const fs=require('fs')
const { error } = require('console')
const inputdir=(process.argv[2])
const inputext=`.${process.argv[3]}`
//console.log(`inputPath:${inputdir}`)
//console.log(`inputExtension:${inputext}`)

fs.readdir(inputdir,['utf8',true],function(err,data){
    if(err) {console.log('error')}
    
    
    const filteredElements=data.map((elem)=>path.parse(elem)).filter(el=>el.ext===inputext).map(el=>el.base)
    for (let i = 0; i < filteredElements.length; i++) {
        console.log(filteredElements[i]);
        
    }
    
})

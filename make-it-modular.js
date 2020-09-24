const fs=require('fs')
const mymodule=require('./mymodule')
const inputdir=(process.argv[2])
const inputext=process.argv[3]
const callbackR=(err,data)=>{
if(err){console.error('ERROR',err)}
for(let i=0;i<data.length;i++){
    console.log(data[i])
}
}
mymodule(inputdir,inputext,callbackR)
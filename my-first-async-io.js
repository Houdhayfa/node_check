const { error } = require('console')
const fs=require('fs')


const newLines=(path)=>{
    let data=fs.readFile(path[2],'utf-8',function (err,data) {
        if(err) throw error
        let arr=data.split('\n').map((ele)=>ele.trim())
    
        let length=arr.length-1
        console.log(length)
    })
    
    
}
newLines(process.argv)
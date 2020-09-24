const fs=require('fs')

const newLines=(path)=>{
    let data=fs.readFileSync(path[2],'utf-8')
    
    let arr=data.split('\n').map((ele)=>ele.trim())
    
    let length=arr.length-1
    console.log(length)
}
newLines(process.argv)
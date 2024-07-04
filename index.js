const fs= require("fs")

let data=process.argv.slice(2)
let opration =data[0]
let file = data[1]
let content=data[2]
console.log(opration, file);

function fsData(opration,file,content){
   
}

if(opration=='read'){
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
    
}
// command line: node .\index.js read test.txt


if(opration=='append'){
    fs.appendFile(file,` ${content}`, (err)=>{
        if (err){
            console.log(err);
        }else{
            console.log(`data appended`);
        }
    })
}
// command line:  node .\index.js append test.txt ' data added '


if(opration=='create'){
    fs.writeFile(file, content,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log(`file created`);
        }
    })
}
// command line:  node .\index.js create greet.txt 'hello masai '
if(opration=='delete'){
    fs.unlink(file,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`file deleted`);
        }
    })
}
// command line:  node .\index.js delete greet.txt

if(opration=="rename"){
    fs.rename(file,content,(err)=>{
        if(err){
            console.log(err);
        }
        console.log(`rename sucessful`);
    })
}
// node .\index.js rename test.txt new.txt
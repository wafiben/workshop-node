/* const fs=require('fs') */
/* console.log(fs) */
/* fs.readFile('./file.txt','utf-8',(err,response)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`this is the data from readfile ${response}`)
    }
})
const data=fs.readFileSync('./file.txt','utf-8')
console.log(`this is the data from readfile----Sync ${data}`) */
/* const a=5;
const b=6
setTimeout(() => {
    console.log('async')
}, 1000);
console.log(a);
console.log(b) */





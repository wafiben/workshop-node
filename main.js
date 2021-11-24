const {calculate,multiply}=require('./localModule');
calculate(5,6);
multiply(7,6)
const http=require('http');
const port =5000;
const server=http.createServer((request,response)=>{
    if(request.url=='/about'){
        response.end("<h1>hello from about</h1>")
    }
    else{
        response.end('hello')
    }
   
})
server.listen(port,()=>{
    console.log(`the server is running on the port ${port}`)
}) 

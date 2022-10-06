const http =require('http');

const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log("The request has been made from the browser to server");
    console.log(req.method);
    console.log(req.url);
    res.setHeader('Content-Type', 'html');
    fs.readFile('index.html',(err,fileData)=>{
        if(err) console.log(err);
        else {
            res.write(fileData);
            res.end();
        }
    })
    
});
server.listen(3000,'localhost',()=>{
    console.log("Server is listening on port 3000");
});

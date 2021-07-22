const http = require('http');
const {readFileSync} = require('fs')
//getting files
const homePage = readFileSync('./index.html','utf-8');

const server = http.createServer((req,res)=>{
    console.log('user hit the server');
    console.log(req.method);
    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end()

    //about page
    }else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About Page </h1>');
        res.end()

    //400
    }else{
        res.writeHead(400,{'content-type':'text/html'});
        res.write('<h1>page not found </h1>');
        res.end()
    }

});

server.listen(5000,(err)=>{
    if(!err){
        console.log('Server is successfully connected and running at 5000');
    }
});
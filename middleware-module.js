const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger');
const authorize = require('./authorize');

// const logger = (req,res,next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url,time);
//     // res.json({method:method,url:url,time:time});
//     next();
// }

//1. USE VS ROUTE
//2. OPTIONS OUR OWN /EXPRESS/THIRD PARTY


//to do common for all a middleware 
// app.use([logger,authorize]); 
// req => middleware => res
// app.use(expres.static('./public));

app.use(morgan('dev'));


app.get('/',(req,res,next)=>{
    console.log(req.user);
    res.json({Home:"Bangla",user:req.user});
})

app.get('/api/about',(req,res,next)=>{
    res.send("Home");
})

app.get('/api/products',(req,res,next)=>{
    res.send("Home");
})

app.get('/api/items',(req,res,next)=>{
    res.send("Home");
})

app.listen(4000,(err)=>{
    if(err){console.log("error happended",err)}
    console.log('Server is listening on port 5000.....');
})

// app.get  
// app.post 
// app.put 
// app.delete 
// app.all 
// app.use 
// app.listen
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
const cors = require('cors')
//import routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

//static assets
app.use(express.static('./public'))

// parse form data
app.use(express.urlencoded({extended:false}))

//parse json data
app.use(express.json())
//allows us to relax the security applied to an API.CORS stands for Cross-Origin Resource Sharing  
app.use(cors({origin:'*'}));

//routes
app.use('/posts', postRoute);
app.use('/users',userRoute);

app.get('/',(req,res)=>{
    res.send('We are on home');
})

app.listen(4000,(err)=>{
    if(err){console.log("error happended",err)}
    console.log('Server is listening on port 4000.....');
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION_URI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected to db');
})




// app.get  
// app.post 
// app.put 
// app.delete 
// app.all 
// app.use 
// app.listen
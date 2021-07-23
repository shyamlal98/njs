const express = require('express');
const app = express();
let { people } = require('./data')

//static assets
app.use(express.static('./method-public'))

// parse form data
app.use(express.urlencoded({extended:false}))

//parse json data
app.use(express.json())

app.get('/api/people',(req,res)=>{
    console.log(req.body);
    res.status(200).json({success:true,people:people});
});
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
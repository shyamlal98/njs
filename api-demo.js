const express = require('express');
const path = require('path');
const app = express();
const {products} = require('./data'); 

//setup static and middleware
// app.use(express.static('./public'))


app.get('/',(req,res)=>{
    console.log('user hit the resource...')
    // res.json(products);
    // res.status(200).sendFile(path.resolve(__dirname,'index.html'));
    res.send('<h1>Home Page </h1> <a href="/api/products">products</a>');
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id , name} = product;
        return {id, name};
    });
    res.json(newProducts);
});


app.get('/api/products/:id',(req,res)=>{
    console.log(req.params);
    const oneproduct = products.find(product=>product.id === Number(req.params.id));
    console.log(oneproduct);
    if(!oneproduct){
        return res.status(404).send('Product Not found');
    }
    res.json(oneproduct);
});

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter(product=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
       return res.status(200).json({success:true,data:[]});
    }
    return res.status(200).json(sortedProducts);
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>');
})

app.listen(4000,()=>{
    console.log('Server is listening on port 5000.....');
})

// app.get  
// app.post 
// app.put 
// app.delete 
// app.all 
// app.use 
// app.listen
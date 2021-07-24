const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Hello use cases");
    
})


router.route('/').get(()=>{}).post(()=>{})

module.exports = router;
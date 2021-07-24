const express =  require('express')
const router = express.Router();
const Post = require('../models/Post');
const { route } = require('./users');


//get all posts
router.get('/',async (req,res)=>{
   try {
       const posts = await Post.find();
       res.json({success:true,data:posts});
   } catch (error) {
       res.status(400).json({success:false,message:error});
   }
});

//post a specific post
router.post('/',async (req,res)=>{
     console.log(req.body);


     const post = new Post({
         title:req.body.title,
         description:req.body.description
     })
     
    try {
        const savePost = await post.save();
        res.json({success:true,data:savePost});
    } catch (error) {
        res.status(400).json({success:false,message:error});
    }
    // const savePost = await post.save();
    //  .then(data => {
    //        res.json(data);
    //  })
    //  .catch(err=>{
    //        res.status(400).json({success:false,message:err});
    //  })

});

//get a specific posts
router.get('/:postID',async (req,res)=>{
    const postId = req.params.postID;
    
    try {
        const post = await Post.find({_id:postId});
        res.json({success:true,data:post})
    } catch (error) {
        res.status(400).json({success:false,message:error});
    }

});

//delete a specific post
router.delete('/:postID',async (req,res)=>{
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.postID);
        res.json({success:true,message:deletePost});
    } catch (error) {
        res.json({success:false,message:error});
    }
})



//update a post
router.patch('/:postID',async (req,res)=>{
    try {
        const updatePost = await Post.updateOne({_id:req.params.postID},
            {$set:{title:req.body.title}
        });
        res.json({success:true,message:updatePost});
    } catch (error) {
        res.json({success:false,message:error});
    }
})
module.exports = router;
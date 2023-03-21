const express = require("express");
const router= express.Router();
const Post = require('../models/user')

router.route("/posts").post(async (req,res)=>{
    const name= req.body.name;
    const location=req.body.location;
    const likes=req.body.likes;
    const description=req.body.description;
    const PostImage= req.body.PostImage;
    const date=req.body.date;
    const newpost = new Post({
        name,
        location,
        likes,
        description,
        PostImage,
        date
    });
   
    try{
        let user= await Post.create(newpost)
        res.json({status:"success",result:user})
        console.log(user);
    }
// router.route("/posts").post(async (req,res)=>{
    // console.log(req.body)
    // const name= req.body.name;
    // const location=req.body.location;
    // const likes=req.body.likes;
    // const description=req.body.description;
    // const PostImage= req.body.PostImage;
    // const date=req.body.date;
    // const newpost = new Post({
    //     name,
    //     location,
    //     likes,
    //     description,
    //     PostImage,
    //     date
    // });

   
    // try{
    //     let user = await Post.insertMany({
    //          name: req.body.name,
    //          location:req.body.location,
    //          likes:req.body.likes,
    //          description:req.body.description,
    //          PostImage: req.body.PostImage,
    //          date:req.body.date
    //         });
    //     res.json({status:"success",result:user})
        // console.log(user);
    // }
    catch(e){
        res.json({status:"failed",result:e.message})
    }

});

router.route("/posts").get( async (req,res)=>{
   await Post.find()
    .then((data)=>res.json(data))
});

module.exports= router;
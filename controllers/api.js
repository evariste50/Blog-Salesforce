//import blog from '../models/model';
const blog = require('../models/model')
const fs = require('fs');

module.exports = class API {
       
    static  async  getAllContent(req,res){
        try {
            const response = await blog.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(404).json({'message':error.message});
        }
         
    }

    static async getContentById(req,res){
        try {
            const Id = req.params.id
            const response = await blog.findById(Id)
            res.status(200).json(response)
        } catch (error) {
            res.status(404).json({'message':error.message});
        }
    }

    static async CreatedBlogContent(req,res){
          const blogPost = req.body
          var fileName = req.file.filename;
          blogPost.image = fileName;

          try {
            await blog.create(blogPost);
            res.status(201).json({'message':'Blog Post Created Succesfully'});
          } catch (error) {
            res.status(400).json({message : error.message});
          }
    }

    static async UpdateBlogPost(req,res){
            const Id = req.params.id;
            let new_image = ""
            if (req.file) {
                new_image = req.file.filename;
                try {
                    fs.unlinkSync("./uploads"+req.body.old_image);
                } catch (error) {
                    console.log("deleted of image Failed");
                }
            }else{
                new_image = req.body.old_image;
            }

            const blogPost = req.body
            blogPost.image = new_image

            try {
                await blog.findByIdAndUpdate(Id,blogPost)
                res.status(200).json({message:"The Blog Post Updated Succesfully"})
            } catch (error) {
                res.status(400).json({'message':error.message});
            }
    }

   static async DeleteBlogPost(req,res){
    const Id = req.params.id
    try {
        await blog.findByIdAndDelete(Id);
        res.status(200).json({message:'Blog Post Delete Succesfully'});
    } catch (error) {
        res.status(400).json({'message':error.message});
    }
   }
}
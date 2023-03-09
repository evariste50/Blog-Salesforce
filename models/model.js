const moongoose = require('mongoose')

const blogSchema = moongoose.Schema({
    image:{
     type : String,
    },
    title:{
        type : String,
        required :true,
       },
    content:{
        type : String,
        required :true,
       },
    category:{
        type : String,
        required :true,
       },
    author:{
        type : String,
        required :true,
       },
    createdDate:{
        type:Date,
        default:Date.now(),
        required:true
    }
});

module.exports = moongoose.model("Blog",blogSchema);
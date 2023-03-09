const express = require('express')
const multer = require('multer')
const router = express.Router()

//import API from '../controllers/api'

const API = require('../controllers/api')

//multer middleware

let storages = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename :(req,file,cb)=>{
        cb(null,file.filename + "_" + Date.now()+"_" + file.originalname)
    }
})

let upload = multer({
    storage:storages
}).single('image')

router.get('/',API.getAllContent)
router.get('/:id',API.getContentById)
router.post('/',upload,API.CreatedBlogContent)
router.patch('/:id',upload,API.UpdateBlogPost)
router.delete('/:id',API.DeleteBlogPost)

module.exports = router
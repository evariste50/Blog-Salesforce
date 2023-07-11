const express = require('express');//creer le serveur
const multer = require('multer');//pour gerer les images
const fs = require('fs');//gerer la lecture et l'ecriture de fichier
const cors = require('cors');
const mongoose = require('mongoose'); // se connecter à la BD
require('dotenv').config();// gerer les variables environnements

const app = express();
const PORT = process.env.PORT;

//creation of different middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("uploads")) 

//connect database
async function BDConnected(){
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Connected Succesfully to Database');
    } catch (error) {
      console.error('Error when Connected to Database',error);
    }
}

BDConnected()



app.use('/blog/',require('./routes/router'))
//create and listen server

if(process.env.NODE_ENV ==='production'){
    app.use(express.static(__dirname+'/dist/'))
    app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/dist/index.html')
    })
}

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)})

// app.get('/',(req,res)=>{
//     res.json({'admin':'creation of a blog for a fun'});
// })

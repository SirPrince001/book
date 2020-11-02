const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books_Schema = new Schema({
    book_title: {
        type:String,
        required:true
    },
    author_name:{
        type:String,
        required:true
    },
    book_image_link:{
        type:String,
        required:true
    },
    book_link:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Books' , books_Schema)
const mongoose = require('mongoose')

const volunteerTemplete = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    evente:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable',volunteerTemplete)
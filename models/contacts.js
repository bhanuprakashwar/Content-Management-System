const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }    
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);
const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
          name:{
                  type:String,
                  trim:true,
                  minlength:8,  
          },
          url:{
                    type:String,
                    minlength:6,
                    trim:true
          },
},{collection:'images'});

const Image = mongoose.model('Image',imageSchema);

module.exports = Image;
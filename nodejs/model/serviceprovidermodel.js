const mongoose = require('mongoose');

const services = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String},
    age:{type:Number},
    sex:{type:String},
    experience:{type:String},
    longitude:{type: Number},
    latitude:{type:Number},
    date:{type:Date,default: Date.now()}
});

module.exports = serviceprovider = mongoose.model('serviceprovidermodel',services);
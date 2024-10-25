const express = require('express');
const router = express.Router();

const serviceprovidermodel = require('../model/serviceprovidermodel');

router.get('/',(req,res)=>{
serviceprovidermodel.find().then(service=>res.json(service));
});

router.post('/',(req,res)=>{
    var newservice = new serviceprovidermodel({
        name:req.body.name,
        address:req.body.address,
        age:req.body.age,
        sex:req.body.sex,
        experience:req.body.experience,
        longitude:req.body.longitude,
        latitude:req.body.latitude
    });
    newservice.save().then(service=>res.json(service));
});

module.exports = router;
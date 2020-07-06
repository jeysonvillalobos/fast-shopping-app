const express = require("express");
const router = express.Router();
const load = require('../../middleware/load');
const usersModel = load.Model("usersModel");

router.post('/insert',function(req,res){

    let fullname = req.body.fullname;
    let id = req.body.id;
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;

    usersModel.insert(fullname,id,address,phoneNumber,email);
    res.json({status:true});
    
});

router.post('/searchEmail',function(req,res){

    let email = req.body.email;
    usersModel.searchEmail(email,function(rel){
        res.json(rel);
    });


});


module.exports = router;
const express = require("express");
const router = express.Router();
const load = require('../middleware/load');
const USERS_MODEL = load.Model("usersModel");

router.post('/insert',function(req,res){

    let fullname = req.body.fullname;
    let id = req.body.id;
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
    let products = req.body.products

    if(
        fullname != '',
        id != '',
        address != '',
        phoneNumber != '',
        email != ''
    ){
        USERS_MODEL.insert(fullname,id,address,phoneNumber,email,products,function(rel){
            res.json(rel);
        });
    }
    else{
        res.json({
            status:false,
            msg:'Fill in the blanks'
        });
    }
    
    
});

router.post('/searchEmail',function(req,res){
    let email = req.body.email;

    USERS_MODEL.searchEmail(email,function(rel){
        res.json(rel);
    });
});

router.post('/insertUserByEmail',function(req,res){
    let email = req.body.email;
    let products = req.body.products;
    USERS_MODEL.insertUserByEmail(email,products);
});


module.exports = router;
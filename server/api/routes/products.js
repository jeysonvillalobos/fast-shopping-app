const express = require("express");
const router = express.Router();
const load = require('../../middleware/load');
const productsModel = load.Model("productsModel");

router.get('/',function(req,res){

    productsModel.allProducts(function(rel){
        res.json(rel);
    });
    
});


module.exports = router;
const express = require("express");
const router = express.Router();
const load = require('../middleware/load');
const PRODUCTS_MODEL = load.Model("productsModel");

router.get('/page/:offset',function(req,res){
    var offset = req.params.offset;
    PRODUCTS_MODEL.allProducts(offset,function(rel){
        res.json(rel);
    });
});

router.get('/pagination',function(req,res){
    PRODUCTS_MODEL.pagination(function(rel){
        res.json(rel);
    });
});


module.exports = router;
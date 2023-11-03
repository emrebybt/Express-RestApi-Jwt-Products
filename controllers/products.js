const express = require('express')

const Product = require('../models/product')

exports.getProducts=(req,res,next)=>{
    Product.find()
    .then(products=>{
        res.json(products)
    })
    //res.json({message:'Api çalıştı'})
}

exports.postProduct=(req,res,next)=>{
    const {name,price,stock,imageUrl,category} = req.body
    const product = new Product({
        name:name,
        price:price,
        stock:stock,
        imageUrl:imageUrl,
        category:category
    })
    product.save()
    .then((product)=>{
        res.json(product)
    })
    .catch(err=>{
        res.json({message:'Ürün kayıt edilemedi'})
    })  
}









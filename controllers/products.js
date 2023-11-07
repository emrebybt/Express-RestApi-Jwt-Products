const express = require('express');
const Product = require('../models/product');


exports.getProduct = (req, res, next) => {
    Product.findById({_id: req.params._id})    //postmanda id yakalamıyor chromeda çalışıyor
    .then(product => {
        res.json(product)
    })
    .catch(err => {
        res.json({message: 'Ürün bulunamadı'})
    })
    // res.json({message: 'Api çalıştı'})
}

exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndDelete({_id: req.params._id})
    .then(() => {
        res.json('Ürün silindi')
    })
    .catch(err => {
        res.json('Ürün silinemedi')
    })
}


exports.getProducts = (req, res, next) => {
    Product.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.json({message: 'Ürün bulunamadı'})
    })
    // res.json({message: 'Api çalıştı'})
}

exports.postProducts = (req, res, next) => {
    const {name, price, stock, imageUrl, category} = req.body;

    const product = new Product({
        name: name,
        price: price,
        stock: stock,
        imageUrl: imageUrl,
        category: category
    })

    product.save()
    .then((product) => {
        res.json(product)
    })
    .catch(err => {
        res.json({message: 'Kayıt başarısız'})
    })
}

exports.putProduct = (req, res, next) => {
    Product.findByIdAndUpdate(req.body.id, req.body, {new: true})
    .then(product => {
        product.save();
        res.json(product)
    })
    .catch(err => {
        res.json('Ürün güncellenemedi')
    }) 
}
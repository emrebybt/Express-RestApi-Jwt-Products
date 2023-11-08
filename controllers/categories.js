const express = require('express')

const Category = require('../models/category')


exports.getCategories=(req,res,next)=>{
    Category.find()
    .then(categories=>{
        res.json(categories)
    })
    .catch(err => {
        res.json({message:'Kategori bulunamadı!'})
    })  
}
exports.postCategory=(req,res,next)=>{
    const {name,description}=req.body
    const category = new Category({
        name:name,
        description:description
    })
    category.save()
    .then((category)=>{
        res.json(category)
    })
    .catch(err=>{
        res.json({message:'Kategori kayıt edilemedi'})
    })  
}
exports.putCategoryById = (req, res, next) => {
    Category.findByIdAndUpdate(req.body.id, req.body, {
        new: true //Güncellenen yeni datayı döndürür
    })
    .then( category => {
        res.json(category)
    })
    .catch(err=>{
        res.json({message:'Ürün güncellenemedi'})
    }) 
}

exports.deleteCategoryById = (req, res, next) =>{
    Category.findByIdAndDelete(req.params.id)
    .then(category=>{
        res.json(category)
    })
    .catch(err => {
        res.json({message:'Ürün silinemedi!'})
    })
}
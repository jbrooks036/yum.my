'use strict';

var Category   = require('../models/category');

function Category(o, userId){
  this.name   = o.name;
  this.userId = userId;
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(o, cb){
  Category.collection.save(o, cb);
};

Category.findAllByUser = function(userId, cb){
  Category.collection.find({userId:userId}).toArray(cb);
};

module.exports = Category;


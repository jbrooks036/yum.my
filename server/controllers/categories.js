'use strict';

var Category = require('../models/category');

exports.create = function(req, res){
  Category.create(req.body, function(err, category){
    res.send({category:category});
  });
};

exports.index = function(req, res){
  Category.findAllByUser(function(err, categories){
    res.send({categories:categories});
  });
};

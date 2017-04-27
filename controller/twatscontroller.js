const model = require('../model/twats');
// console.log(model);
// require('dotenv').config();

let controller = {}

controller.search = function(req, res, next) {
  model.search((data)=>{
    res.send(data)
  })
}

controller.trends = function(req, res, next) {
  model.trends((data)=>{
    res.send(data)
  })
}

module.exports = controller;
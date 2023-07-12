"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var CarsSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  picture: {
    type: Buffer,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Buffer,
    required: true
  }
});
var Cars = _mongoose.models.Cars || (0, _mongoose.model)('Cars', carsSchema);
var _default = Cars;
exports["default"] = _default;
"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CarsSchema = new mongoose_1.Schema({
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
var Cars = mongoose_1.models.Cars || mongoose_1.model('Cars', CarsSchema);
exports["default"] = Cars;

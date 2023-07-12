"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var carTimelineSchema = new mongoose_1.Schema({
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
var userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    lastName: String,
    carsTimeline: [carTimelineSchema],
    createdAt: {
        type: Date,
        "default": function () { return Date.now(); },
        immutable: true
    }
});
var User = mongoose_1.models.User || mongoose_1.model("User", userSchema);
exports["default"] = User;

var mongoose = require("mongoose");

var keySchema = new mongoose.Schema({
    ip:String,
    key:String
})

module.exports = mongoose.model("key", keySchema)
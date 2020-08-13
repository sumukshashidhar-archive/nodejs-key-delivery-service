var mongoose = require("mongoose");

var keySchema = new mongoose.Schema({
    ip:String,
    key:String, 
    dateAndTime: {type: Date, default:Date.now}
})

module.exports = mongoose.model("key", keySchema)
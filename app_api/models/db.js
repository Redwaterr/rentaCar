const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/rentaCarDB");

var connection = mongoose.connection;

connection.once("open",() => {
    console.log("Veri tabanına bağlantı başarıyla sağlandı");
});

module.exports = mongoose;
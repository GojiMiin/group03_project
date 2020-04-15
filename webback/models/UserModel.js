var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    role: String,
    memberID: String,
    BookID:{
        type: String,
        ref: "Book"
    }
});

module.exports = mongoose.model('user', userSchema, 'Users')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

const loginSchema = new Schema ({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const Login = mongoose.model("login", loginSchema);

module.exports = Login;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

const registerSchema = new Schema ( {
    email: {
        type: String,
        require: true
    },
    fName: {
        type:String,
        require: true
    },
    lName : {
        type: String,
        require: true
    },
    password: {
        type:String,
        require: true
    },
    cPass: {
        type: String,
        require: true
    },
    creationDT: {
        type: Date,
        require: true
    }
});

/* schema.statics hashPassword = hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

schema.method.isValid = (hashedPassword) => {
    return bcrypt.compareSync(hashedPasswors, this.password);
}
*/
const RegisterUsers = mongoose.model("register", registerSchema);

module.exports = RegisterUsers;
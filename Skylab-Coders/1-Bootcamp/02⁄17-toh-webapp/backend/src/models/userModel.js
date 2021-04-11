const { Schema, model } = require('mongoose');

const userShchema = new Schema (){
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    city: { type: String },
    creationDate: { type: Date, default: Date.now },
    birthDate: { type: Date }
}

module.exports = model('User', userSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    name: String,
    course: String,
    year: String
});

module.exports = mongoose.model('Info', InfoSchema); 
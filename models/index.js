const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
db.members = require("./members.model.js");
db.vaccinations =require("./vaccinations.model");
db.vaccinationTomembers =require("./vaccinationsTomember.model");
db.coronaVirusDates=require("./coronaVirusDates.model.js")

module.exports = db;
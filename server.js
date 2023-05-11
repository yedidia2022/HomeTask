const routerVaccinations = require('./routers/vaccinations_router')
const routerCoronaVirusDates = require('./routers/coronaVirusDates_router')
const routerMembers = require('./routers/members_router')
const routerVaccinationsToMember = require('./routers/vaccinationsToMember_rout')
const routerMemberDetails=require('./routers/memberDetailes_router')
const fs = require('fs');
const express=require('express');
const bodyParser =require('body-parser');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const app = express();
const db=require('./models');
app.use(express.json());
app.use(express.static("public"))
app.use("/",(req, res, next) => {

    let text = new Date().toGMTString() + "  : " + req.url + '\n';
    fs.appendFile("log.txt", text, () => {
        next();
    })
 })



app.use("/memberDetailes",routerMemberDetails)
app.use("/coronaVirusDates", routerCoronaVirusDates);
app.use("/members", routerMembers);
app.use("/vaccinations", routerVaccinations);
app.use("/vaccinationsToMember", routerVaccinationsToMember);
dotenv.config();
app.listen(process.env.PORT,()=>{

    console.log("server is up port "+ process.env.PORT);
});
db.mongoose.connect("mongodb://localhost:27017/HMoDB")
    .then(() => {
   console.log("Connected to the database!");
    })
    .catch(err => {
 console.log("Cannot connect to the database!", err);
   process.exit();
    });
    
    






    
 


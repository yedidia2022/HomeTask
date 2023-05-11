const express=require('express');
const db = require('../models/index');
const bodyParser=require('body-parser');
const coronaVirusDates=db.coronaVirusDates;
const members=db.members;
const vaccinations=db.vaccinations;
const vaccinationsTomember=db.vaccinationsTomember;
const  funcMembersDetailes=require('../functions/memberDetailes')
 

async function getAllMembersDetailes(req,res){
 let data=await funcMembersDetailes.GetAllAllDetailes();
 res.send(data);
       
}
async function getmembersDetailes(req,res){
    let name=req.params.name || req.query.name;
    let data=await funcMembersDetailes.GetAllDetailesByName(name);
    res.send(data);
          
   }


module.exports={getAllMembersDetailes,getmembersDetailes}
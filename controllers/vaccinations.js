const express=require('express');
const db = require('../models/index');
const bodyParser=require('body-parser');
const vaccinations_=require('../models/vaccinations.model');
const vaccinations=db.vaccinations;
const {IsExistvaccination}=require('../functions/vaccinations');


async function getAllvaccinations(req,res){
     let data=await vaccinations.find({});
     res.send(data);
}

async function getByVaccId(req,res){
let vaccinationId = req.params.vaccinationCode || req.query.vaccinationCode;
console.log(vaccinationId,"getByCaccode");
let data=await IsExistvaccination(vaccinationId);
console.log(data);
if(data!=null)  {
  console.log(data,"back from is exist");
  try{
  res.send(data);
  }
  catch(err){
    res.status(500).send(err)
  }
 }
else
  res.send("this vacc is not exist")
}

async function addVaccination(req,res){
let newVaccination=req.body;
console.log(req.body);
let newAnswer=await IsExistvaccination(newVaccination.vaccinationCode);
if(newAnswer==null)
  try{
  let result=await vaccinations.create(newVaccination);
  res.status(200).send(result);
  }
  catch(ex)
  {
  console.log(ex);
  res.status(500).send(ex);
  }
else
 res.send("this vaccination is already exist");
}

 


module.exports={getAllvaccinations,getByVaccId,addVaccination};

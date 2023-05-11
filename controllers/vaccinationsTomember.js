const express=require('express');
const db = require('../models/index');
const bodyParser=require('body-parser');
const vaccinationsTomember_=require('../models/vaccinationsTomember.model');
const { IsExistMember } = require('../functions/members');
const{IsExistvaccination}=require('../functions/vaccinations')
const vaccinationTomembers=db.vaccinationTomembers;
//const members=db.members;
//const vaccinations=db.vaccinations;

async function getAllvaccinationsTomember(req,res){
     let data=await vaccinationTomembers.find({});
     res.send(data)
}

async function getByTZmember(req,res){

let TZmember = req.params.TZmember || req.query.TZmember;
let data=await IsExistMember(TZmember)

  if(data!=null){
     console.log(data);
    try{ 
    let newData=await vaccinationTomembers.find({"memberId":data._id});
    console.log(data)
    if (newData.length!=0)
    res.send(newData[0])
    }
    catch(ex){
    console.log(ex);
    res.status(500).send(ex);
    }
    }
  else{
    res.send("there is no this menber in our HMO")
  }
  
}
async function addVaccinationsToMember(req,res){
let obj=req.body;
let TZmember= obj.TZMember;
let codeVacc= obj.vaccinationCode
let newDataForvaccinations=await IsExistvaccination(codeVacc);
if (newDataForvaccinations!=null)
 {
  console.log(newDataForvaccinations._id);
  let newDataFormembers = await IsExistMember(TZmember)
  if(newDataFormembers!=null)
     {   
      console.log(newDataFormembers._id) 
      let searchResult=await vaccinationTomembers.find({"memberId":newDataFormembers._id})
      if(searchResult.length==0)
      {
       console.log("from no result")
       obj={"memberId":newDataFormembers._id,vaccinationsArr:[{"codeVacc":newDataForvaccinations._id,"dateGeted":obj.dateGeted}]};
       console.log(obj);   
       try {
         let createNew=vaccinationTomembers.create(obj);
         res.status(200).send(createNew);
          }
       catch (ex) {
            res.status(500).send(ex);
          }
      }
        else {
        console.log(searchResult[0].vaccinationsArr);
        console.log(searchResult[0].vaccinationsArr.length);
        if (searchResult[0].vaccinationsArr.length<4) 
        { 
          let helpArray=[];
          helpArray=[...searchResult[0].vaccinationsArr];
          helpArray.push({"codeVacc":newDataForvaccinations._id,"dateGeted":obj.dateGeted})
        try{
          let result = await vaccinationTomembers.updateOne({"memberId":newDataFormembers._id},{$set:{"vaccinationsArr":helpArray}});
          console.log(searchResult[0].vaccinationsArr.length);
          res.status(200).send(result);
          console.log("insert memberVaccineToExistRow");
         }
         catch(ex)
         {
          console.log(ex);
          res.status(500).send(ex);
        }
        }
        else
        {
          res.status(400).send("this member already get 4 vaccinations")
        }    
      }
       
     }
        else
         res.status(500).send("there is not this member");
  }
    else
     res.send("this vaccination is not exist");
}

 


module.exports={getAllvaccinationsTomember,getByTZmember,addVaccinationsToMember};

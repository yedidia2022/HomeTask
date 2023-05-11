const express=require('express');
const bodyParser=require('body-parser');
const db = require('../models/index');
const coronaVirusDates_=require('../models/coronaVirusDates.model');
const coronaVirusDates=db.coronaVirusDates;
const members=db.members;
const { IsExistMember } = require('../functions/members');


async function getAllCoronaVirusDates(req,res){
     let data=await coronaVirusDates.find({});
     res.send(data)
}
//אני רוצה לקבל את טבלת התאריכי מחלה למישהו מסווים
async function getByMemberId(req,res){
let TZMember = req.params.TZMember || req.query.TZMember;
console.log(TZMember,"coronaDates query tz")
let newData;
try{
    let data=await IsExistMember(TZMember);
    console.log(data)
    if(data!=null) {
        console.log(data._id,)
        newData =await coronaVirusDates.find({"memberId":data._id})
        if (newData.length!=0){
          res.send(newData[0]);
           console.log("from if he had dates")
         }
         else
         res.send("this member doesn't have illness dates")
    }

    else
      res.send("אין מבוטח עם כזה קוד");
}  
catch(err){
    res.status(500).send(err)
}
}

async function addRowForMember(req,res){
let user=req.body;
let TZMember=user.TZMember
let getPositiveResult=user.getPositiveResult;
let recoveryFromIllness=user.recoveryFromIllness
console.log(req.body);
let answer= await IsExistMember(TZMember);
if(answer==null){
res.send(" no this member");
}
else 
{
newAnswer=await coronaVirusDates.find({"memberId":answer._id})
if(newAnswer.length==0){
  try{

   let newResult=await coronaVirusDates.create({"memberId":answer._id,"getPositiveResult":getPositiveResult,"recoveryFromIllness":recoveryFromIllness})
   res.status(200).send(newResult);
   } 
  catch(ex)
  {
  console.log(ex);
    res.status(500).send(ex);
   }
  }
  else
  res.send("this member with dates is already has row ");
  }
}

module.exports={getAllCoronaVirusDates,getByMemberId,addRowForMember};

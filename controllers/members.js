const express=require('express');
const bodyParser=require('body-parser');
const db = require('../models/index');
const {IsExistMember}=require('../functions/members');
const members_=require('../models/members.model');
const members=db.members;

async function getAllMembers(req,res){
     let data=await members.find({});
     res.send(data)
}

async function getByMemberId(req,res){

let TZmember = req.params.TZmember || req.query.TZmember;
console.log(TZmember)
let data=await members.find({"TZmember":TZmember});
if(data.length==0){
  res.send("there is not member with this TZ on our HMO");
 }
else{
  console.log("there is this member")
  try{
    res.status(420).send(data)
   
   }  
  catch(err){
    res.status(500).send(err)
}}

}


async function addMember(req,res){
let newMember=req.body;
console.log(req.body);
let answer=await IsExistMember(newMember.TZmember)
if(answer==null)
try{
let result=await members.create(newMember);
res.status(200).send(result);
}
catch(ex)
{
  console.log(ex);
  res.status(500).send(ex);
}
else
 res.send("this member is already exist");
}

 


module.exports={getAllMembers,getByMemberId,addMember};

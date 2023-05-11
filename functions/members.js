const mongoose=require('mongoose');
const members=require('../models/members.model');

async function IsExistMember(TZmember){
let data=await members.find({"TZmember":TZmember})
if(data==null)
   return null;
   else
   return data[0];
}

module.exports={IsExistMember};

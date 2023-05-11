const mongoose=require('mongoose');
const vaccinations=require('../models/vaccinations.model');

async function IsExistvaccination(vaccination){
let data=await vaccinations.find({"vaccinationCode":vaccination})
if(data.length==0){
  console.log(data.length);
  return null;
}
else
  return data[0];
}

module.exports={IsExistvaccination};

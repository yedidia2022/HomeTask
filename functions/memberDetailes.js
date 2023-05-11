const mongoose=require('mongoose');
const db = require('../models/index');
const coronaVirusDates=db.coronaVirusDates;
const vaccinationTomembers=db.vaccinationTomembers;
const members=db.members;
const vaccinations=db.vaccinations;

 async function GetAllDetailesByName(name){
    let aggerga=[{
'$match':{
  'fullName.firstName':name,
}
    }
      ,  {
          '$project': {
            'TZmember': 1, 
            'fullName': 1, 
            'memberId': 1
          }
        }, {
          '$lookup': {
            'from': 'vaccinationstomembers', 
            'localField': 'memberId', 
            'foreignField': 'memberId', 
            'as': 'myvaccination'
          }
        }
      ];
     return await members.aggregate(aggerga);
 }
 async function GetAllAllDetailes(){
    let aggre=[
      [
        {
          '$lookup': {
            'from': 'coronavirusdates', 
            'localField': '_id', 
            'foreignField': 'memberId', 
            'as': 'my_illness_dates'
          }
        }, {
          '$project': {
            'contactWay._id': 0, 
            'fullName._id': 0, 
            'address._id': 0, 
            'address.__v': 0, 
            'my_illness_dates.__v': 0, 
            'my_illness_dates._id': 0
          }
        }, {
          '$lookup': {
            'from': 'vaccinationtomembers', 
            'localField': '_id', 
            'foreignField': 'memberId', 
            'as': 'my_vaccinations'
          }
        }, {
          '$project': {
            '_id': 0, 
            'memberId': 0, 
            'my_vaccinations.vaccinationsArr._id':0,
            'my_vaccinations._id': 0, 
            'my_vaccinations.__v': 0
          }
        }, {
          '$unwind': {
            'path': '$my_vaccinations', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'vaccinations', 
            'localField': 'my_vaccinations.vaccinationsArr.codeVacc', 
            'foreignField': '_id', 
            'as': 'vaccinationsDetailes'
          }
        }, {
          '$project': {
            'vaccinationsDetailes._id': 0, 
            'vaccinationsDetailes.__v': 0
          }
        }
      ]
    ]
      ;
      return await members.aggregate(aggre);

 }
 module.exports={GetAllDetailesByName,GetAllAllDetailes}
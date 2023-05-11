const mongoose=require('mongoose');
const vaccinations = require('./vaccinations.model');
const members = require('./members.model');

const Schema=mongoose.Schema;
     
const VaccinationToMemberSchema = new Schema({
    memberId  :
    { type: Schema.Types.ObjectId, required: true, ref:members
    },
    vaccinationsArr: [
    {    
        codeVacc:{
          type: Schema.Types.ObjectId, required: true, 
          ref:vaccinations
        },
          dateGeted:{
            type:Date,validate: [dateValidator, ' Date gate must be less than today']
        }
    },
    ]
    
});
function dateValidator(value) {
    // `this` is the mongoose document
    let date_ob = new Date();
    return date_ob >= value;
}


 const vaccinationTomembers=mongoose.model('vaccinationTomembers',VaccinationToMemberSchema);
 
 vaccinationTomembers.createCollection().then(function(collection){
    console.log("the VaccinationToMember collection create")}
 );
 vaccinationTomembers.createIndexes();
 module.exports=vaccinationTomembers;

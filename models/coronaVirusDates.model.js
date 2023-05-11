const mongoose=require('mongoose');
const members = require('./members.model');

const Schema=mongoose.Schema;
     
const coronaVirusDatesSchema = new Schema({
    memberId  : {type: Schema.Types.ObjectId, required: true, ref:members},
    getPositiveResult:{
    type:Date,
    validate: [dateValidator, 'Born Date must be less than today'],
    },
    recoveryFromIllness:{
    type:Date,
        
    }
         
});
function dateValidator(value) {
    let date_ob = Date.now();
    return date_ob >= value;
}

 const coronaVirusDates=mongoose.model('coronaVirusDates',coronaVirusDatesSchema);
 members.createCollection().then(function(collection){
    console.log("the coronaVirusDates collection create")}
 );
 coronaVirusDates.schema.path('recoveryFromIllness').validate(function(value){
    return value.getDate()-this.getPositiveResult.getDate()>=1; },'recoveryFromIllness Date must be greater than getPositiveResult Date')
 
    coronaVirusDates.createIndexes();
 module.exports=coronaVirusDates;

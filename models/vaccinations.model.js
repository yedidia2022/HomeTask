const mongoose=require('mongoose');

const Schema=mongoose.Schema;

ObjectId = Schema.ObjectId;
const vaccinationSchema = new Schema({
    vaccinationId  : ObjectId,
    vaccinationCode:{type:Number,unique:true},
    producerCode:{
           type:Number,
                 },
    VaccinationName:{
        type:String,
                    },
    
    
});


 const vaccinations=mongoose.model('vaccinations',vaccinationSchema);
 
 vaccinations.createCollection().then(function(collection){
    console.log("the vaccinations collection create")}
 );

 vaccinations.createIndexes();
 module.exports=vaccinations;

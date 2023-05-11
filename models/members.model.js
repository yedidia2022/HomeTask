const mongoose=require('mongoose');

const Schema=mongoose.Schema;

ObjectId = Schema.ObjectId;
const memberSchema = new Schema({
    memberId  : ObjectId,
    fullName:[{
        firstName:{
           type:String,
           lowercase: true
        }
        ,lastName:{
            type:String,
            lowercase: true
        } 
    }],
    TZmember: {
        type:String,
        require:true,
        unique:true,
        length:9,
        minlength: 9,
        maxlength: 9
    },
    address:[{
    city:{
        type:String,
    },
    street:{
        type:String,
    },
    numHouse:{
        type:Number,
    }
    }],
    contactWay:[ {
    telephone:{
    type:String,
    minLength: [9, "no should have minimum 9 digits"],
    maxLength: [9, "no should have maximum 9 digits"],
    match: [/\d{9}/, "no should only have digits"]
    },
    mobilePhone:{
    type:String,
    minLength: [10, "no should have minimum 10 digits"],
    maxLength: [10, "no should have maximum 10 digits"],
    match: [/\d{10}/, "no should only have digits"]
    },
    }] ,
    bornDate:{

        type:Date,
        validate: [dateValidator, 'Born Date must be less than today'],
       
    },
   

    
});
function dateValidator(value) {
    let date_ob = Date.now();
    return date_ob >= value;
 }


const members=mongoose.model('members',memberSchema);

members.createCollection().then(function(collection){
    console.log("the member collection create")}
 );
members.createIndexes();

 module.exports=members;

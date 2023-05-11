const express=require('express');
const router=express.Router();
const controlerVaccinationsToMember=require('../controllers/vaccinationsTomember')
router.get("/",controlerVaccinationsToMember.getAllvaccinationsTomember);
router.get("/:TZmember",controlerVaccinationsToMember.getByTZmember);
router.post("/",controlerVaccinationsToMember.addVaccinationsToMember);


module.exports=router;
const express=require('express');
const router=express.Router();
const contolerVaccinations=require('../controllers/vaccinations')
router.get("/",contolerVaccinations.getAllvaccinations);
router.get("/:vaccinationCode",contolerVaccinations.getByVaccId);
router.post("/",contolerVaccinations.addVaccination);


module.exports=router;
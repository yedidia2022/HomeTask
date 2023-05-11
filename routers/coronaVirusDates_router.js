const express=require('express');
const router=express.Router();
const contolerCoronaVirusDates=require('../controllers/coronaVirusDates')
router.get("/",contolerCoronaVirusDates.getAllCoronaVirusDates);
router.get("/:TZMember",contolerCoronaVirusDates.getByMemberId);
router.post("/",contolerCoronaVirusDates.addRowForMember);

module.exports=router;
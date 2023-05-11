const express=require('express');
const router=express.Router();
const contolerMemberDetailes=require('../controllers/memberDetailes')
router.get("/:name",contolerMemberDetailes.getmembersDetailes);
router.get("/",contolerMemberDetailes.getAllMembersDetailes);


module.exports=router;
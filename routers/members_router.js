const express=require('express');
const router=express.Router();
const contolerMembers=require('../controllers/members')
router.get("/",contolerMembers.getAllMembers);
router.get("/:TZmember",contolerMembers.getByMemberId);
router.post("/",contolerMembers.addMember);


module.exports=router;
const express=require('express');
const UserCtrl = require('../controlleurs/User');
const router=express.Router();


router.post('/signup',UserCtrl.signup);
router.post('/login',UserCtrl.login);

module.exports=router;
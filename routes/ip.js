const express = require("express");
const router = express.Router();

router.get("/:ip", async (req,res)=>{

try{
let r = await fetch("https://ipapi.co/"+req.params.ip+"/json/");
let d = await r.json();
res.json(d);
}catch(e){
res.json({error:"IP FAIL"});
}

});

module.exports = router;

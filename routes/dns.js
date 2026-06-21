const express = require("express");
const router = express.Router();

router.get("/:domain", async (req,res)=>{

try{
let r = await fetch("https://dns.google/resolve?name="+req.params.domain+"&type=A");
let d = await r.json();
res.json(d);
}catch(e){
res.json({error:"DNS FAIL"});
}

});

module.exports = router;

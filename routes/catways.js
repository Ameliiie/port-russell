const Catway = require("../models/Catway");
const express = require("express")
const router = express.Router();

router.get ("/", async (req, res)=>{
    
    const catways = await Catway.find();
    res.json("catways");

})

module.exports = router; 
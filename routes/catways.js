const Catway = require("../models/Catway");
const express = require("express")
const router = express.Router();

router.get ("/", async (req, res)=>{
    
    const catways = await Catway.find();
    res.json(catways);

})
router.get("/:id", async (req, res) => {

    const catway = await Catway.findById(req.params.id);

    res.json(catway);

});

router.post ("/", async (req, res) => {
    const catway = new Catway (req.body);
    await catway.save() ;
    res.json(catway);
} );

router.put("/:id", async (req, res) => {

    const catway = await Catway.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(catway);

});

router.delete("/:id",async (req,res) => {
    const catway =await Catway.findByIdAndDelete (
        req.params.id
    );
    res.json(catway);
});

router.get("/view/list", async (req, res) => {

    const catways = await Catway.find();

    res.render("catways/index", {
        catways
    });

});

module.exports = router; 
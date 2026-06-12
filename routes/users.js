const User = require("../models/User");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {

    const users = await User.find();

    res.json(users);

});

router.get("/:email", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    res.json(user);

});
router.post("/", async (req, res) => {

    const user = new User(req.body);

    await user.save();

    res.json(user);

});

router.put("/:email", async (req, res) => {

    const user = await User.findOneAndUpdate(
        { email: req.params.email },
        req.body,
        { new: true }
    );

    res.json(user);

});

router.delete("/:email", async (req, res) => {

    const user = await User.findOneAndDelete({
        email: req.params.email
    });

    res.json(user);

});

module.exports = router;
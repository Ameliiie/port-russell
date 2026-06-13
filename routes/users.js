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

router.get("/view/details/:email", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    res.render("users/details", {
        user
    });

});

router.get("/view/list", async (req, res) => {

    const users = await User.find();

    res.render("users/index", {
        users
    });

});

router.get("/view/create", (req, res) => {

    res.render("users/create");

});

router.post("/view/create", async (req, res) => {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await user.save();

    res.redirect("/users/view/list");

});

router.get("/view/edit/:email", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    res.render("users/edit", {
        user
    });

});

router.post("/view/edit/:email", async (req, res) => {

    await User.findOneAndUpdate(
        {
            email: req.params.email
        },
        {
            username: req.body.username
        }
    );

    res.redirect("/users/view/list");

});

router.post("/view/delete/:email", async (req, res) => {

    await User.findOneAndDelete({
        email: req.params.email
    });

    res.redirect("/users/view/list");

});


module.exports = router;
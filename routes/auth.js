const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.json({
            message: "Utilisateur introuvable"
        });
    }

    if (user.password !== req.body.password) {
        return res.json({
            message: "Mot de passe incorrect"
        });
    }

    res.json({
        message: "Connexion réussie"
    });

});

module.exports = router;
const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

    const token = jwt.sign(
        {
            email: user.email
        },
        "monSecretJWT"
    );

    res.json({
        message: "Connexion réussie",
        token
    });
});
router.get("/logout", (req, res) => {

    res.json({
        message: "Déconnexion réussie"
    });

});

module.exports = router;
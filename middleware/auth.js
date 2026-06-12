const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Token manquant"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            "monSecretJWT"
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Token invalide"
        });

    }

};
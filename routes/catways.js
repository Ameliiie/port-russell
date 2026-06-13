const Catway = require("../models/Catway");
const Reservation = require("../models/Reservation");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    const catways = await Catway.find();

    res.json(catways);

});

router.get("/:id/reservations", async (req, res) => {

    const reservations = await Reservation.find({
        catwayNumber: req.params.id
    });

    res.json(reservations);

});

router.get("/:id/reservations/:idReservation", async (req, res) => {

    const reservation = await Reservation.findById(
        req.params.idReservation
    );

    res.json(reservation);

});

router.post("/:id/reservations", async (req, res) => {

    const reservation = new Reservation({
        ...req.body,
        catwayNumber: req.params.id
    });

    await reservation.save();

    res.json(reservation);

});

router.put("/:id/reservations/:idReservation", async (req, res) => {

    const reservation = await Reservation.findByIdAndUpdate(
        req.params.idReservation,
        req.body,
        { new: true }
    );

    res.json(reservation);

});

router.delete("/:id/reservations/:idReservation", async (req, res) => {

    const reservation = await Reservation.findByIdAndDelete(
        req.params.idReservation
    );

    res.json(reservation);

});

router.get("/:id", async (req, res) => {

    const catway = await Catway.findById(req.params.id);

    res.json(catway);

});

router.post("/", async (req, res) => {

    const catway = new Catway(req.body);

    await catway.save();

    res.json(catway);

});

router.put("/:id", async (req, res) => {

    const catway = await Catway.findByIdAndUpdate(
        req.params.id,
        {
            catwayState: req.body.catwayState
        },
        { new: true }
    );

    res.json(catway);

});

router.delete("/:id", async (req, res) => {

    const catway = await Catway.findByIdAndDelete(
        req.params.id
    );

    res.json(catway);

});

router.get("/view/details/:id", async (req, res) => {

    const catway = await Catway.findById(
        req.params.id
    );

    res.render("catways/details", {
        catway
    });

});

router.get("/view/list", async (req, res) => {

    const catways = await Catway.find();

    res.render("catways/index", {
        catways
    });

});

router.get("/view/create", (req, res) => {

    res.render("catways/create");

});

router.post("/view/create", async (req, res) => {

    const catway = new Catway({
        catwayNumber: req.body.catwayNumber,
        catwayType: req.body.catwayType,
        catwayState: req.body.catwayState
    });

    await catway.save();

    res.redirect("/catways/view/list");

});

router.get("/view/edit/:id", async (req, res) => {

    const catway = await Catway.findById(
        req.params.id
    );

    res.render("catways/edit", {
        catway
    });

});

router.post("/view/edit/:id", async (req, res) => {

    await Catway.findByIdAndUpdate(
        req.params.id,
        {
            catwayState: req.body.catwayState
        }
    );

    res.redirect("/catways/view/list");

});

router.post("/view/delete/:id", async (req, res) => {

    await Catway.findByIdAndDelete(
        req.params.id
    );

    res.redirect("/catways/view/list");

});

module.exports = router;
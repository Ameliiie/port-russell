const Reservation = require("../models/Reservation");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    const reservations = await Reservation.find();

    res.json(reservations);

});

router.get("/:id", async (req, res) => {

    const reservation = await Reservation.findById(
        req.params.id
    );

    res.json(reservation);

});

router.post("/", async (req, res) => {

    const reservation = new Reservation(req.body);

    await reservation.save();

    res.json(reservation);

});

router.put("/:id", async (req, res) => {

    const reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(reservation);

});

router.delete("/:id", async (req, res) => {
    const reservation = await Reservation.findByIdAndDelete(
        req.params.id
    );
    res.json(reservation);
});

router.get("/view/details/:id", async (req, res) => {

    const reservation = await Reservation.findById(
        req.params.id
    );

    res.render("reservations/details", {
        reservation
    });

});

router.get("/view/list", async (req, res) => {

    const reservations = await Reservation.find();

    res.render("reservations/index", {
        reservations
    });

});

router.get("/view/create", (req, res) => {

    res.render("reservations/create");

});

router.post("/view/create", async (req, res) => {

    const reservation = new Reservation({
        catwayNumber: req.body.catwayNumber,
        clientName: req.body.clientName,
        boatName: req.body.boatName,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    await reservation.save();

    res.redirect("/reservations/view/list");

});

router.get("/view/edit/:id", async (req, res) => {

    const reservation = await Reservation.findById(
        req.params.id
    );

    res.render("reservations/edit", {
        reservation
    });

});

router.post("/view/edit/:id", async (req, res) => {

    await Reservation.findByIdAndUpdate(
        req.params.id,
        {
            clientName: req.body.clientName,
            boatName: req.body.boatName
        }
    );

    res.redirect("/reservations/view/list");

});

router.post("/view/delete/:id", async (req, res) => {

    await Reservation.findByIdAndDelete(
        req.params.id
    );

    res.redirect("/reservations/view/list");

});

module.exports = router;
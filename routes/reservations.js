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

router.delete("/:id",async (req,res) => {
    const reservation =await Reservation.findByIdAndDelete (
        req.params.id
    );
    res.json(reservation);
});

router.get("/view/list", async (req, res) => {

    const reservations = await Reservation.find();

    res.render("reservations/index", {
        reservations
    });

});


module.exports = router;
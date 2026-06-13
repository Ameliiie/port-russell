const express = require("express");
const connectDB = require("./config/database");
const catwayRoutes = require("./routes/catways");
const reservationRoutes = require("./routes/reservations");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Reservation = require("./models/Reservation");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/catways", catwayRoutes);
app.use("/reservations", reservationRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/dashboard", async (req, res) => {

    const reservations = await Reservation.find();

    res.render("dashboard", {
        reservations
    });

});

app.post("/login", (req, res) => {

    res.redirect("/dashboard");

});

app.get("/logout", (req, res) => {

    res.redirect("/");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur running on port ${PORT}`);
});
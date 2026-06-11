const express = require("express");
const connectDB = require("./config/database");
const catwayRoutes = require("./routes/catways");
const reservationRoutes =require ("./routes/reservations")


const app = express();

connectDB(); 

app.use (express.json());

app.use("/catways", catwayRoutes);

app.use("/reservations", reservationRoutes);

app.get("/", (req, res) => {
    res.send("Port Russell API")
});

app.listen(3000, () => {
    console.log("Serveur running on port 3000")
})


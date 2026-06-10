const express = require("express");
const connectDB = require("./config/database");
const catwayRoutes = require("./routes/catways");


const app = express();

connectDB(); 

app.use("/catways", catwayRoutes);

app.get("/", (req, res) => {
    res.send("Port Russell API")
});

app.listen(3000, () => {
    console.log("Serveur running on port 3000")
})


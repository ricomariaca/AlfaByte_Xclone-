const express = require("express");
const app = express();
const port = 2001;

const router = require("./routes/apiRoutes");

//app.get("/", (req, res) => {
//    res.send("Hola, esta es una petición izy!");
//});

app.use('/api', router);

app.listen(port, () => {
    console.log(`La app esta escuchando en http://localhost:${port}`);
});
//77
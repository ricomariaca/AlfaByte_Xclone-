const express = require("express");
const app = express();
const port = 2001;

//const router = require("./routes/apiRoutes");
const routerPost = require("./Tweet/Router/apiRouter");
const routerAuth = require("./Auth/Router/apiRouter");
const routerFollow = require("./Follow/Router/apiRouter");


// Middleware para manejar solicitudes con JSON
app.use(express.json());

// Middleware para manejar solicitudes con datos de formulario (urlencoded)
app.use(express.urlencoded({ extended: true }));

//app.get("/", (req, res) => {
//    res.send("Hola, esta es una petición izy!");
//});

app.use('/api', routerPost);
app.use('/api', routerAuth);
app.use('/api', routerFollow);

app.listen(port, () => {
    console.log(`La app esta escuchando en http://localhost:${port}`);
});
//77
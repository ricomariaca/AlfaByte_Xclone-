require('dotenv').config();
const express = require("express");
const { dbConnection } = require('./Databases/config');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./Config/Swagger.js');
 
const cors = require('cors');
const { APP_PORT } = process.env;
const { Server, Socket } = require("socket.io");
 
const app = express();
const http = require("http");
const webServer = http.createServer(app);
 

const io = new Server(webServer, {
    connectionStateRecovery: {},
    cors: {
      origin: "http://localhost:5175",
    },
  });


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Base de datos
dbConnection();
 
// Rutas
const routerPost = require("./Tweet/Router/apiRouter");
const routerAuth = require("./Auth/Router/apiRouter");
const routerFollow = require("./Follow/Router/apiRouter");
 
app.use('/api', routerPost);
app.use('/api', routerAuth);
app.use('/api', routerFollow);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
 
// Manejo de eventos de socket.io
io.on('connection', (socket= Socket) => {
  console.log('A user connected');


  socket.on("disconnect", () => {
    console.info("User disconnected");
  });

  socket.on("chat message", (payload) => {
    console.log(`message:  ${JSON.stringify(payload)}`);
    io.emit("chat message", payload);
  });
});

// Iniciar el servidor en el puerto especificado
webServer.listen(APP_PORT || 4000, () => {
    console.log("My server running at port: " + (APP_PORT || 4000));
  });
   


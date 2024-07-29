const app= require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});
const mongoose = require("mongoose");
const { dbUri, optionalConfig } = require("./src/config");
const morgan = require("morgan");

const bodyParser = require("body-parser");
const cors = require('cors')
const port = process.env.PORT || 3001;
mongoose.connect(dbUri, optionalConfig)
.then(() => console.log("connected to db"))
const userRoutes = require('./src/routes/UserRoutes.js');
// middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// login router
// for development. appears on console
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);

// server listen to port 3000 as default
server.listen(port, () => {
    console.log(`server listening to port ${port}. Server Link: http://localhost:${port}`);
})
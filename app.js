const app= require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});
const crypto = require('crypto')
const mongoose = require("mongoose");
const { dbUri, optionalConfig } = require("./src/config");
const morgan = require("morgan");

const bodyParser = require("body-parser");
const cors = require('cors')
const port = process.env.PORT || 3001;
mongoose.connect(dbUri, optionalConfig)
.then(() => console.log("connected to db"))
const authRoutes = require('./src/routes/AuthRoutes.js');
const userRoutes = require('./src/routes/UserRoutes.js');
const { default: helmet } = require("helmet");
const { corsHeader, limiter } = require("./src/middlewares/appMiddleware.js");
// middlewares
app.use(corsHeader);
// middleware for rate limit
app.use(limiter);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
// for development. appears on console
app.use(morgan("dev"));
// auth router
app.use('/auth', authRoutes);
// user router
app.use('/users', userRoutes);


// server listen to port 3000 as default
server.listen(port, () => {
    console.log(`server listening to port ${port}. Server Link: http://localhost:${port}`);
})

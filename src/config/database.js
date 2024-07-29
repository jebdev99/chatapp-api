const mongoose = require("mongoose");
const { dbUri } = require("../config");
const openConnection = async () => {
    mongoose.connect(dbUri)
    .then(() => console.log("connected to db"))
}

const closeConnection = async () => {
    mongoose.disconnect(dbUri)
    .then(() => console.log('disconnected to db'))
}
module.exports = {
    openConnection,
    closeConnection
}
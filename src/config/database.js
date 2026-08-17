const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect( "mongodb+srv://pammykumaribth05_db_user:FtkGqOfGFqiMw354@namastenode.kbcceqr.mongodb.net/devTinder");
};

module.exports = connectDB;



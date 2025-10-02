const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect(
        "mongodb+srv://Mork37:Database%40Password@learningmongodb.zsgjihs.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;




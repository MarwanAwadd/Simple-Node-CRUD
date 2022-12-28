const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set("strictQuery", false);

    try{
        await mongoose.connect(process.env.DATABASE_URI);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
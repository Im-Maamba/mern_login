const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongoose connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold)
    // Exit with failure
    process.exit(1)
  }
}
module.exports = connectDB

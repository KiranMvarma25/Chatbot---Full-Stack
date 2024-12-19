const mongoose = require('mongoose');

require('dotenv').config();

let port = process.env.port;

const connectDB = async () => {
  
  try{
    await mongoose.connect(port, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } 
  
  catch(err){
    console.error(err.message);
    process.exit(1);
  }

};

module.exports = connectDB;
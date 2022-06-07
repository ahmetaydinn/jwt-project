const mongoose = require("mongoose");


const { MONGO_URI } = process.env;

const URI = `mongodb+srv://${MONGO_URI}@cluster0.jwfwk.mongodb.net/?retryWrites=true&w=majority`
exports.connect = () => {
  mongoose.connect(URI, {}).then(()=>{
    console.log("Successfully connected to database!")
  }).catch((error)=>{
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  })
};

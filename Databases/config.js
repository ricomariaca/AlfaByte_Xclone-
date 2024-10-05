const mongoose = require('mongoose');
const {MONGO_ATLAS, DB_NAME}= process.env;

const dbConnection= async() => {
  try {
    console.log("MONGO_ATLAS:", MONGO_ATLAS);
    await mongoose.connect(MONGO_ATLAS);
    console.log("[INFO] MONGODB is ONLINE!!!!!!");
    
  } catch (error) {
    console.log(error);
    throw new Error("[ERROR] Something went wrong!, check db connection with mongoDB");
    
  }
}

module.exports= {
    dbConnection,
}

//lGIsmUR75ue0jH2i
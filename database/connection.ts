import mongoose from "mongoose";

const database_connection = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://bhattaraiyogesh007:ecYCBKeQIHBqcmE6@takeo-cluster.gnmc5j9.mongodb.net/test"
  );

  if (connection) {
    console.log("Connected to database");
  } else {
    console.log("Connection to the database failed");
  }
};

export default database_connection;

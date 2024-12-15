const { MongoClient } = require("mongodb");

// Connection URL for MongoDB database
const mongoURI =
  "mongodb+srv://rsk54:password1905@synopai.oabz6am.mongodb.net/?retryWrites=true&w=majority&ssl=true";

// Function to connect to the MongoDB database
async function connectToMongoDB(countryCode) {
  try {
    // Create a MongoClient instance and connect to the database
    const client = new MongoClient(mongoURI);
    await client.connect();
    const db = client.db(`news-articles-${countryCode}`);

    // Once connected, return the MongoDB client instance
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToMongoDB;

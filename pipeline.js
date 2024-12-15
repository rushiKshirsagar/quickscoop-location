const getData = require("./src/API/get-data");
const collections = require("./src/constants/all-collections");

const scrapeAndPostPipeline = async () => {
  try {
    await getData();
    console.log("Database up and running");
  } catch (error) {
    console.log(error);
  }
};

scrapeAndPostPipeline();

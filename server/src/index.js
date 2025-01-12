// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { application } from "express";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    application.listen(port, () => {
      console.log(`App Is Listening On Port:${port}`);
    });
  })
  .catch((err) => {
    console.log("MOngoDB Connection Failed..!!", err);
  });

//IIFE

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// })();

// app.listen(process.env.PORT, () => {
//   console.log(`Databaseonnected successfully on ${PORT}`);
// });

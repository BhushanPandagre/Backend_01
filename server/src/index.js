// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

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

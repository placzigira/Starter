import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);
app.use(cookieParser());
app.use("/v1/api", routes);

const dbUrl = process.env.dbUrl;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected succesfully");
  });
const Port = process.env.Port || 4004;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
export default app;

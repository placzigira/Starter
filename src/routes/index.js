import express from "express";
import homePage from "./Home/homePage.js";
const app = express();

app.use("/landPage", homePage);

export default app;

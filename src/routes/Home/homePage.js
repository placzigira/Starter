import { Router } from "express";

const route = Router();
route.get("/", (req, res) => {
  res.send("Starter Kit");
});
export default route;

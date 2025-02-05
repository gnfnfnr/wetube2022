import express from "express";

const globalRouter = express.Router();
const handleHome = (req, res, next) => {
  return res.send("home");
};
const handleJoin = (req, res, next) => {
  return res.send("join");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;

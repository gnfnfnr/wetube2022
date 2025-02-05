import express from "express";
import handleHome from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/edit", hendleEdit);
videoRouter.get("/watch", handleWatch);

export default videoRouter;

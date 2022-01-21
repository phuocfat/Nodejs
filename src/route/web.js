import express from "express";
import homController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRouter = (app) => {
  router.use("/", homController.myHome);
  return app.use("/", router);
};
module.exports = initWebRouter;

import { Application, RequestHandler } from "express";
import { model } from "mongoose";

const handler: RequestHandler = async (req, res) => {
  const newestRecord = await model("corona").findOne().sort({ _id: -1 });
  console.log("test"); // heroku logs
  res.status(200).send(newestRecord || "test");
};

export const testRoute = (app: Application) => app.get("/test", handler);

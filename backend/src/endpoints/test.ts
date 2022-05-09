import { Application, RequestHandler } from "express";
import { model } from "mongoose";

const handler: RequestHandler = async (req, res) => {
  const newestRecord = await model("corona").findOne().sort({ _id: -1 });
  console.log(newestRecord);
  res.status(200).send(newestRecord);
};

export const refreshRoute = (app: Application) => app.get("/test", handler);

import { Application, RequestHandler } from "express";
import { model } from "mongoose";

const handler: RequestHandler = async (req, res) => {
  const newestRecord = await model("corona").findOne().sort({ _id: -1 });
  console.log(process.env.DATABASE_URI);
  console.log("test");
  res.status(200).send(process.env.DATABASE_URI);
};

export const testRoute = (app: Application) => app.get("/test", handler);

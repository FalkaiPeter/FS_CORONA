import { Application, RequestHandler } from "express";
import { model } from "mongoose";

const handler: RequestHandler = async (req, res) => {
  const records = await model("corona").find({
    date: { $gte: new Date(req.params.start), $lte: new Date(req.params.end) },
  });
  console.log(req.params);
  res.status(200).send(records);
};

export const intervalRoute = (app: Application) => app.get("/interval/:start/:end", handler);

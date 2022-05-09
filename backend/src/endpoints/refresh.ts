import { Application, RequestHandler } from "express";
import axios from "axios";
import { ApiRecord, CoronaRecord } from "../types";
import { model } from "mongoose";

const mapper = (data: ApiRecord[]) =>
  data.map((record) => ({
    infected: record.infected,
    deceased: record.deceased,
    quarantined: record.quarantined,
    recovered: record.recovered,
    tested: record.tested,
    date: record.lastUpdatedAtApify,
  }));

const filterByDate = (data: ApiRecord[], date: Date) =>
  data.filter(({ lastUpdatedAtApify }: ApiRecord) => new Date(lastUpdatedAtApify) > date);

const handler: RequestHandler = async (req, res) => {
  const newestRecord = await model("corona").findOne().sort({ _id: -1 });
  const apiRes = await axios.get("https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1");
  await model("corona").insertMany(mapper(filterByDate(apiRes.data, new Date((newestRecord as CoronaRecord).date))));
  res.status(200).send();
};

export const refreshRoute = (app: Application) => app.get("/refresh", handler);

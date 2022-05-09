import { Schema } from "mongoose";

export const CoronaSchema = new Schema({
  infected: Number,
  deceased: Number,
  recovered: Number,
  quarantined: Number,
  tested: Number,
  date: Date,
});

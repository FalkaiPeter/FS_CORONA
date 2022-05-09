import { Document } from "mongoose";

export interface ApiRecord {
  infected: number;
  deceased: number;
  recovered: number;
  quarantined: number;
  tested: number;
  sourceUrl: string;
  lastUpdatedAtSource?: string;
  lastUpdatedAtApify: string;
  readMe: string;
}

export interface CoronaRecord extends Document {
  infected: number;
  deceased: number;
  recovered: number;
  quarantined: number;
  tested: number;
  date: string;
}

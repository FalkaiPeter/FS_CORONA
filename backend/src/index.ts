import { connect, model } from "mongoose";
import { config } from "dotenv";
import { CoronaSchema } from "./schemas";
import express from "express";
import { intervalRoute, refreshRoute } from "./endpoints";
import cors from "cors";

config();
model("corona", CoronaSchema);
connect(process.env.DATABASE_URI!);

const app = express();
app.use(cors());

refreshRoute(app);
intervalRoute(app);

app.listen(5000, () => console.log("listening..."));

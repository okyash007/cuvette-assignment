import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/connectDb.js";
import { errorMiddleWare } from "./middlewares/errorMiddleWare.js";
import { groupRouter } from "./router/groupRouter.js";
import { noteRouter } from "./router/noteRouter.js";
import serverless from "serverless-http";

dotenv.config({
  path: "./.env",
});

const app = express();

if (process.env.ENV == "dev") {
  connectDb().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  });
} else {
  connectDb();
}

export const handler = serverless(app);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cuvette-assignment-nu.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.json({ status: "giiiii" });
});

app.use("/group", groupRouter);
app.use("/note", noteRouter);

app.use(errorMiddleWare);

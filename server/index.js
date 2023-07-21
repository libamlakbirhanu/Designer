import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import DalleRouter from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", DalleRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello fucking world" });
});

app.listen(8080, () => console.log("server up and running on port " + 8080));

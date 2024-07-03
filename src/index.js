import express from "express";
import replicateRouter from "./router/replicate.js";

const app = express();

app.use(express.json());

app.use("/generate", replicateRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


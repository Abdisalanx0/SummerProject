import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the summer Project!");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

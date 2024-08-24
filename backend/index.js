import connectToMongo from "./db";
import express, { json } from "express";
import cors from 'cors';

connectToMongo();
const app = express();
const port = 5000;

app.use(cors())
app.use(json());

//Available ROutes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at https://localhost:${port}`);
});

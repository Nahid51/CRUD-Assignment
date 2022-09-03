import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./utils/dbconnect.js";
const app = express();
const port = process.env.PORT || 5000;

import userRouter from "./routes/user.route.js";

app.use(cors())
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

dbConnect();

app.use("/user", userRouter);


app.get("/", (req, res) => {
    res.send("Hello Node JS!")
});

app.listen(port, () => {
    console.log("Running server at port: ", port)
});
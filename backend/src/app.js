import express from "express";
import { configDotenv } from "dotenv";
import studentRouter from "./routes/studentRoutes.js";

configDotenv();

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/students", studentRouter);

export default app;

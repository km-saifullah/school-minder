import express from "express";
import studentRouter from "./routes/studentRoutes.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/students/", studentRouter);

export default app;

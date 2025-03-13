import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "https://event-planner-liart.vercel.app", // No trailing slash
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all methods
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors()); // Allow preflight requests

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://event-planner-liart.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
dbConnection();
export default app;
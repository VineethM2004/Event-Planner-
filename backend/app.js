
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
      origin: "https://event-planner-liart.vercel.app",
      credentials: true, 
    })
  );
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
dbConnection();
export default app;
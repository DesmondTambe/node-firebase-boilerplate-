import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "dotenv";
import errorHandler from "./middleware/error-handler.js";
import logger, { logStream } from "./utils/logger.js";

// routes
import routes from "./routes/index.js";

// init app
const app = express();
const PORT = process.env.PORT || "3001";
config();

// middleware
app.use(cors());
app.use(morgan("tiny", { stream: logStream }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);

// use routes
app.use("/api", routes);

// use user routes

app.listen(PORT, () => {
  logger.info(`Server started at ${PORT}`);
});

// app listens
export default app;

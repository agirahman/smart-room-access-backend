import express from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "./config/env.js";
import apiRoutes from "./src/routes/index.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

// Main API Route
app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
    res.send("Smart Room Access Server is running!");
});

// Use global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} in ${NODE_ENV} mode`);
});

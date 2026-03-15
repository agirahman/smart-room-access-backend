import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import { NODE_ENV, PORT } from "./config/env.js";
import apiRoutes from "./src/routes/index.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

// Swagger API Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Main API Route
app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
    res.send("Smart Room Access Server is running!");
});

// Use global error handler
app.use(errorHandler);

const port = PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} in ${NODE_ENV} mode`);
});

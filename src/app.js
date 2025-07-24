import express from "express";
import cors from "cors";
import announcementRoutes from "./routes/announcement.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
import dotenv from "dotenv";


// Swagger setup
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../docs/swagger.js";

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);

export default app;

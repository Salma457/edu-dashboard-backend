import express from "express";
import cors from "cors";
import announcementRoutes from "./routes/announcement.routes.js";
import quizRoutes from "./routes/quiz.routes.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);


export default app;

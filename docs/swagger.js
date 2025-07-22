import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Anyware Task API",
      version: "1.0.0",
      description: "API documentation for Anyware Task backend",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Announcement: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            content: { type: "string" },
            type: { type: "string", enum: ["General", "Urgent", "Info"] },
            subject: { type: "string" },
            authorName: { type: "string" },
            authorAvatar: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        AnnouncementCreate: {
          type: "object",
          required: ["title", "content", "subject", "authorName"],
          properties: {
            title: { type: "string" },
            content: { type: "string" },
            type: {
              type: "string",
              enum: ["General", "Urgent", "Info"],
              default: "General",
            },
            subject: { type: "string" },
            authorName: { type: "string" },
            authorAvatar: { type: "string" },
          },
        },
        Quiz: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            subject: { type: "string" },
            semester: { type: "string", enum: ["First", "Second", "Summer"] },
            duration: { type: "number" },
            totalMarks: { type: "number" },
            questions: { type: "array", items: { type: "object" } },
            authorName: { type: "string" },
            authorAvatar: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        QuizCreate: {
          type: "object",
          required: [
            "title",
            "subject",
            "semester",
            "duration",
            "totalMarks",
            "authorName",
          ],
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            subject: { type: "string" },
            semester: { type: "string", enum: ["First", "Second", "Summer"] },
            duration: { type: "number" },
            totalMarks: { type: "number" },
            questions: { type: "array", items: { type: "object" } },
            authorName: { type: "string" },
            authorAvatar: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

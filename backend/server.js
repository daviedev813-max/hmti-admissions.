// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import applicationRoutes from "./routes/application.routes.js";

// ---- Load .env safely ----
dotenv.config({ path: path.resolve("./.env"), debug: true });

// ---- Check environment variables ----
if (!process.env.MONGO_URI) {
  console.error("❌ Error: MONGO_URI is undefined. Check your .env file.");
  process.exit(1); // Stop server if no MongoDB URI
}
if (!process.env.PORT) {
  console.warn("⚠️ PORT not defined in .env. Defaulting to 5000.");
}

// ---- App setup ----
const app = express();
app.use(cors({
  origin: "https://hansenmylestraininginstitute.vercel.app", // NO trailing slash!
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(express.json());


// ---- Routes ----
app.use("/api/applications", applicationRoutes);
app.use((req, res) => {
  res.status(404).send({ error: "Route not found. Check your VITE_API_URL." });
});
app.get("/", (req, res) => {
  res.send("Hansenmyles Training Institute API is running");
});

// ---- MongoDB connection ----
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop server if MongoDB fails
  });

// ---- Start server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

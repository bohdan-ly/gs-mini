import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
      : true,
  }),
);

app.get("/contact", (req, res) => {
  res.json({ message: "✅ Дякую! Напишіть мені в телеграм - відповім сьогодні!" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Backend listen in port ${process.env.SERVER_PORT}`);
});

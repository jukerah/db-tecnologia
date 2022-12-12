import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes/routes";

const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());

const allowedOrigins = [process.env.WEB_URL];
const options: cors.CorsOptions = { origin: allowedOrigins };
// app.use(cors(options));
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) return res.status(400).json({
    error: err.message
  });

  return res.status(500).json({
    status: "error",
    message: "Internal server error."
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, Mutual TLS!");
});

router.get("/api/data", (req: Request, res: Response) => {
  // Your route logic here
});

export default router;

import { Router } from "express";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (req, res) => {
  res.send("Welcome to our API");
});

export default router;

import { Router } from "express";
import replicateController from "../controller/replicate.js";

const router = Router();

router.post("/", replicateController);

export default router;

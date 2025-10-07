import express from "express";
import { getUmrah, addUmrah, updateUmrah, deleteUmrah } from "../controllers/umrahControllers.js";

const router = express.Router();

router.get("/", getUmrah);
router.post("/", addUmrah);
router.put("/:id", updateUmrah);
router.delete("/:id", deleteUmrah);

export default router;

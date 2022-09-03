import express from "express";
const router = express.Router();

import { addNewUser, deleteSingleUser, getAllUser, getRandomUser, getSingleUser, updateMultipleUser, updateSingleUser } from "../controllers/user.controller.js";

router.get("/random", getRandomUser);
router.get("/all", getAllUser);
router.get("/:id", getSingleUser);
router.post("/save", addNewUser);
router.patch("/update/:id", updateSingleUser);
router.patch("/bulk-update", updateMultipleUser);
router.delete("/delete/:id", deleteSingleUser);

export default router;
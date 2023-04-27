import users from "../utils/users.js";
import { Router } from "express";
const router = Router();

router.post("/create", async (req, res) => {
    const userID = await users.create(req.body.email, req.body.password);
    res.send("Hello, " + userID);
});
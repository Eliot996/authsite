import users from "../utils/users.js";
import { Router } from "express";
const router = Router();

router.post("/create", async (req, res) => {
    const userID = await users.create(req.body.email, req.body.password);

    if (userID) {
        req.session.userID = userID;
        res.send({ userID: userID });
    } else {
        res.sendStatus(300);
    }
});

router.post("/login", async (req, res) => {
    const userID = await users.authenticate(req.body.email, req.body.password);

    if (userID) {
        req.session.userID = userID;
        res.send({ userID: userID });
    } else {
        res.sendStatus(403);
    }
});


export default router;
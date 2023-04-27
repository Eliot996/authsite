import dotenv from "dotenv/config";
import bcrypt from "bcrypt";
import connection from "../databases/connection.js";

const saltRounds = Number(process.env.SALT_ROUNDS);

async function create(email, password) {
    const encryptedPassword = bcrypt.hashSync(password, saltRounds);
    const { lastID } = await connection.run("INSERT INTO users (email, password) VALUES (?, ?);", 
                                            [email, encryptedPassword]);

    return lastID;
}

async function authenticate(email, password) {
    const user = await connection.get("SELECT * FROM users WHERE email = ?;", [email]);
    
    if (user) {
        if (bcrypt.compareSync(password, user.password)) 
            return user.id;
    }

    return undefined;
}

export default {create, authenticate};
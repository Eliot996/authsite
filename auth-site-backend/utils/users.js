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
    const result = await connection.get("SELECT * FROM users WHERkE email = ?;", [email]);
    console.log(result, lastID);
}

export default {create};
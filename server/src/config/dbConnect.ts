import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONNECTION_URL = process.env.MONGODB_URI
let db = mongoose.connection;

mongoose.connect(CONNECTION_URL as string)

export default db;
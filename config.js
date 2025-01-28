import { config } from "dotenv";
config()
export const PORT = process.env.PORT || 3000 // Cambiado a 3001
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_PORT = process.env.DB_PORT || 27017
export const DB_DATABASE = process.env.DB_DATABASE || "BaseDatos"
export const URL = process.env.URL || "http://localhost:3000"

export const JWT_SECRET = process.env.JWT_SECRET || "secret"
export const JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN || "1d"

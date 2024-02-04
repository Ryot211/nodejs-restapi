import { config } from "dotenv";

config()
 
export const PORT = process.env.PORT || 3023
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'AGcEAhF5GfBd12Fefa-3f6Gdfhf4bHEC' 
export const DB_HOST = process.env.DB_HOST || 'roundhouse.proxy.rlwy.net'
export const DB_DATABASE = process.env.DB_DATABASE || 'railway'
export const DB_PORT = process.env.DB_PORT  || 54121
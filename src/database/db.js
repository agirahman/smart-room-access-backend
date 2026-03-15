import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"
import { NODE_ENV, DATABASE_URL } from "../../config/env.js"

config({ path: `.env.${NODE_ENV || "development"}.local` })

const sql = neon(DATABASE_URL)
export const db = drizzle({client:sql})
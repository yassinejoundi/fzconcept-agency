import { readFile } from "node:fs/promises"

import { neon } from "@neondatabase/serverless"

const connectionString =
  process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL is required.")
}

const migration = await readFile(
  new URL("../database/migrations/0001_create_contact_submissions.sql", import.meta.url),
  "utf8"
)

await neon(connectionString).query(migration)
console.log("Applied contact submissions migration.")

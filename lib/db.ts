import "server-only"

import { neon } from "@neondatabase/serverless"

export function getDatabase() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) throw new Error("DATABASE_URL is not configured.")
  return neon(connectionString)
}

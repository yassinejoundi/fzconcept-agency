import { getAuth } from "@/lib/auth/server"

type AuthRouteContext = { params: Promise<{ path: string[] }> }
type AuthRouteMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

function handle(method: AuthRouteMethod) {
  return (request: Request, context: AuthRouteContext) =>
    getAuth().handler()[method](request, context)
}

export const GET = handle("GET")
export const POST = handle("POST")
export const PUT = handle("PUT")
export const DELETE = handle("DELETE")
export const PATCH = handle("PATCH")

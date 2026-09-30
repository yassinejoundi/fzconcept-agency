"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth/client"

export function SignOutButton() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [failed, setFailed] = useState(false)

  async function signOut() {
    setPending(true)
    setFailed(false)
    try {
      const { error } = await authClient.signOut()
      if (error) {
        setFailed(true)
        return
      }
      router.replace("/admin")
      router.refresh()
    } catch {
      setFailed(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        onClick={() => void signOut()}
        disabled={pending}
        className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
      >
        <LogOut className="mr-2 h-5 w-5" />
        {pending ? "Signing out..." : "Sign Out"}
      </Button>
      {failed ? (
        <p role="alert" className="mt-2 text-sm text-destructive">
          Sign out failed. Please try again.
        </p>
      ) : null}
    </div>
  )
}

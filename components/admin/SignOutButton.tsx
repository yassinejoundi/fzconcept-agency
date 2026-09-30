"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"
import { authClient } from "@/lib/auth/client"

export function SignOutButton() {
  const router = useRouter()
  const { locale } = useI18n()
  const fr = locale === "fr"
  const [pending, setPending] = useState(false)
  const [failed, setFailed] = useState(false)
  const label = pending ? (fr ? "Déconnexion…" : "Signing out…") : (fr ? "Se déconnecter" : "Sign out")

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
    <div className="fz-admin-signout-wrap">
      <button className="fz-admin-signout" type="button" onClick={() => void signOut()} disabled={pending} aria-label={label}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} aria-hidden="true" />
        <span>{label}</span>
      </button>
      {failed ? <p className="fz-admin-signout-error" role="alert">{fr ? "Déconnexion impossible. Réessayez." : "Sign out failed. Try again."}</p> : null}
    </div>
  )
}

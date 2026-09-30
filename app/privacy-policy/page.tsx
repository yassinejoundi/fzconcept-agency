import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/common/LegalPageLayout"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "Politique de confidentialité | FZ Concept",
        description:
          "Politique de confidentialité de FZ Concept : collecte, utilisation et protection de vos informations.",
      }
    : {
        title: "Privacy Policy | FZ Concept",
        description:
          "FZ Concept privacy policy describing how we collect, use, and protect your information.",
      }
}

export default async function PrivacyPolicyPage() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          badge: "Juridique",
          titleA: "Politique de confidentialité",
          titleB: "Votre confiance compte",
          description:
            "Cette politique explique comment FZ Concept collecte, utilise et protège vos informations lorsque vous nous contactez ou utilisez notre site.",
          primary: "Nous contacter",
          secondary: "Conditions d’utilisation",
          disclaimer:
            "Cette page est fournie à titre informatif et ne constitue pas un avis juridique. Pour toute question spécifique, veuillez consulter un professionnel qualifié.",
          sections: [
            {
              title: "Informations collectées",
              content: [
                "Les coordonnées que vous fournissez (nom, email, téléphone, localisation, message).",
                "Les informations liées au projet, afin d’évaluer vos besoins.",
                "Des données techniques de base (ex. type de navigateur) lors de la navigation sur notre site.",
              ],
            },
            {
              title: "Utilisation de vos informations",
              content: [
                "Répondre aux demandes et planifier des consultations.",
                "Préparer des propositions, planifier les projets et délivrer nos services.",
                "Améliorer notre site et la qualité de nos communications.",
              ],
            },
            {
              title: "Partage & divulgation",
              content: [
                "Nous ne vendons pas vos données personnelles.",
                "Nous pouvons partager des informations limitées avec des prestataires de confiance impliqués dans la réalisation de nos services.",
                "Nous pouvons divulguer des informations si la loi l’exige ou pour protéger nos droits.",
              ],
            },
            {
              title: "Conservation des données",
              content: [
                "Nous conservons vos informations uniquement le temps nécessaire aux finalités décrites ci-dessus ou tel que requis par la loi.",
              ],
            },
            {
              title: "Vos droits",
              content: [
                "Vous pouvez demander l’accès, la correction ou la suppression de vos informations personnelles.",
                "Vous pouvez vous opposer à certains traitements ou retirer votre consentement lorsque cela s’applique.",
              ],
            },
            {
              title: "Contact",
              content: [
                "Pour toute question relative à la confidentialité, contactez-nous à contact@fzconcept.agency ou via la page contact.",
              ],
            },
          ] as const,
        }
      : {
          badge: "Legal",
          titleA: "Privacy Policy",
          titleB: "Your Trust Matters",
          description:
            "This policy explains how FZ Concept collects, uses, and protects your information when you contact us or use our website.",
          primary: "Contact Us",
          secondary: "Terms of Service",
          disclaimer:
            "This page is provided for general information and does not constitute legal advice. If you have specific questions, please consult a qualified professional.",
          sections: [
            {
              title: "Information We Collect",
              content: [
                "Contact details you provide (name, email, phone, location, message).",
                "Project information you share to help us evaluate your needs.",
                "Basic technical data (e.g., browser type) when you navigate our site.",
              ],
            },
            {
              title: "How We Use Your Information",
              content: [
                "To respond to inquiries and schedule consultations.",
                "To provide proposals, project planning, and service delivery.",
                "To improve our website and communication quality.",
              ],
            },
            {
              title: "Sharing & Disclosure",
              content: [
                "We do not sell your personal data.",
                "We may share limited information with trusted service providers involved in delivering our services.",
                "We may disclose information if required by law or to protect our rights.",
              ],
            },
            {
              title: "Data Retention",
              content: [
                "We keep your information only as long as needed for the purposes described above or as required by law.",
              ],
            },
            {
              title: "Your Rights",
              content: [
                "You may request access, correction, or deletion of your personal information.",
                "You may object to certain processing or withdraw consent where applicable.",
              ],
            },
            {
              title: "Contact",
              content: [
                "For privacy questions, contact us at contact@fzconcept.agency or via the contact page.",
              ],
            },
          ] as const,
        }

  return <LegalPageLayout copy={copy} otherHref="/terms-of-service" />
}

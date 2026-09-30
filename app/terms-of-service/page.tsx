import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/common/LegalPageLayout"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "Conditions d’utilisation | FZ Concept",
        description:
          "Conditions d’utilisation FZ Concept : règles d’utilisation du site et principes d’engagement.",
      }
    : {
        title: "Terms of Service | FZ Concept",
        description:
          "FZ Concept terms of service covering website use and service engagement.",
      }
}

export default async function TermsOfServicePage() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          badge: "Juridique",
          titleA: "Conditions d’utilisation",
          titleB: "Clair & transparent",
          description:
            "Ces conditions encadrent l’utilisation de notre site et décrivent les principes généraux d’engagement avec FZ Concept.",
          primary: "Nous contacter",
          secondary: "Politique de confidentialité",
          disclaimer:
            "Cette page est fournie à titre informatif et ne constitue pas un avis juridique. Pour toute question spécifique, veuillez consulter un professionnel qualifié.",
          sections: [
            {
              title: "Utilisation du site",
              content: [
                "Vous pouvez utiliser ce site à des fins licites et conformément aux présentes conditions.",
                "Le contenu est fourni à titre informatif et peut être modifié sans préavis.",
              ],
            },
            {
              title: "Demandes & propositions",
              content: [
                "L’envoi d’une demande via le formulaire de contact ne crée pas de relation client.",
                "Le périmètre, les honoraires, les délais et les livrables sont confirmés uniquement dans un accord écrit.",
              ],
            },
            {
              title: "Propriété intellectuelle",
              content: [
                "Le contenu du site et les éléments de marque appartiennent à FZ Concept ou sont sous licence.",
                "Vous ne pouvez pas copier, reproduire ou distribuer des éléments sans autorisation écrite.",
              ],
            },
            {
              title: "Limitation de responsabilité",
              content: [
                "Nous ne sommes pas responsables des pertes indirectes ou consécutives liées à l’utilisation du site.",
                "Nous ne garantissons pas une disponibilité ininterrompue du site.",
              ],
            },
            {
              title: "Liens vers des tiers",
              content: [
                "Ce site peut inclure des liens vers des sites tiers. Nous ne sommes pas responsables de leur contenu ou de leurs pratiques.",
              ],
            },
            {
              title: "Contact",
              content: [
                "Pour toute question relative à ces conditions, contactez-nous à contact@fzconcept.agency ou via la page contact.",
              ],
            },
          ] as const,
        }
      : {
          badge: "Legal",
          titleA: "Terms of Service",
          titleB: "Clear & Transparent",
          description:
            "These terms govern the use of our website and outline general principles for engaging with FZ Concept.",
          primary: "Contact Us",
          secondary: "Privacy Policy",
          disclaimer:
            "This page is provided for general information and does not constitute legal advice. If you have specific questions, please consult a qualified professional.",
          sections: [
            {
              title: "Use of Website",
              content: [
                "You may use this website for lawful purposes and in accordance with these terms.",
                "Content is provided for informational purposes and may change without notice.",
              ],
            },
            {
              title: "Inquiries & Proposals",
              content: [
                "Submitting a contact request does not create a client relationship.",
                "Project scope, fees, timelines, and deliverables are confirmed only in a written agreement.",
              ],
            },
            {
              title: "Intellectual Property",
              content: [
                "Our website content and brand assets are owned by FZ Concept or licensed to us.",
                "You may not copy, reproduce, or distribute materials without written permission.",
              ],
            },
            {
              title: "Limitation of Liability",
              content: [
                "We are not liable for indirect or consequential losses arising from website use.",
                "We do not guarantee uninterrupted availability of the website.",
              ],
            },
            {
              title: "Third-Party Links",
              content: [
                "This website may include links to third-party websites. We are not responsible for their content or practices.",
              ],
            },
            {
              title: "Contact",
              content: [
                "For questions about these terms, contact us at contact@fzconcept.agency or via the contact page.",
              ],
            },
          ] as const,
        }

  return <LegalPageLayout copy={copy} otherHref="/privacy-policy" />
}

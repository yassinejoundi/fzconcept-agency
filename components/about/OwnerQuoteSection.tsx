import Image from "next/image"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

const OWNER_IMAGE_SRC =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop"

export async function OwnerQuoteSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          title: "Notre Philosophie",
          subtitle: "Créer des espaces qui vous ressemblent",
          quote:
            "FZ Concept est né d’un parcours réel, construit entre expérience terrain et formation. J’ai appris aux côtés de professionnels expérimentés dans le domaine de l’ameublement et de l’aménagement, tout en suivant des formations spécialisées pour renforcer mes compétences techniques et organisationnelles.\n\nCe métier, je l’ai choisi par passion, mais surtout par conviction : créer des espaces qui ressemblent aux personnes qui y vivent. Aujourd’hui, FZ Concept propose un accompagnement humain, sérieux et personnalisé, en alliant savoir-faire, sens du détail et courage d’entreprendre.",
          name: "Fatimaezzahra Aguardoud",
          role: "Fondatrice & Directrice",
          imageAlt: "Portrait de Fatimaezzahra Aguardoud",
        }
      : {
          title: "Our Philosophy",
          subtitle: "Crafting spaces that reflect you",
          quote:
            "FZ Concept was born from a real journey—built through hands-on experience and formal training. I learned alongside seasoned professionals in furniture and space planning, while also completing specialized courses to strengthen my technical and organizational skills.\n\nI chose this craft out of passion, but above all out of conviction: to create spaces that reflect the people who live in them. Today, FZ Concept offers human, thoughtful, and personalized guidance—combining know-how, attention to detail, and the courage to build.",
          name: "Fatimaezzahra Aguardoud",
          role: "Founder & Director",
          imageAlt: "Portrait of Fatimaezzahra Aguardoud",
        }

  return (
    <section className="bg-muted/30">
      <motion.div
        key={locale}
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-14 lg:gap-20 md:grid-cols-2">
            <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src={OWNER_IMAGE_SRC}
                alt={copy.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h3 className="mb-2 font-serif text-2xl font-bold text-primary">
                {copy.title}
              </h3>
              <p className="mb-6 font-sans text-sm text-muted-foreground">
                {copy.subtitle}
              </p>
              <p className="mb-6 max-w-md font-sans text-muted-foreground leading-relaxed whitespace-pre-line md:mb-10 lg:mb-12">
                {copy.quote}
              </p>
              <p className="font-serif text-xl font-bold text-foreground">
                {copy.name}
              </p>
              <p className="mt-1 font-sans text-xs uppercase tracking-wide text-muted-foreground">
                {copy.role}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function ServicesSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Notre processus",
          title: "Services de design",
          description:
            "Nous suivons un processus rigoureux pour transformer votre vision en réalité, en soignant chaque détail.",
          items: [
            {
              title: "Consultation",
              description:
                "Nous commençons par comprendre votre style de vie, vos goûts et vos besoins afin de créer un brief personnalisé.",
            },
            {
              title: "Concept & design",
              description:
                "Nos designers créent des mood boards, des visuels 3D et des plans pour donner vie à votre vision.",
            },
            {
              title: "Exécution",
              description:
                "Nous pilotons le projet de bout en bout, du sourcing au styling final, avec un haut niveau d’exigence.",
            },
          ],
        }
      : {
          eyebrow: "Our Process",
          title: "Design Services",
          description:
            "We follow a meticulous process to transform your vision into reality, ensuring every detail is perfect.",
          items: [
            {
              title: "Consultation",
              description:
                "We start by understanding your lifestyle, tastes, and requirements to create a personalized design brief.",
            },
            {
              title: "Concept Design",
              description:
                "Our designers create stunning mood boards, 3D visualizations, and layouts to bring the vision to life.",
            },
            {
              title: "Execution",
              description:
                "We manage the entire renovation process, from sourcing materials to final styling, ensuring quality.",
            },
          ],
        }
  return (
    <section className="bg-background">
      {/* Container */}
      <motion.div
        key={locale}
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Title */}
        <motion.div variants={fadeInUp}>
          <p className="text-center text-sm font-bold uppercase text-gold tracking-widest">
            {copy.eyebrow}
          </p>
          <h2 className="text-center text-3xl font-bold md:text-5xl font-serif text-primary mt-2">
            {copy.title}
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-muted-foreground sm:text-base md:mb-12 lg:mb-16 font-sans">
            {copy.description}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {copy.items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="grid gap-4 rounded-xl border border-solid border-border p-8 md:p-10 hover:shadow-lg transition-all duration-300 bg-card hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <p className="text-sm font-bold sm:text-xl font-serif">
                  {idx + 1}
                </p>
              </div>
              <p className="text-xl font-semibold font-serif text-foreground">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

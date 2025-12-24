import Image from "next/image"
import { Palette, Leaf, Award } from "lucide-react"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function ApproachSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Notre approche",
          title: "Nous créons des espaces qui vous ressemblent",
          description:
            "Notre philosophie repose sur l’idée que chaque lieu a une histoire. Nous écoutons, concevons et réalisons avec passion et précision.",
          points: [
            "Design personnalisé",
            "Matériaux durables",
            "Savoir-faire expert",
          ],
          imageAlt: "Approche du design d’intérieur",
        }
      : {
          eyebrow: "Our Approach",
          title: "We Craft Spaces That Reflect Your Soul",
          description:
            "Our philosophy revolves around the belief that every space has a story. We listen, design, and create with passion and precision.",
          points: [
            "Personalized Design",
            "Sustainable Materials",
            "Expert Craftsmanship",
          ],
          imageAlt: "Interior Design Approach",
        }
  return (
    <section className="bg-secondary/20">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
          {/* Hero Content */}
          <motion.div
            key={`${locale}-content`}
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            {/* Hero Divider */}
            <div className="mb-4 flex items-center">
              <div className="mr-4 w-10 border-t border-gold"></div>
              <p className="text-sm font-medium sm:text-base font-sans text-gold uppercase tracking-wider">
                {copy.eyebrow}
              </p>
            </div>
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight font-serif text-primary">
              {copy.title}
            </h1>
            <p className="mb-6 max-w-lg text-sm text-muted-foreground sm:text-xl md:mb-10 lg:mb-12 font-sans">
              {copy.description}
            </p>
            {/* Hero Info */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-start sm:gap-8 lg:gap-12 text-primary font-medium">
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-gold" />
                <p className="text-sm">{copy.points[0]}</p>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-gold" />
                <p className="text-sm">{copy.points[1]}</p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gold" />
                <p className="text-sm">{copy.points[2]}</p>
              </div>
            </div>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            key={`${locale}-image`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
              alt={copy.imageAlt}
              width={800}
              height={600}
              className="inline-block h-full w-full max-w-2xl rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

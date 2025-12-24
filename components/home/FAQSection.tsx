import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function FAQSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          title: "Questions fréquentes",
          description:
            "Tout ce qu’il faut savoir sur notre processus et nos services.",
          faqs: [
            {
              question: "Qu’est-ce qui rend FZ Concept unique ?",
              answer:
                "Nous associons l’esthétique marocaine traditionnelle au luxe contemporain, pour créer des espaces uniques qui racontent une histoire.",
            },
            {
              question: "Proposez-vous des consultations en ligne ?",
              answer:
                "Oui, nous proposons des consultations de design à distance pour des clients partout dans le monde.",
            },
            {
              question: "Combien de temps dure un projet ?",
              answer:
                "Les délais varient selon l’ampleur, mais comptent généralement 4 à 12 semaines pour une pièce complète.",
            },
          ],
        }
      : {
          title: "Frequently Asked Questions",
          description:
            "Everything you need to know about our interior design process and services.",
          faqs: [
            {
              question: "What makes FZ Concept unique?",
              answer:
                "We blend traditional Moroccan aesthetics with modern luxury, creating unique spaces that tell a story.",
            },
            {
              question: "Do you offer online consultations?",
              answer:
                "Yes, we offer virtual design consultations for clients worldwide.",
            },
            {
              question: "How long does a project take?",
              answer:
                "Timelines vary by project scope, but typically range from 4-12 weeks for full room designs.",
            },
          ],
        }

  return (
    <section className="bg-background">
      {/* Container */}
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Component */}
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center md:max-w-3xl md:px-10"
          variants={fadeInUp}
        >
          <h2 className="mx-auto text-center font-bold font-serif text-primary text-3xl md:text-5xl">
            {copy.title}
          </h2>
          <p className="font-sans mt-4 max-w-xl px-5 text-center text-base font-light text-muted-foreground md:max-w-lg">
            {copy.description}
          </p>
        </motion.div>
        {/* FAQs */}
        <motion.div className="mt-10 mx-auto max-w-3xl" variants={fadeInUp}>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-4"
          >
            {copy.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card rounded-xl px-6 shadow-sm transition-all hover:shadow-md"
              >
                <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-sans font-light text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}

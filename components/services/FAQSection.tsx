import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Do you work outside Marrakech?",
      answer:
        "Yes. We take projects across Morocco depending on scope and timeline.",
    },
    {
      question: "Can you handle the full renovation?",
      answer:
        "Absolutely. We offer turnkey project management, planning, sourcing, coordination, and finishing.",
    },
    {
      question: "How long does a project take?",
      answer:
        "The duration of a project depends on various factors such as the scope of the work, the complexity of the design, and the availability of resources. We typically work on a project timeline of 4 to 6 weeks, but this can vary depending on the specific project.",
    },
    {
      question: "How do we start a project?",
      answer:
        "Begin with a consultation. We’ll define the brief, timeline, and next steps for design and execution.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we offer online consultations to discuss your design ideas, requirements, and any other questions you may have. This allows for a more interactive and personalized design process.",
    },
  ] as const
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-gold tracking-widest">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
            Questions, Answered
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            Clear answers to help you choose the right service and move forward
            with confidence.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
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
        </div>
      </div>
    </section>
  )
}

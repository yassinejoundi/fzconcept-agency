export function FAQSection() {
  return (
    <section className="bg-background">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-20">
        {/* Component */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center md:max-w-3xl md:px-10">
          <h2 className="mx-auto text-center font-bold font-serif text-primary text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="font-sans mt-4 max-w-xl px-5 text-center text-base font-light text-muted-foreground md:max-w-lg">
            Everything you need to know about our interior design process and services.
          </p>
        </div>
        {/* FAQs */}
        <div className="mt-10 flex flex-col justify-between md:flex-row md:flex-wrap">
          {/* FAQ CONTAINER LEFT */}
          <div className="mx-4 flex max-w-3xl flex-col md:shrink md:grow md:basis-96 c-md-basis-96 gap-6">
            {/* FAQ BLOCK */}
            <div className="relative w-full rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <h2 className="font-bold text-foreground text-xl font-serif">
                What makes FZ Concept unique?
              </h2>
              <p className="font-sans mt-4 text-base font-light text-muted-foreground">
                We blend traditional Moroccan aesthetics with modern luxury, creating unique spaces that tell a story.
              </p>
            </div>
            {/* FAQ BLOCK */}
            <div className="relative w-full rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <h2 className="font-bold text-foreground text-xl font-serif">
                Do you offer online consultations?
              </h2>
              <p className="font-sans mt-4 text-base font-light text-muted-foreground">
                Yes, we offer virtual design consultations for clients worldwide.
              </p>
            </div>
            {/* FAQ BLOCK */}
            <div className="relative w-full rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <h2 className="font-bold text-foreground text-xl font-serif">
                How long does a project take?
              </h2>
              <p className="font-sans mt-4 text-base font-light text-muted-foreground">
                Timelines vary by project scope, but typically range from 4-12 weeks for full room designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

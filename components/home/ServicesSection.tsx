import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ServicesSection() {
  return (
    <section className="bg-background">
      {/* Container */}
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Title */}
        <motion.div variants={fadeInUp}>
          <p className="text-center text-sm font-bold uppercase text-gold tracking-widest">
            Our Process
          </p>
          <h2 className="text-center text-3xl font-bold md:text-5xl font-serif text-primary mt-2">
            Design Services
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-muted-foreground sm:text-base md:mb-12 lg:mb-16 font-sans">
            We follow a meticulous process to transform your vision into
            reality, ensuring every detail is perfect.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {/* Item */}
          <motion.div
            className="grid gap-4 rounded-xl border border-solid border-border p-8 md:p-10 hover:shadow-lg transition-all duration-300 bg-card hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <p className="text-sm font-bold sm:text-xl font-serif">1</p>
            </div>
            <p className="text-xl font-semibold font-serif text-foreground">
              Consultation
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              We start by understanding your lifestyle, tastes, and requirements
              to create a personalized design brief.
            </p>
          </motion.div>
          {/* Item */}
          <motion.div
            className="grid gap-4 rounded-xl border border-solid border-border p-8 md:p-10 hover:shadow-lg transition-all duration-300 bg-card hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <p className="text-sm font-bold sm:text-xl font-serif">2</p>
            </div>
            <p className="text-xl font-semibold font-serif text-foreground">
              Concept Design
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              Our designers create stunning mood boards, 3D visualizations, and
              layouts to bring the vision to life.
            </p>
          </motion.div>
          {/* Item */}
          <motion.div
            className="grid gap-4 rounded-xl border border-solid border-border p-8 md:p-10 hover:shadow-lg transition-all duration-300 bg-card hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <p className="text-sm font-bold sm:text-xl font-serif">3</p>
            </div>
            <p className="text-xl font-semibold font-serif text-foreground">
              Execution
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              We manage the entire renovation process, from sourcing materials
              to final styling, ensuring quality.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

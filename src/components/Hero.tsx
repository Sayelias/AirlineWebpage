import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-airline.webp";
import BookingDialog from "@/components/BookingDialog";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AnyCompany Airlines aircraft flying above the clouds at sunset"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-display text-sm font-medium uppercase tracking-[0.4em] text-primary"
          >
            Fly Beyond Expectations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
          >
            Your Journey{" "}
            <span className="text-gradient-sky">Starts Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 max-w-lg font-body text-xl leading-relaxed text-muted-foreground"
          >
            Connecting the world's greatest cities with exceptional comfort,
            award-winning service, and unbeatable reliability. Fly AnyCompany.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <BookingDialog>
              <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-sky px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20">
                Book a Flight
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </BookingDialog>
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-display text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
            >
              Explore Routes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { routes, regions } from "@/data/routes";

const highlightCities = [
  { city: "London", code: "LHR" },
  { city: "Tokyo", code: "NRT" },
  { city: "New York", code: "JFK" },
  { city: "Paris", code: "CDG" },
  { city: "Sydney", code: "SYD" },
  { city: "Bangkok", code: "BKK" },
];

const Destinations = () => {
  const regionCounts = regions.map((region) => ({
    name: region,
    count: routes.filter((r) => r.region === region).length,
  }));

  return (
    <section id="destinations" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Global Network
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Fly to {routes.length}+ Destinations
          </h2>
          <p className="mx-auto max-w-lg font-body text-lg text-muted-foreground">
            From Seoul Incheon to the world — connecting you to {regions.length} regions across every continent.
          </p>
        </motion.div>

        {/* Region pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {regionCounts.map(({ name, count }) => (
            <Link
              key={name}
              to={`/routes?region=${encodeURIComponent(name)}`}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card px-4 py-5 text-center transition-all hover:border-primary/30 hover:shadow-md"
            >
              <Globe className="mb-2 h-5 w-5 text-primary" />
              <span className="font-display text-sm font-semibold text-foreground">{name}</span>
              <span className="mt-1 font-body text-xs text-muted-foreground">
                {count} {count === 1 ? "city" : "cities"}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* Featured cities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="mb-5 text-center font-display text-lg font-semibold text-foreground">
            Popular Routes from Seoul
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {highlightCities.map((dest) => (
              <div
                key={dest.code}
                className="group flex flex-col items-center rounded-xl border border-border/50 bg-card px-4 py-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="mb-1 rounded-md bg-primary/10 px-2.5 py-1 font-display text-xs font-bold text-primary">
                  {dest.code}
                </span>
                <span className="mt-2 font-display text-sm font-semibold text-foreground">
                  {dest.city}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/routes"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-sky px-8 py-3.5 font-display text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            View All Routes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;

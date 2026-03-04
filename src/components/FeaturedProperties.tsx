import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Curated Experiences
            </p>
            <h2 className="font-display text-3xl font-bold italic tracking-tight md:text-5xl">
              Suites & Experiences
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 font-body text-base text-muted-foreground transition-colors hover:text-primary md:inline-flex"
          >
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, i) => (
            <motion.div
              key={property.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/properties/${property.slug}`} className="group block cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block w-full rounded-full bg-gradient-gold py-2.5 text-center font-display text-sm font-semibold text-primary-foreground">
                      View Details
                    </span>
                  </div>
                </div>

                <p className="mb-1 font-body text-sm uppercase tracking-widest text-muted-foreground">
                  {property.category}
                </p>
                <h3 className="mb-1 font-display text-base font-semibold">
                  {property.name}
                </h3>
                <p className="font-body text-sm text-primary">
                  {property.priceFrom}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

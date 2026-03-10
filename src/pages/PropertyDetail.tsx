import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plane, Shield, Sparkles } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPropertyBySlug, properties } from "@/data/properties";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug || "");

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <div className="flex flex-1 items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="mb-4 font-display text-3xl font-bold">Cabin Class Not Found</h1>
            <Link to="/" className="font-body text-primary underline underline-offset-4 hover:text-sky-light">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const otherProperties = properties.filter((p) => p.slug !== property.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <section className="container pb-16 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={property.image}
                  alt={property.name}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {property.category}
              </p>
              <h1 className="mb-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {property.name}
              </h1>
              <p className="mb-6 font-display text-xl text-gradient-sky">
                {property.tagline}
              </p>
              <p className="mb-8 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
                {property.description}
              </p>

              <div className="mb-8 flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold">{property.priceFrom}</span>
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                <BookingDialog defaultSuite={property.name}>
                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-sky px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20">
                    <Plane className="h-4 w-4" />
                    Book This Class
                  </button>
                </BookingDialog>
                <button className="rounded-full border border-border px-8 py-3.5 font-display text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary">
                  Compare Classes
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 rounded-xl border border-border/50 bg-card p-4">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">Premium Service</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">Free Changes</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <Plane className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">Priority Boarding</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-secondary/30 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-8 font-display text-2xl font-bold">Specifications</h2>
                <div className="space-y-0 divide-y divide-border/50">
                  {property.details.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-4">
                      <span className="font-body text-base text-muted-foreground">{spec.label}</span>
                      <span className="font-display text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="mb-8 font-display text-2xl font-bold">Highlights</h2>
                <ul className="space-y-4">
                  {property.highlights.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-body text-lg leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="mb-10 font-display text-2xl font-bold">Other Cabin Classes</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProperties.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/properties/${p.slug}`} className="group block">
                    <div className="mb-4 overflow-hidden rounded-lg bg-secondary">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="mb-1 font-body text-sm uppercase tracking-widest text-muted-foreground">
                      {p.category}
                    </p>
                    <h3 className="mb-1 font-display text-base font-semibold">{p.name}</h3>
                    <p className="font-body text-sm text-primary">{p.priceFrom}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;

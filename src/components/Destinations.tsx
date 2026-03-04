import { motion } from "framer-motion";
import { MapPin, Phone, Star, Calendar } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const destinations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    property: "AnyPremium Dubai — Palm Jumeirah",
    phone: "+971 4 555 0100",
    stars: "Six-Star",
  },
  {
    city: "Paris",
    country: "France",
    property: "AnyPremium Paris — Place Vendôme",
    phone: "+33 1 55 50 01 00",
    stars: "Six-Star",
  },
  {
    city: "New York",
    country: "USA",
    property: "AnyPremium New York — Central Park",
    phone: "+1 (212) 555-0147",
    stars: "Six-Star",
  },
  {
    city: "Tokyo",
    country: "Japan",
    property: "AnyPremium Tokyo — Ginza",
    phone: "+81 3 5550 1234",
    stars: "Six-Star",
  },
  {
    city: "Sydney",
    country: "Australia",
    property: "AnyPremium Sydney — Harbour",
    phone: "+61 2 5550 1234",
    stars: "Six-Star",
  },
  {
    city: "Maldives",
    country: "Indian Ocean",
    property: "AnyPremium Maldives — Private Island",
    phone: "+960 555 0100",
    stars: "Six-Star",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Worldwide
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold italic tracking-tight md:text-5xl">
            Our Destinations
          </h2>
          <p className="mx-auto max-w-md font-body text-lg text-muted-foreground">
            Six iconic properties in the world's most extraordinary locations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:glow-gold"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{dest.city}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-body text-xs text-muted-foreground">
                  <Star className="h-3 w-3 text-primary" />
                  {dest.stars}
                </span>
              </div>

              <div className="space-y-3 font-body text-base text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{dest.property}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{dest.phone}</span>
                </div>
              </div>

              <BookingDialog defaultDestination={dest.property}>
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/50 py-2.5 font-display text-xs font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Book This Property
                </button>
              </BookingDialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

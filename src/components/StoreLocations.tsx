import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const stores = [
  {
    city: "New York",
    country: "USA",
    address: "745 Fifth Avenue, Manhattan",
    hours: "10:00 AM – 9:00 PM",
    phone: "+1 (212) 555-0147",
  },
  {
    city: "Los Angeles",
    country: "USA",
    address: "8500 Beverly Blvd, Suite 120",
    hours: "10:00 AM – 8:00 PM",
    phone: "+1 (310) 555-0198",
  },
  {
    city: "Chicago",
    country: "USA",
    address: "900 N Michigan Ave",
    hours: "10:00 AM – 8:00 PM",
    phone: "+1 (312) 555-0234",
  },
  {
    city: "Sydney",
    country: "Australia",
    address: "455 George Street, CBD",
    hours: "9:30 AM – 7:00 PM",
    phone: "+61 2 5550 1234",
  },
  {
    city: "Melbourne",
    country: "Australia",
    address: "270 Collins Street",
    hours: "9:30 AM – 7:00 PM",
    phone: "+61 3 5550 5678",
  },
  {
    city: "San Francisco",
    country: "USA",
    address: "300 Post Street, Union Square",
    hours: "10:00 AM – 8:00 PM",
    phone: "+1 (415) 555-0321",
  },
];

const StoreLocations = () => {
  return (
    <section id="stores" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Visit Us
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Our Stores
          </h2>
          <p className="mx-auto max-w-md font-body text-muted-foreground">
            Experience our products in person at premium retail locations across the USA and Australia.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, i) => (
            <motion.div
              key={store.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:glow-gold"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{store.city}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 font-body text-xs text-muted-foreground">
                  {store.country}
                </span>
              </div>

              <div className="space-y-3 font-body text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{store.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;

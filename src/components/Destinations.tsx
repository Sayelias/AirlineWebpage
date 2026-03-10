import { motion } from "framer-motion";
import { MapPin, Clock, Plane, Calendar } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const routes = [
  {
    from: "New York (JFK)",
    to: "London (LHR)",
    duration: "7h 10m",
    frequency: "5 daily",
    fromPrice: "$420",
  },
  {
    from: "Los Angeles (LAX)",
    to: "Tokyo (NRT)",
    duration: "11h 30m",
    frequency: "3 daily",
    fromPrice: "$680",
  },
  {
    from: "Chicago (ORD)",
    to: "Paris (CDG)",
    duration: "8h 20m",
    frequency: "2 daily",
    fromPrice: "$510",
  },
  {
    from: "San Francisco (SFO)",
    to: "Sydney (SYD)",
    duration: "15h 40m",
    frequency: "Daily",
    fromPrice: "$890",
  },
  {
    from: "Miami (MIA)",
    to: "Dubai (DXB)",
    duration: "14h 05m",
    frequency: "Daily",
    fromPrice: "$760",
  },
  {
    from: "Seattle (SEA)",
    to: "Singapore (SIN)",
    duration: "16h 20m",
    frequency: "4 weekly",
    fromPrice: "$720",
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
            Global Network
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Popular Routes
          </h2>
          <p className="mx-auto max-w-md font-body text-lg text-muted-foreground">
            Connecting you nonstop to the world's most in-demand destinations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:glow-sky"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-base font-semibold">{route.from}</span>
                <Plane className="h-4 w-4 text-primary" />
                <span className="font-display text-base font-semibold">{route.to}</span>
              </div>

              <div className="space-y-2 font-body text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  <span>{route.duration} nonstop</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span>{route.frequency}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-primary">
                  {route.fromPrice}
                  <span className="ml-1 text-xs font-normal text-muted-foreground">from</span>
                </span>
              </div>

              <BookingDialog defaultRoute={`${route.from} → ${route.to}`}>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/50 py-2.5 font-display text-xs font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Book This Route
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

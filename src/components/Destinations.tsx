import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Globe, Search } from "lucide-react";
import { routes, regions } from "@/data/routes";

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = routes.filter((r) => {
    const matchesRegion = activeRegion === "All" || r.region === activeRegion;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      r.city.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q) ||
      r.code.toLowerCase().includes(q) ||
      r.airport.toLowerCase().includes(q);
    return matchesRegion && matchesSearch;
  });

  const grouped = filtered.reduce<Record<string, typeof routes>>((acc, r) => {
    (acc[r.region] ??= []).push(r);
    return acc;
  }, {});

  return (
    <section id="destinations" className="border-t border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Global Network
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            {routes.length} International Destinations
          </h2>
          <p className="mx-auto max-w-lg font-body text-lg text-muted-foreground">
            Based on Korean Air's route network — connecting Seoul Incheon to cities across{" "}
            {regions.length} regions worldwide.
          </p>
        </motion.div>

        {/* Search + Region filters */}
        <div className="mb-10 space-y-4">
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search city, country, or airport code…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-border/50 bg-card py-3 pl-11 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["All", ...regions].map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all ${
                  activeRegion === region
                    ? "bg-gradient-sky text-primary-foreground shadow-md shadow-primary/20"
                    : "border border-border/50 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-center font-body text-sm text-muted-foreground">
          Showing {filtered.length} destination{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grouped routes */}
        {Object.entries(grouped).map(([region, destinations]) => (
          <motion.div
            key={region}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <h3 className="font-display text-lg font-bold">{region}</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-display text-xs font-semibold text-primary">
                {destinations.length}
              </span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {destinations.map((dest) => (
                <div
                  key={`${dest.code}-${dest.city}`}
                  className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card px-4 py-3 transition-all hover:border-primary/30 hover:glow-sky"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 font-display text-xs font-bold text-primary">
                    {dest.code}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-semibold text-foreground">
                      {dest.city}
                    </p>
                    <p className="flex items-center gap-1 truncate font-body text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {dest.country}
                    </p>
                  </div>
                  <Plane className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="py-16 text-center font-body text-muted-foreground">
            No destinations found. Try a different search.
          </p>
        )}
      </div>
    </section>
  );
};

export default Destinations;

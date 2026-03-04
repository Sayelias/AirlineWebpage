import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown, Star, Diamond, Gift, Sparkles, Shield, Plane, Gem, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    requirement: "Upon enrollment",
    nightsRequired: "0+ nights",
    color: "from-zinc-400 to-zinc-300",
    textColor: "text-zinc-300",
    borderColor: "border-zinc-700",
    benefits: [
      "Complimentary welcome amenity",
      "Earn 10 points per $1 spent",
      "Complimentary WiFi & daily newspaper",
      "Late check-out upon availability",
      "Members-only rates",
    ],
  },
  {
    name: "Gold",
    icon: Crown,
    requirement: "15+ nights per year",
    nightsRequired: "15+ nights",
    color: "from-amber-500 to-yellow-400",
    textColor: "text-primary",
    borderColor: "border-primary/40",
    featured: true,
    benefits: [
      "Guaranteed suite upgrade",
      "Earn 15 points per $1 spent",
      "Complimentary breakfast for two",
      "Early check-in & late check-out guaranteed",
      "Complimentary pressing service",
      "Access to Executive Lounge",
      "Dedicated reservations line",
    ],
  },
  {
    name: "Platinum",
    icon: Diamond,
    requirement: "40+ nights per year",
    nightsRequired: "40+ nights",
    color: "from-sky-300 to-indigo-300",
    textColor: "text-sky-300",
    borderColor: "border-sky-500/40",
    benefits: [
      "Two-category suite upgrade guaranteed",
      "Earn 20 points per $1 spent",
      "Annual complimentary weekend stay",
      "Priority restaurant reservations",
      "Complimentary airport transfers worldwide",
      "Personal concierge at every property",
      "Invitation to annual Platinum Gala",
      "Spa credit — $500 per stay",
    ],
  },
];

const rewards = [
  { points: "25,000", reward: "Complimentary Night — Standard Suite", icon: Gift },
  { points: "50,000", reward: "Suite Upgrade Certificate", icon: Sparkles },
  { points: "100,000", reward: "Spa Retreat Weekend for Two", icon: Gem },
  { points: "200,000", reward: "Presidential Suite — 3-Night Experience", icon: Diamond },
];

const howItWorks = [
  {
    step: "01",
    title: "Join the Circle",
    description: "Enrollment is complimentary. Create your AnyPremium Circle account.",
  },
  {
    step: "02",
    title: "Stay & Experience",
    description: "Earn points on every night, meal, spa visit, and experience across all properties.",
  },
  {
    step: "03",
    title: "Redeem Rewards",
    description: "Exchange points for complimentary nights, upgrades, and bespoke experiences.",
  },
  {
    step: "04",
    title: "Ascend Tiers",
    description: "Your annual nights stayed elevate your tier and unlock richer privileges.",
  },
];

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <Crown className="h-4 w-4 text-primary" />
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Exclusive Membership
                </span>
              </div>
              <h1 className="mb-6 font-display text-4xl font-bold italic leading-tight tracking-tight md:text-6xl">
                The{" "}
                <span className="text-gradient-gold">AnyPremium</span>{" "}
                Circle
              </h1>
              <p className="mb-10 font-body text-xl leading-relaxed text-muted-foreground md:text-2xl">
                An invitation to a world of unmatched hospitality, curated experiences,
                and privileges reserved for our most valued guests.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/membership/dashboard"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Join the Circle
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#tiers"
                  className="rounded-full border border-border px-8 py-3.5 font-display text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
                >
                  Explore Tiers
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border/50 bg-secondary/30 py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Simple & Rewarding
              </p>
              <h2 className="font-display text-3xl font-bold italic tracking-tight md:text-5xl">
                How It Works
              </h2>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <span className="mb-4 inline-block font-display text-4xl font-bold text-gradient-gold">
                    {item.step}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="font-body text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Membership Tiers
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold italic tracking-tight md:text-5xl">
                Your Journey Awaits
              </h2>
              <p className="mx-auto max-w-md font-body text-lg text-muted-foreground">
                Each tier is defined by annual nights stayed. The more you stay, the more extraordinary the privileges.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`relative rounded-2xl border bg-card p-8 transition-all hover:glow-gold ${
                    tier.featured
                      ? "border-primary/50 ring-1 ring-primary/20"
                      : tier.borderColor
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 font-display text-xs font-bold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${tier.color} p-3`}>
                      <tier.icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className={`font-display text-2xl font-bold ${tier.textColor}`}>
                      {tier.name}
                    </h3>
                    <p className="mt-1 font-body text-base text-muted-foreground">
                      {tier.requirement}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.textColor}`} />
                        <span className="font-body text-base text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards Catalog */}
        <section className="border-t border-border/50 bg-secondary/30 py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Redeem Your Points
              </p>
              <h2 className="font-display text-3xl font-bold italic tracking-tight md:text-5xl">
                Rewards
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rewards.map((r, i) => (
                <motion.div
                  key={r.points}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30"
                >
                  <r.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <p className="mb-2 font-display text-2xl font-bold text-gradient-gold">
                    {r.points}
                  </p>
                  <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                    Points
                  </p>
                  <p className="mt-3 font-body text-base text-foreground">{r.reward}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks Bar */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-6 rounded-2xl border border-primary/20 bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Plane, label: "Airport Transfers", desc: "Complimentary luxury transfers" },
                { icon: Shield, label: "Best Rate Guarantee", desc: "Always the lowest member rate" },
                { icon: Gift, label: "Welcome Amenities", desc: "Curated arrival gifts" },
                { icon: Crown, label: "Exclusive Events", desc: "Galas, tastings & cultural experiences" },
              ].map((perk, i) => (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <perk.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold">{perk.label}</h4>
                    <p className="font-body text-sm text-muted-foreground">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-secondary/30 py-16 md:py-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-display text-2xl font-bold italic md:text-3xl">
                Begin your journey with us
              </h2>
              <p className="mb-8 font-body text-lg text-muted-foreground">
                Join an exclusive circle of travelers who expect nothing less than extraordinary.
              </p>
              <Link
                to="/membership/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-10 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <Crown className="h-4 w-4" />
                Join the AnyPremium Circle
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;

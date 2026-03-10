import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown, Star, Diamond, Gift, Sparkles, Shield, Plane, Gem, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Blue",
    icon: Star,
    requirement: "Upon enrollment",
    milesRequired: "0+ miles",
    color: "from-blue-400 to-blue-300",
    textColor: "text-blue-300",
    borderColor: "border-blue-700",
    benefits: [
      "Earn 5 miles per $1 spent on flights",
      "Online check-in & seat selection",
      "Complimentary snacks on all flights",
      "Access to mobile boarding passes",
      "Member-only fare alerts",
    ],
  },
  {
    name: "Silver",
    icon: Crown,
    requirement: "25,000+ miles per year",
    milesRequired: "25,000+ miles",
    color: "from-slate-400 to-zinc-300",
    textColor: "text-zinc-300",
    borderColor: "border-zinc-600",
    featured: true,
    benefits: [
      "Earn 8 miles per $1 spent on flights",
      "1 free checked bag on all flights",
      "Priority check-in & boarding",
      "Preferred seating at booking",
      "Complimentary same-day standby",
      "Lounge access passes (4 per year)",
      "Dedicated customer service line",
    ],
  },
  {
    name: "Gold",
    icon: Diamond,
    requirement: "75,000+ miles per year",
    milesRequired: "75,000+ miles",
    color: "from-amber-400 to-yellow-300",
    textColor: "text-amber-300",
    borderColor: "border-amber-500/40",
    benefits: [
      "Earn 12 miles per $1 spent on flights",
      "Complimentary cabin upgrades (when available)",
      "Unlimited lounge access worldwide",
      "3 free checked bags on all flights",
      "Priority baggage handling",
      "Guaranteed economy seat on sold-out flights",
      "Companion upgrade certificates (2 per year)",
      "Global partner airline lounge access",
    ],
  },
];

const rewards = [
  { miles: "10,000", reward: "Domestic Economy Round Trip", icon: Gift },
  { miles: "35,000", reward: "International Economy Round Trip", icon: Sparkles },
  { miles: "75,000", reward: "Business Class Upgrade", icon: Gem },
  { miles: "150,000", reward: "First Class Round Trip", icon: Diamond },
];

const howItWorks = [
  {
    step: "01",
    title: "Sign Up Free",
    description: "Join SkyRewards in minutes. Start earning miles from your very first flight.",
  },
  {
    step: "02",
    title: "Fly & Earn",
    description: "Earn miles on every flight, plus with partner airlines, hotels, and credit cards.",
  },
  {
    step: "03",
    title: "Redeem Rewards",
    description: "Use miles for free flights, upgrades, lounge access, and partner perks.",
  },
  {
    step: "04",
    title: "Rise Through Tiers",
    description: "Fly more to unlock elite status with increasingly extraordinary benefits.",
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
                <Plane className="h-4 w-4 text-primary" />
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Frequent Flyer Program
                </span>
              </div>
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                <span className="text-gradient-sky">SkyRewards</span>{" "}
                by AnyCompany
              </h1>
              <p className="mb-10 font-body text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Every mile you fly brings you closer to your next reward.
                Join millions of members earning free flights, upgrades, and exclusive perks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/membership/dashboard"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-sky px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Join SkyRewards
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
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
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
                  <span className="mb-4 inline-block font-display text-4xl font-bold text-gradient-sky">
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
                Elite Status Tiers
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Fly More, Earn More
              </h2>
              <p className="mx-auto max-w-md font-body text-lg text-muted-foreground">
                Your annual miles flown determine your tier. The higher you fly, the more you're rewarded.
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
                  className={`relative rounded-2xl border bg-card p-8 transition-all hover:glow-sky ${
                    tier.featured
                      ? "border-primary/50 ring-1 ring-primary/20"
                      : tier.borderColor
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-sky px-4 py-1 font-display text-xs font-bold text-primary-foreground">
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
                Use Your Miles
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Rewards
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rewards.map((r, i) => (
                <motion.div
                  key={r.miles}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30"
                >
                  <r.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <p className="mb-2 font-display text-2xl font-bold text-gradient-sky">
                    {r.miles}
                  </p>
                  <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                    Miles
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
                { icon: Plane, label: "Global Network", desc: "200+ destinations worldwide" },
                { icon: Shield, label: "Flexible Booking", desc: "Free changes up to 24hrs before" },
                { icon: Gift, label: "Partner Earning", desc: "Earn miles with 50+ partners" },
                { icon: Crown, label: "Exclusive Access", desc: "Lounges, upgrades & priority" },
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
              <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">
                Ready to start earning?
              </h2>
              <p className="mb-8 font-body text-lg text-muted-foreground">
                Join SkyRewards today — it's free and takes less than a minute.
              </p>
              <Link
                to="/membership/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-sky px-10 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <Plane className="h-4 w-4" />
                Join SkyRewards Free
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

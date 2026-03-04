import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown, Star, Diamond, Gift, Zap, Shield, Truck, Gem, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    pointsRequired: "0",
    annualSpend: "Up to $9,999",
    color: "from-zinc-400 to-zinc-300",
    textColor: "text-zinc-300",
    borderColor: "border-zinc-700",
    benefits: [
      "Earn 1 point per $1 spent",
      "Birthday reward — 500 bonus points",
      "Early access to seasonal sales",
      "Free standard shipping on all orders",
      "Members-only newsletter",
    ],
  },
  {
    name: "Gold",
    icon: Crown,
    pointsRequired: "10,000",
    annualSpend: "$10,000 – $24,999",
    color: "from-amber-500 to-yellow-400",
    textColor: "text-primary",
    borderColor: "border-primary/40",
    featured: true,
    benefits: [
      "Earn 2x points per $1 spent",
      "Birthday reward — 1,500 bonus points",
      "Priority access to new product launches",
      "Free expedited shipping worldwide",
      "Complimentary gift wrapping",
      "Exclusive Gold member events & previews",
      "Dedicated support line",
    ],
  },
  {
    name: "Platinum",
    icon: Diamond,
    pointsRequired: "25,000",
    annualSpend: "$25,000+",
    color: "from-sky-300 to-indigo-300",
    textColor: "text-sky-300",
    borderColor: "border-sky-500/40",
    benefits: [
      "Earn 3x points per $1 spent",
      "Birthday reward — 5,000 bonus points",
      "First access to limited-edition products",
      "Complimentary next-day delivery globally",
      "Annual $500 store credit",
      "Private shopping appointments",
      "Personal concierge & product advisor",
      "Invitation to annual Platinum gala",
    ],
  },
];

const rewards = [
  { points: "2,500", reward: "10% off any single item", icon: Gift },
  { points: "5,000", reward: "$100 store credit", icon: Zap },
  { points: "10,000", reward: "Exclusive limited-edition accessory", icon: Gem },
  { points: "20,000", reward: "Premium product of your choice (up to $1,500)", icon: Diamond },
];

const howItWorks = [
  {
    step: "01",
    title: "Join for Free",
    description: "Create your AnyCompany Premium account — membership is complimentary.",
  },
  {
    step: "02",
    title: "Shop & Earn",
    description: "Earn points on every purchase, in-store and online. Higher tiers earn faster.",
  },
  {
    step: "03",
    title: "Unlock Rewards",
    description: "Redeem points for exclusive discounts, products, and once-in-a-lifetime experiences.",
  },
  {
    step: "04",
    title: "Rise Through Tiers",
    description: "Your annual spend automatically elevates your tier and unlocks richer benefits.",
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
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                The{" "}
                <span className="text-gradient-gold">AnyCompany</span>{" "}
                Rewards Club
              </h1>
              <p className="mb-10 font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
                An invitation to a world of elevated rewards, exclusive access, and
                personalised luxury. Every purchase brings you closer to extraordinary.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/membership/dashboard"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Join Now — It's Free
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
                  <span className="mb-4 inline-block font-display text-4xl font-bold text-gradient-gold">
                    {item.step}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
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
              <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Choose Your Level
              </h2>
              <p className="mx-auto max-w-md font-body text-muted-foreground">
                Your tier is determined by annual spend. The higher you rise, the more extraordinary the privileges.
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
                    <p className="mt-1 font-body text-sm text-muted-foreground">
                      Annual spend: {tier.annualSpend}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.textColor}`} />
                        <span className="font-body text-sm text-muted-foreground">{benefit}</span>
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
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Rewards Catalog
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
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                    Points
                  </p>
                  <p className="mt-3 font-body text-sm text-foreground">{r.reward}</p>
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
                { icon: Truck, label: "Free Shipping", desc: "On every order, every tier" },
                { icon: Shield, label: "Extended Warranty", desc: "Up to 3 years for members" },
                { icon: Gift, label: "Birthday Rewards", desc: "Bonus points on your day" },
                { icon: Crown, label: "VIP Events", desc: "Exclusive launches & previews" },
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
                    <p className="font-body text-xs text-muted-foreground">{perk.desc}</p>
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
                Ready to elevate your experience?
              </h2>
              <p className="mb-8 font-body text-muted-foreground">
                Join thousands of members enjoying exclusive rewards.
              </p>
              <Link
                to="/membership/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-10 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <Crown className="h-4 w-4" />
                Become a Member
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

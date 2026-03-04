import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Crown, Star, Gift, ArrowRight, Calendar,
  TrendingUp, Clock, ChevronRight, Gem
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockMember = {
  name: "Alexandra",
  tier: "Gold",
  points: 87_500,
  nextTier: "Platinum",
  nextTierNights: 40,
  currentNights: 28,
  totalNights: 28,
  memberSince: "January 2024",
};

const recentActivity = [
  { date: "Feb 28, 2026", action: "Stay — AnyPremium Dubai (5 nights)", points: "+42,500", type: "earn" },
  { date: "Feb 14, 2026", action: "Spa — Wellness Sanctuary Treatment", points: "+4,500", type: "earn" },
  { date: "Jan 30, 2026", action: "Redeemed — Suite Upgrade Certificate", points: "-50,000", type: "redeem" },
  { date: "Jan 15, 2026", action: "Dining — Lumière Degustation for Two", points: "+8,500", type: "earn" },
  { date: "Dec 22, 2025", action: "Stay — AnyPremium Maldives (7 nights)", points: "+63,000", type: "earn" },
  { date: "Dec 10, 2025", action: "Complimentary Night Redeemed", points: "-25,000", type: "redeem" },
];

const availableRewards = [
  { title: "Complimentary Night", points: 25_000, icon: Gift },
  { title: "Suite Upgrade Certificate", points: 50_000, icon: Calendar },
  { title: "Spa Retreat Weekend", points: 100_000, icon: Gem },
];

const MemberDashboard = () => {
  const progress = (mockMember.currentNights / mockMember.nextTierNights) * 100;
  const nightsToNext = mockMember.nextTierNights - mockMember.currentNights;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="border-b border-border/50 bg-secondary/20 py-10 md:py-14">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 p-2">
                    <Crown className="h-5 w-5 text-background" />
                  </div>
                  <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                    {mockMember.tier} Member
                  </span>
                </div>
                <h1 className="font-display text-3xl font-bold italic tracking-tight md:text-4xl">
                  Welcome back, {mockMember.name}
                </h1>
                <p className="mt-1 font-body text-base text-muted-foreground">
                  Member since {mockMember.memberSince}
                </p>
              </div>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 font-display text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
              >
                View Membership Benefits
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-primary/30 bg-card p-6 lg:col-span-2"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-display text-lg font-semibold">Points Balance</h2>
                  <Star className="h-5 w-5 text-primary" />
                </div>

                <p className="mb-1 font-display text-5xl font-bold text-gradient-gold md:text-6xl">
                  {mockMember.points.toLocaleString()}
                </p>
                <p className="mb-8 font-body text-base text-muted-foreground">
                  Available points
                </p>

                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-sm font-medium text-primary">
                    {mockMember.tier} — {mockMember.currentNights} nights
                  </span>
                  <span className="font-display text-sm font-medium text-muted-foreground">
                    {mockMember.nextTier} — {mockMember.nextTierNights} nights
                  </span>
                </div>
                <div className="mb-3 h-2 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-gold"
                  />
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {nightsToNext} more nights this year to reach {mockMember.nextTier}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
                  <TrendingUp className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                    Nights This Year
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold">{mockMember.totalNights}</p>
                </div>
                <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
                  <Clock className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                    Points Multiplier
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-gradient-gold">1.5x</p>
                  <p className="font-body text-sm text-muted-foreground">Gold tier bonus</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-secondary/20 py-10 md:py-14">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold italic">Available Rewards</h2>
              <Link
                to="/membership#rewards"
                className="inline-flex items-center gap-1 font-body text-base text-muted-foreground hover:text-primary"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {availableRewards.map((reward, i) => {
                const canAfford = mockMember.points >= reward.points;
                return (
                  <motion.div
                    key={reward.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col justify-between rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
                  >
                    <div>
                      <reward.icon className="mb-3 h-6 w-6 text-primary" />
                      <h3 className="mb-1 font-display text-base font-semibold">{reward.title}</h3>
                      <p className="font-display text-sm text-gradient-gold">
                        {reward.points.toLocaleString()} points
                      </p>
                    </div>
                    <button
                      className={`mt-4 w-full rounded-full py-2.5 font-display text-sm font-semibold transition-all ${
                        canAfford
                          ? "bg-gradient-gold text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                          : "cursor-not-allowed border border-border bg-secondary text-muted-foreground"
                      }`}
                      disabled={!canAfford}
                    >
                      {canAfford ? "Redeem" : "Not Enough Points"}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <h2 className="mb-8 font-display text-xl font-bold italic">Recent Activity</h2>
            <div className="overflow-hidden rounded-xl border border-border/50">
              {recentActivity.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between border-b border-border/50 bg-card px-6 py-4 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        item.type === "earn" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    />
                    <div>
                      <p className="font-body text-base">{item.action}</p>
                      <p className="font-body text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <span
                    className={`font-display text-sm font-semibold ${
                      item.type === "earn" ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {item.points}
                  </span>
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

export default MemberDashboard;

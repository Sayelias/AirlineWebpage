import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    title: "Booking & Check-in",
    questions: [
      {
        q: "How do I book a flight?",
        a: "You can book flights through our website, mobile app, or by calling our reservations team. We accept all major credit cards and offer flexible payment options including buy-now-pay-later.",
      },
      {
        q: "When can I check in online?",
        a: "Online check-in opens 24 hours before departure and closes 1 hour before. You can check in via our website or mobile app and receive your mobile boarding pass directly.",
      },
      {
        q: "What is your cancellation policy?",
        a: "All tickets can be changed free of charge up to 24 hours before departure. Refund policies vary by fare class — Flex fares are fully refundable, while Saver fares may incur a change fee.",
      },
      {
        q: "Can I select my seat in advance?",
        a: "Yes. Seat selection is complimentary for Business and First Class passengers. Economy and Premium Economy passengers can select seats for a small fee, or free of charge for SkyRewards Silver and Gold members.",
      },
    ],
  },
  {
    title: "Baggage & Travel",
    questions: [
      {
        q: "What is your baggage allowance?",
        a: "Economy: 1 × 23kg checked bag + 1 carry-on. Premium Economy: 2 × 23kg. Business: 2 × 32kg. First Class: 3 × 32kg. All classes include one carry-on bag and one personal item.",
      },
      {
        q: "Can I bring special items?",
        a: "Musical instruments, sports equipment, and other oversized items can be checked or brought on board (if they fit in an overhead bin). Additional fees may apply. Contact us at least 48 hours before departure.",
      },
      {
        q: "What about traveling with children?",
        a: "Children under 2 may travel on a parent's lap at a reduced fare. Unaccompanied minors (ages 5-14) can fly with our dedicated care service. Family pre-boarding is available on all flights.",
      },
    ],
  },
  {
    title: "In-Flight Experience",
    questions: [
      {
        q: "Do you offer in-flight Wi-Fi?",
        a: "Yes, Wi-Fi is available on all long-haul aircraft and most domestic flights. It's complimentary for Business and First Class, and for SkyRewards Gold members. Packages are available for purchase in Economy.",
      },
      {
        q: "What meals are served on board?",
        a: "Complimentary meals are served on all flights over 3 hours. Business and First Class enjoy multi-course dining with wine pairings. Special dietary meals (vegetarian, kosher, halal, gluten-free) can be requested at booking.",
      },
      {
        q: "What entertainment is available?",
        a: "Every seat has a personal seatback screen with over 1,000 movies, TV shows, music albums, podcasts, and games. Content is refreshed monthly. Noise-cancelling headphones are provided in Business and First Class.",
      },
    ],
  },
  {
    title: "SkyRewards & Loyalty",
    questions: [
      {
        q: "How do I join SkyRewards?",
        a: "SkyRewards is free to join. Simply create an account on our website or app. You'll start earning miles from your very first flight, and miles never expire as long as you fly with us once every 18 months.",
      },
      {
        q: "How do I earn and redeem miles?",
        a: "Earn miles on every flight based on distance and cabin class. You can also earn with 50+ partner airlines, hotels, and credit cards. Redeem for free flights, upgrades, lounge passes, and more.",
      },
      {
        q: "What are the SkyRewards tiers?",
        a: "We offer Blue (entry), Silver (25,000+ miles/year), and Gold (75,000+ miles/year) tiers. Silver includes priority boarding and free checked bags. Gold adds complimentary upgrades and unlimited lounge access.",
      },
    ],
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-base font-medium pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-body text-lg leading-relaxed text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
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

        <section className="container pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Help Center
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Everything you need to know about flying with AnyCompany Airlines.
            </p>
          </motion.div>
        </section>

        <section className="container pb-24 md:pb-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {faqCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h2 className="mb-6 font-display text-xl font-bold text-gradient-sky">
                  {category.title}
                </h2>
                <div>
                  {category.questions.map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/50 bg-secondary/30 py-16 md:py-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-display text-2xl font-bold">Still have questions?</h2>
              <p className="mb-6 font-body text-lg text-muted-foreground">
                Our support team is available 24/7.
              </p>
              <a
                href="mailto:support@anycompanyairlines.com"
                className="inline-flex rounded-full bg-gradient-sky px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

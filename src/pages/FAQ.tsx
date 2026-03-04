import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    title: "Reservations & Arrivals",
    questions: [
      {
        q: "How do I make a reservation?",
        a: "Reservations can be made through our website, by contacting your nearest AnyPremium property directly, or through your personal concierge. For our Presidential Suite, we recommend booking at least 60 days in advance.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Standard suites may be cancelled up to 72 hours prior to arrival. Premium suites and experiences require 14 days' notice. Platinum members enjoy flexible cancellation on all bookings.",
      },
      {
        q: "Do you offer airport transfers?",
        a: "All suite reservations include complimentary luxury airport transfers via Rolls-Royce or Mercedes-Maybach. Helicopter transfers are available at select properties and included with our Penthouse and Presidential suites.",
      },
      {
        q: "What is your check-in and check-out time?",
        a: "Check-in begins at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are complimentary for Gold and Platinum members, subject to availability.",
      },
    ],
  },
  {
    title: "Suites & Amenities",
    questions: [
      {
        q: "What amenities are included in every suite?",
        a: "Every suite includes Hermès bath amenities, Frette linens, Nespresso machines, complimentary minibar restocked daily, high-speed WiFi, and 24-hour in-room dining. Butler service is available in all premium suites.",
      },
      {
        q: "Can I request specific room configurations?",
        a: "Absolutely. Our guest relations team will accommodate special requests including pillow menus, mattress preferences, allergen-free rooms, floral arrangements, and pre-arrival shopping for personal items.",
      },
      {
        q: "Do you accommodate guests with accessibility needs?",
        a: "Yes. All properties feature fully accessible suites with roll-in showers, lowered fixtures, and assistive technology. Please inform us at booking so we can prepare accordingly.",
      },
    ],
  },
  {
    title: "Dining & Experiences",
    questions: [
      {
        q: "How do I reserve at your fine dining restaurants?",
        a: "Reservations at Lumière and our other signature restaurants can be made through the concierge, our website, or your butler. Hotel guests receive priority, and Platinum members enjoy guaranteed seating.",
      },
      {
        q: "Can you accommodate dietary requirements?",
        a: "Our culinary team expertly caters to all dietary needs including vegan, kosher, halal, gluten-free, and allergen-specific menus. Please inform us at least 24 hours in advance for degustation menus.",
      },
      {
        q: "What spa treatments do you offer?",
        a: "Our Wellness Sanctuary offers over 50 treatments ranging from traditional Thai massage to advanced cryotherapy. All treatments use La Prairie and Sisley products. Bespoke wellness programs are designed by our resident naturopath.",
      },
    ],
  },
  {
    title: "Membership & Loyalty",
    questions: [
      {
        q: "How do I join the AnyPremium Circle?",
        a: "The AnyPremium Circle is complimentary to join. Simply create an account on our website or ask any member of staff during your stay. You begin earning points from your very first booking.",
      },
      {
        q: "How do I earn and redeem points?",
        a: "Earn points on room nights, dining, spa treatments, and experiences. Points can be redeemed for complimentary nights, suite upgrades, spa credits, and exclusive experiences. Higher tiers earn at accelerated rates.",
      },
      {
        q: "What are the membership tiers?",
        a: "We offer Silver, Gold, and Platinum tiers based on annual nights stayed. Silver begins at enrollment, Gold at 15+ nights, and Platinum at 40+ nights per year. Each tier unlocks progressively more extraordinary privileges.",
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
              Guest Services
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold italic tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Everything you need to know about your stay with us.
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
                <h2 className="mb-6 font-display text-xl font-bold text-gradient-gold">
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
              <h2 className="mb-3 font-display text-2xl font-bold italic">Still have questions?</h2>
              <p className="mb-6 font-body text-lg text-muted-foreground">
                Our concierge team is available 24 hours a day.
              </p>
              <a
                href="mailto:concierge@anypremium.com"
                className="inline-flex rounded-full bg-gradient-gold px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Contact Concierge
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

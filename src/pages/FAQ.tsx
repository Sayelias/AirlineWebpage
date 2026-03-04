import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    title: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping within the USA takes 3–5 business days. Australian orders arrive within 5–7 business days. Expedited shipping is available at checkout for next-day or 2-day delivery.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! All orders over $100 qualify for free standard shipping across the USA and Australia. Premium members enjoy free expedited shipping on every order.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order ships, you'll receive an email with a tracking number and a link to follow your package in real time.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we ship to all 50 US states and across Australia. We're working on expanding to additional countries — stay tuned for updates.",
      },
    ],
  },
  {
    title: "Returns & Warranty",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy on all products. Items must be in their original packaging and in unused condition. Refunds are processed within 5–7 business days.",
      },
      {
        q: "How do I initiate a return?",
        a: "Log into your account, navigate to your order history, and select 'Return Item.' You'll receive a prepaid shipping label via email. You can also visit any of our retail stores for an in-person return.",
      },
      {
        q: "What warranty do your products come with?",
        a: "All AnyCompany Premium products include a 2-year manufacturer warranty covering defects in materials and workmanship. Extended 3-year warranty plans are available at purchase.",
      },
    ],
  },
  {
    title: "Products & Stores",
    questions: [
      {
        q: "Can I try products before purchasing?",
        a: "Yes! Visit any of our premium retail stores in New York, Los Angeles, Chicago, San Francisco, Sydney, or Melbourne to experience our full product lineup hands-on.",
      },
      {
        q: "Do you offer trade-in programs?",
        a: "We offer trade-in value on select electronics. Bring your qualifying device to any retail location for an instant appraisal and credit toward your next purchase.",
      },
      {
        q: "Are your products covered by price matching?",
        a: "We stand behind our pricing. If you find an identical product at a lower price from an authorized retailer within 14 days of purchase, we'll match it and refund the difference.",
      },
    ],
  },
  {
    title: "Account & Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options through Afterpay and Klarna.",
      },
      {
        q: "Do you have a loyalty program?",
        a: "Yes! AnyCompany Rewards lets you earn points on every purchase. Accumulate points for exclusive discounts, early access to new releases, and complimentary services at our stores.",
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page, enter your email, and we'll send a secure reset link. For additional help, contact our support team at support@anycompany.com.",
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
            <p className="pb-5 font-body leading-relaxed text-muted-foreground">{answer}</p>
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
        {/* Breadcrumb */}
        <div className="container py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <section className="container pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Support
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Everything you need to know about our products, orders, and services.
            </p>
          </motion.div>
        </section>

        {/* FAQ Content */}
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

        {/* Contact CTA */}
        <section className="border-t border-border/50 bg-secondary/30 py-16 md:py-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-display text-2xl font-bold">Still have questions?</h2>
              <p className="mb-6 font-body text-muted-foreground">
                Our support team is ready to help you.
              </p>
              <a
                href="mailto:support@anycompany.com"
                className="inline-flex rounded-full bg-gradient-gold px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
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

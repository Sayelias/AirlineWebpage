import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BookingDialog from "@/components/BookingDialog";

const navLinks = [
  { label: "Properties", href: "/#properties" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Membership", href: "/membership" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="font-display text-lg font-bold tracking-tight md:text-xl">
          <span className="text-gradient-gold">AnyPremium</span>{" "}
          <span className="font-light text-foreground">Hotels</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/membership/dashboard" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Member Portal">
            <User className="h-5 w-5" />
          </Link>
          <BookingDialog>
            <button className="hidden rounded-full bg-gradient-gold px-6 py-2 font-display text-xs font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 md:inline-flex">
              Reserve Now
            </button>
          </BookingDialog>
          <button
            className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background md:hidden"
          >
            <nav className="container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display text-lg text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

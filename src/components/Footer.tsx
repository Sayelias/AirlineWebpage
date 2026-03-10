import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const footerLinks = [
  {
    title: "Fly With Us",
    links: [
      { label: "Book a Flight", href: "#" },
      { label: "Check-in Online", href: "#" },
      { label: "Flight Status", href: "#" },
      { label: "Route Map", href: "/#destinations" },
    ],
  },
  {
    title: "Travel Experience",
    links: [
      { label: "Cabin Classes", href: "/#properties" },
      { label: "In-Flight Dining", href: "/properties/first-class" },
      { label: "Airport Lounges", href: "/properties/business-class" },
      { label: "SkyRewards", href: "/membership" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "/faq" },
      { label: "Baggage Info", href: "#" },
      { label: "Special Assistance", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background py-16 md:py-20">
      <div className="container">
        <div className="mb-12 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <Plane className="h-4 w-4 text-primary" />
              <span className="text-gradient-sky">AnyCompany</span>
            </Link>
            <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
              Connecting the world with exceptional service, comfort, and reliability.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} AnyCompany Airlines. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Properties",
    links: [
      { label: "Dubai", href: "#" },
      { label: "Paris", href: "#" },
      { label: "New York", href: "#" },
      { label: "Tokyo", href: "#" },
      { label: "Sydney", href: "#" },
      { label: "Maldives", href: "#" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { label: "Suites", href: "/#properties" },
      { label: "Dining", href: "/properties/gastronomic-experience" },
      { label: "Spa & Wellness", href: "/properties/wellness-sanctuary" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    title: "Guest Services",
    links: [
      { label: "Concierge", href: "#" },
      { label: "FAQ", href: "/faq" },
      { label: "Accessibility", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
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
            <Link to="/" className="font-display text-lg font-bold">
              <span className="text-gradient-gold">AnyPremium</span>
            </Link>
            <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
              Six-star hospitality, redefined for the world's most discerning travelers.
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
            © {new Date().getFullYear()} AnyPremium Hotels. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "LinkedIn"].map((social) => (
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

import { Link } from "react-router-dom";

const footerLinks: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Headphones", href: "/products/aura-pro-headphones" },
      { label: "Laptops", href: "/products/zenith-ultrabook" },
      { label: "Watches", href: "/products/chronos-smart-watch" },
      { label: "Earbuds", href: "/products/nova-wireless-earbuds" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "/faq" },
      { label: "Warranty", href: "/faq" },
      { label: "Returns", href: "/faq" },
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
              <span className="text-gradient-gold">AnyCompany</span>
            </Link>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              Premium electronics for the modern connoisseur.
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
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} AnyCompany Premium. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground"
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

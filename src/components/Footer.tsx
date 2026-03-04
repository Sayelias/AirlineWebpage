const footerLinks = {
  Products: ["Headphones", "Laptops", "Watches", "Earbuds", "Accessories"],
  Company: ["About Us", "Careers", "Press", "Sustainability"],
  Support: ["Contact", "FAQ", "Warranty", "Returns"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background py-16 md:py-20">
      <div className="container">
        <div className="mb-12 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <a href="/" className="font-display text-lg font-bold">
              <span className="text-gradient-gold">AnyCompany</span>
            </a>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              Premium electronics for the modern connoisseur.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
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

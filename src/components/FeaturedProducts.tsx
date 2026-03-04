import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import productHeadphones from "@/assets/product-headphones.webp";
import productLaptop from "@/assets/product-laptop.webp";
import productWatch from "@/assets/product-watch.webp";
import productEarbuds from "@/assets/product-earbuds.webp";

const products = [
  {
    name: "Aura Pro Headphones",
    category: "Audio",
    price: "$549",
    image: productHeadphones,
  },
  {
    name: "Zenith UltraBook",
    category: "Computing",
    price: "$2,499",
    image: productLaptop,
  },
  {
    name: "Chronos Smart Watch",
    category: "Wearables",
    price: "$899",
    image: productWatch,
  },
  {
    name: "Nova Wireless Earbuds",
    category: "Audio",
    price: "$349",
    image: productEarbuds,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Curated Selection
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Featured Products
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 font-display text-sm text-muted-foreground transition-colors hover:text-primary md:inline-flex"
          >
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="w-full rounded-full bg-gradient-gold py-2.5 font-display text-sm font-semibold text-primary-foreground">
                    Quick View
                  </button>
                </div>
              </div>

              <p className="mb-1 font-body text-xs uppercase tracking-widest text-muted-foreground">
                {product.category}
              </p>
              <h3 className="mb-1 font-display text-base font-semibold">
                {product.name}
              </h3>
              <p className="font-display text-sm text-primary">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

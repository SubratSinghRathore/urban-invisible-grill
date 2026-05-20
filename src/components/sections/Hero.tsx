import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import hero from "../../assets/hero-balcony.jpg";
import { Phone, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { lenisInstance } from "../SmoothScroll";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el && lenisInstance) {
    lenisInstance.scrollTo(el);
  }
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const words = ["Invisible", "Safety.", "Uninterrupted", "Views."];

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-foreground"
      id="home"
    >
      {/* Background */}
      <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
        <img
          src={hero}
          alt="Premium balcony"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/80" />
      </motion.div>

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 text-foreground"
            : "bg-foreground/10 backdrop-blur-lg border-b border-background/10 text-background"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">

          {/* Logo */}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl tracking-tight">
              Urban
            </span>
            <span
              className={`text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-70 ${
                scrolled ? "text-foreground/70" : "text-background/70"
              }`}
            >
              Invisible Grills
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <nav className="flex gap-6 text-sm items-center">

              <button
                onClick={() => scrollTo("home")}
                className="cursor-pointer hover:opacity-70 transition"
              >
                Home
              </button>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
                  Products
                  <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-full mt-4 w-56 bg-background text-foreground shadow-xl border border-border/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                  <button
                    onClick={() => scrollTo("grills")}
                    className="block w-full text-left px-5 py-3 hover:bg-muted transition cursor-pointer"
                  >
                    Invisible Grills
                  </button>

                  <button
                    onClick={() => scrollTo("birdnets")}
                    className="block w-full text-left px-5 py-3 hover:bg-muted transition cursor-pointer"
                  >
                    Safety & Anti-Bird Netting
                  </button>

                  <button
                    onClick={() => scrollTo("sports")}
                    className="block w-full text-left px-5 py-3 hover:bg-muted transition cursor-pointer"
                  >
                    Cricket & Sports Net
                  </button>

                  <button
                    onClick={() => scrollTo("hangers")}
                    className="block w-full text-left px-5 py-3 hover:bg-muted transition cursor-pointer"
                  >
                    Clothes Hangers
                  </button>
                </div>
              </div>

              <button
                onClick={() => scrollTo("about")}
                className="cursor-pointer hover:opacity-70 transition"
              >
                About
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="cursor-pointer hover:opacity-70 transition"
              >
                Contact
              </button>
            </nav>

            {/* Phone */}
            <a
              href="tel:+919902299696"
              className={`flex items-center gap-2 text-sm tracking-wide hover:opacity-80 transition ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              <Phone className="h-4 w-4" />
              +91 99022 99696
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 text-sm"
          >
            <button
              className="text-left cursor-pointer"
              onClick={() => {
                scrollTo("home");
                setMenuOpen(false);
              }}
            >
              Home
            </button>

            {/* MOBILE PRODUCTS */}
            <div className="flex flex-col">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex justify-between items-center cursor-pointer"
              >
                Products
                <ChevronDown size={16} />
              </button>

              {productsOpen && (
                <div className="flex flex-col pl-4 mt-2 gap-2">

                  <button
                    onClick={() => scrollTo("grills")}
                    className="text-left cursor-pointer"
                  >
                    Invisible Grills
                  </button>

                  <button
                    onClick={() => scrollTo("birdnets")}
                    className="text-left cursor-pointer"
                  >
                    Safety & Anti-Bird Netting
                  </button>

                  <button
                    onClick={() => scrollTo("sports")}
                    className="text-left cursor-pointer"
                  >
                    Cricket & Sports Net
                  </button>

                  <button
                    onClick={() => scrollTo("hangers")}
                    className="text-left cursor-pointer"
                  >
                    Clothes Hangers
                  </button>

                </div>
              )}
            </div>

            <button
              className="text-left cursor-pointer"
              onClick={() => {
                scrollTo("about");
                setMenuOpen(false);
              }}
            >
              About
            </button>

            <button
              className="text-left cursor-pointer"
              onClick={() => {
                scrollTo("contact");
                setMenuOpen(false);
              }}
            >
              Contact
            </button>

            <a
              href="tel:+919902299696"
              className="flex items-center gap-2 pt-3"
            >
              <Phone size={16} />
              +91 99022 99696
            </a>
          </motion.div>
        )}
      </motion.header>

      {/* HERO CONTENT */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 text-background"
      >
        <div className="max-w-5xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-xs uppercase tracking-[0.4em] opacity-70 mb-6"
          >
            Bangalore — Est. 2014
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block italic font-light"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-6 bg-background text-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brass hover:text-background transition"
            >
              Get Free Site Inspection
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="tel:+919902299696"
              className="inline-flex items-center gap-3 px-2 py-4 text-sm uppercase tracking-[0.2em] border-b border-background/40 hover:border-background transition"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
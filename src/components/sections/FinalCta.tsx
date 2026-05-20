import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import hero from "../../assets/hero-balcony.jpg";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const words = ["Protect", "your", "balcony", "today."];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", form);

    /*
    ============================
    API CALL EXAMPLE
    ============================

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(err => {
      console.error("Error:", err);
    });

    */

    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-foreground text-background"
    >
      {/* Background */}
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0 opacity-40">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24 md:pb-28 w-full">

        {/* Heading */}
        <span className="text-xs uppercase tracking-[0.4em] text-background/60">
          07 — Get in touch
        </span>

        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl mt-6 leading-[0.95]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-3 align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${
                  i === 2 ? "italic text-brass font-light" : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+919902299696"
            className="group inline-flex items-center justify-between gap-6 bg-background text-foreground px-8 py-5 text-sm uppercase tracking-[0.25em] hover:bg-brass hover:text-background transition-colors duration-500"
          >
            <span className="flex items-center gap-3">
              <Phone className="h-4 w-4" /> Call +91 99022 99696
            </span>
          </a>

          <a
            href="https://wa.me/919902299696"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 text-sm uppercase tracking-[0.25em] border border-background/30 hover:border-background hover:bg-background/5 transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="bg-transparent border border-background/20 px-5 py-4 text-sm outline-none focus:border-brass transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="bg-transparent border border-background/20 px-5 py-4 text-sm outline-none focus:border-brass transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="md:col-span-2 bg-transparent border border-background/20 px-5 py-4 text-sm outline-none focus:border-brass transition resize-none"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-brass text-background py-4 text-sm uppercase tracking-[0.25em] hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-background/15 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-background/50">
          <div>Urban Invisible Grills — Bangalore</div>
          <div>10-Year Warranty · Free Site Inspection</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </div>
    </section>
  );
}
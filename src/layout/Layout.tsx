import type { ReactNode } from "react";
import { SmoothScroll } from "../components/SmoothScroll";

import { Hero } from "../components/sections/Hero";
import { Products } from "../components/sections/Products";
import { WhyUs } from "../components/sections/WhyUs";
import { Gallery } from "../components/sections/Gallery";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";

export default function Layout() {
  return (
    <div>
      {/* MUST be here */}
      <SmoothScroll />

      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Gallery />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
    </div>
  );
}
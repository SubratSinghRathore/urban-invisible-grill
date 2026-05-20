import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import v1 from "../../assets/invisible-grill-1.mp4";
import v2 from "../../assets/invisible-grill-2.mp4";
import v3 from "../../assets/invisible-grill-3.mp4";
import v4 from "../../assets/invisible-grill-4.mp4";
import g4 from "../../assets/gallery-4.jpg";
import { Reveal } from "../Reveal";

function ParallaxImg({ src, alt, range = 80, className }: { src: string; alt: string; range?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
    </div>
  );
}

function ParallaxVideo({
  src,
  range = 80,
  className,
}: {
  src: string;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section className="bg-background py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — Selected work</span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
                See our work, <em className="text-brass">unframed</em>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A few installations from across Bangalore — Whitefield, Indiranagar, HSR, Koramangala.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <ParallaxVideo
            src={v1}
            className="col-span-12 md:col-span-7 aspect-[4/5] md:aspect-[5/6]"
          />
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <ParallaxImg src={g4} alt="Detail of grill bracket" className="aspect-[4/3]" range={50} />
            <ParallaxVideo src={v4} className="aspect-[4/3] flex-1" range={60} />
          </div>
          <ParallaxVideo src={v2} className="col-span-12 md:col-span-5 aspect-[3/4]" range={70} />
          <ParallaxVideo src={v3} className="col-span-12 md:col-span-7 aspect-[5/4]" range={60} />
        </div>
      </div>
    </section>
  );
}
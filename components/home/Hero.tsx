"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ProjectMockup } from "@/components/work/ProjectMockup";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 lg:pt-44 lg:pb-32">
      {/* Ambient background */}
      <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-gold/15 blur-[140px] lg:left-[68%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </motion.div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Independent digital agency · {site.location.city}
          </motion.p>

          <motion.h1
            className="mt-7 font-display text-[2.9rem] leading-[0.98] font-medium tracking-tight text-balance sm:text-6xl lg:text-[5.2rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            Websites crafted to make your business{" "}
            <em className="text-gold-gradient font-normal">unmistakably premium.</em>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
          >
            {site.name} designs and builds custom websites, Shopify stores and brand identities for
            clients around the world from our studio in Toronto — combining refined design with fast, reliable
            engineering.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
          >
            <Button href="/contact">Start your project</Button>
            <Button href="/work" variant="ghost">
              Explore our concepts
            </Button>
          </motion.div>

          <motion.ul
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.18em] text-white/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {["Web development", "Shopify", "WordPress", "UI/UX", "Branding"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1 rotate-45 bg-gold" aria-hidden />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual: fanned concept mockups */}
        <motion.div style={{ y: visualY }} className="relative lg:col-span-6" aria-hidden>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl [perspective:1600px]">
            <div className="absolute inset-[8%] rounded-full border border-gold/15" />
            <div className="absolute inset-[18%] rounded-full border border-gold/10" />

            <div className="absolute top-[2%] left-0 w-[64%] [transform:rotateY(14deg)_rotateZ(-4deg)]">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease }}
              >
                <ProjectMockup variant="corporate" />
              </motion.div>
            </div>
            <div className="absolute right-0 bottom-[4%] w-[60%] [transform:rotateY(-12deg)_rotateZ(3deg)]">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1.2, delay: 0.65, ease }}
              >
                <ProjectMockup variant="luxury" />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease }}
                className="rounded-2xl bg-gradient-to-b from-gold/50 to-gold/0 p-px shadow-[0_40px_120px_-30px_rgba(198,161,91,0.45)]"
              >
                <ProjectMockup variant="automotive" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

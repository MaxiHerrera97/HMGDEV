import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hero1 from "../../assets/Hero1.png";
import hero2 from "../../assets/Hero2.png";
import hero3 from "../../assets/Hero3.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const slides = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="inicio" className="relative overflow-hidden pt-20">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt="Servicios de desarrollo FullStack"
            className="h-[68vh] w-full object-cover object-center md:h-[86vh]"
            variants={{
              enter: { opacity: 0.55, scale: 1.015 },
              center: { opacity: 1, scale: 1 },
              exit: { opacity: 0.55, scale: 0.995 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-zinc-950/20" />

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200/25 bg-zinc-900/45 text-zinc-100 backdrop-blur transition hover:bg-zinc-800/65"
          aria-label="Imagen anterior"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200/25 bg-zinc-900/45 text-zinc-100 backdrop-blur transition hover:bg-zinc-800/65"
          aria-label="Imagen siguiente"
        >
          <FiChevronRight />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition ${
                idx === current ? "w-7 bg-sky-300" : "w-2.5 bg-zinc-300/70"
              }`}
              aria-label={`Ver banner ${idx + 1}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

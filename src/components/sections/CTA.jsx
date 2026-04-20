import Container from "../ui/Container";
import { motion } from "framer-motion";
import { FiMail, FiMessageCircle } from "react-icons/fi";

const CTA = () => {
  return (
    <section id="contacto" className="pb-24 pt-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-sky-200/25 bg-gradient-to-r from-zinc-900 via-zinc-900 to-sky-900/30 p-8 text-center shadow-[0_22px_45px_rgba(0,0,0,0.35)] md:p-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200/80">
            Próximo paso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-zinc-100 md:text-5xl">
            ¿Necesitas desarrollar un sistema o una plataforma web?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Diseñamos y construimos soluciones FullStack para empresas y
            emprendedores. Cuéntanos tu idea y te proponemos un plan realista para
            convertirla en producto.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:hmgdevio@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-300 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-sky-200"
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiMail />
              Solicitar propuesta
            </motion.a>
            <motion.a
              href="https://wa.me/5493813686226"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 font-semibold text-zinc-100 transition hover:border-zinc-400"
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiMessageCircle />
              Escribir por WhatsApp
            </motion.a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-300">
            <a href="mailto:hmgdevio@gmail.com" className="transition hover:text-zinc-100">
              hmgdevio@gmail.com
            </a>
            <a href="tel:+5493813686226" className="transition hover:text-zinc-100">
              (+54) 9 3813686226
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;

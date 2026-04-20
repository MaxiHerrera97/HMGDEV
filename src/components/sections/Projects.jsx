import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import projects from "../../data/projects";
import landingImg from "../../assets/casos-reales/barberia-landing.png";
import adminHeroImg from "../../assets/casos-reales/barberia-admin-hero.png";
import turneroImg from "../../assets/casos-reales/barberia-turnero.png";
import agendaImg from "../../assets/casos-reales/barberia-agenda.png";
import reportesImg from "../../assets/casos-reales/barberia-reportes.png";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiPlayCircle } from "react-icons/fi";

const Projects = () => {
  const demos = [
    { id: 1, image: landingImg, title: "Landing comercial de la barbería" },
    { id: 2, image: adminHeroImg, title: "Panel de configuración del negocio" },
    { id: 3, image: turneroImg, title: "Flujo de reserva de turnos" },
    { id: 4, image: agendaImg, title: "Agenda diaria del panel administrador" },
    { id: 5, image: reportesImg, title: "Caja, comisiones y exportación de reportes" },
  ];
  const [activeDemo, setActiveDemo] = useState(demos[0]);

  return (
    <section id="proyectos" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Casos reales"
          align="left"
          title="Proyecto destacado del portafolio: sistema para barberías."
          subtitle="Estas capturas muestran módulos reales del producto: landing, configuración, turnero, agenda y reportes. Aquí iremos sumando más sistemas en funcionamiento."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Card className="flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <FiCheckCircle />
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.modules.map((module) => (
                    <div
                      key={module}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-3 text-center text-sm text-zinc-300"
                    >
                      {module}
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}

          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <Card className="flex h-full flex-col">
              <h4 className="text-lg font-semibold text-zinc-100">
                Este es solo el comienzo del portafolio.
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                El sistema de barbería es uno de los primeros proyectos publicados.
                Próximamente se sumarán más soluciones para distintos rubros y
                seguiremos ampliando este showroom de productos.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-3 text-sm text-zinc-300">
                  Productos reales en funcionamiento
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-3 text-sm text-zinc-300">
                  Diseño + desarrollo FullStack
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-3 text-sm text-zinc-300">
                  Escalable para nuevos módulos
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-3 text-sm text-zinc-300">
                  Soporte y evolución continua
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <motion.a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-sky-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <FiArrowUpRight />
                  Quiero una propuesta
                </motion.a>
                <motion.a
                  href="https://wa.me/5493813686226"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <FiPlayCircle />
                  Agendar por WhatsApp
                </motion.a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <Card className="flex h-full flex-col">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-sky-200/80">
                Vista previa del producto
              </p>
              <div className="h-72 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 md:h-96">
                <img
                  src={activeDemo.image}
                  alt={activeDemo.title}
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-zinc-200">
                {activeDemo.title}
              </p>

              <div className="mt-auto pt-4 grid grid-cols-3 gap-3">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => setActiveDemo(demo)}
                    className={`overflow-hidden rounded-xl border transition ${
                      activeDemo.id === demo.id
                        ? "border-sky-300/70"
                        : "border-zinc-700"
                    }`}
                  >
                    <motion.img
                      src={demo.image}
                      alt={demo.title}
                      className="h-20 w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    />
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { FiCode, FiCompass, FiEdit3, FiSend } from "react-icons/fi";

const Process = () => {
  const steps = [
    {
      title: "Diagnóstico estratégico",
      icon: FiCompass,
      description:
        "Entiendo objetivo comercial, problema operativo y alcance real para priorizar bien.",
    },
    {
      title: "Diseño de experiencia",
      icon: FiEdit3,
      description:
        "Defino estructura, flujo y estilo visual para que la solución sea clara, elegante y usable.",
    },
    {
      title: "Desarrollo iterativo",
      icon: FiCode,
      description:
        "Construyo por bloques funcionales con entregas frecuentes para validar negocio y velocidad.",
    },
    {
      title: "Lanzamiento y mejoras",
      icon: FiSend,
      description:
        "Publicación, ajuste fino y soporte para acompañar adopción y evolución del producto.",
    },
  ];

  return (
    <section id="proceso" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Metodología"
          title="Un proceso simple, transparente y enfocado en ejecución."
          subtitle="Sin burocracia innecesaria: foco en claridad de objetivos, velocidad de entrega y calidad final."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] },
                },
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 210, damping: 18 }}
            >
              <Card>
                <div className="mb-4 flex items-center justify-between">
                  <step.icon className="text-2xl text-sky-200" />
                  <p className="text-xs font-semibold tracking-[0.14em] text-sky-200/80">
                    PASO 0{i + 1}
                  </p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;

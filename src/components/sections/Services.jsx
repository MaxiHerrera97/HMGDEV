import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayout, FiSettings } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      title: "Aplicaciones Web FullStack",
      icon: FiCode,
      description:
        "Creamos plataformas completas, desde la interfaz que usa tu cliente hasta la lógica y base de datos que sostienen tu operación.",
    },
    {
      title: "Sistemas a medida",
      icon: FiCpu,
      description:
        "Transformamos procesos manuales en software personalizado para mejorar control, velocidad y calidad del servicio.",
    },
    {
      title: "Landing + embudo comercial",
      icon: FiLayout,
      description:
        "Diseñamos páginas que posicionan tu marca y generan consultas reales para convertir visitas en oportunidades.",
    },
    {
      title: "Panel administrativo + automatización",
      icon: FiSettings,
      description:
        "Implementamos paneles, reportes y automatizaciones para que tu negocio funcione mejor sin depender de tareas repetitivas.",
    },
  ];

  return (
    <section id="servicios" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          align="left"
          title="Desarrollamos sistemas y plataformas web para distintos negocios."
          subtitle="Esta web muestra nuestros proyectos en funcionamiento y también los servicios de desarrollo a medida para nuevas soluciones."
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
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] },
                },
              }}
              whileHover={{ y: -8, rotateX: 4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 210, damping: 18 }}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <service.icon className="text-2xl text-sky-200" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200/80">
                    0{i + 1}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;

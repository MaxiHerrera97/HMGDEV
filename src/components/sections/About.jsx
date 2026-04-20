import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Sobre HMGDEV"
              align="left"
              title="Construimos productos digitales propios y sistemas a medida."
              subtitle="Combinamos experiencia real en producto con desarrollo FullStack para crear soluciones que se puedan vender y operar."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <Card>
              <p className="text-zinc-300">
                No vendemos plantillas genéricas. Diseñamos y desarrollamos soluciones
                a medida para cada cliente, cuidando experiencia de usuario, operación
                interna y percepción profesional de marca.
              </p>
              <div className="my-6 h-px bg-zinc-800" />
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-sky-300" />
                  <span>Comunicación directa y etapas claras de trabajo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-sky-300" />
                  <span>Desarrollo FullStack con visión comercial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-sky-300" />
                  <span>Entregables listos para usar, no prototipos vacíos.</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;

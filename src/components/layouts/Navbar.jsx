import Container from "../ui/Container";
import logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Caso Real", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl"
    >
      <Container>
        <nav className="flex h-20 items-center justify-between gap-6">
          <a href="#inicio" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="HMGDEV logo"
              className="h-14 w-14 object-contain"
            />
            <span className="leading-tight">
              <strong className="block text-base tracking-[0.16em] text-zinc-100">
                HMGDEV
              </strong>
              <span className="text-xs text-zinc-400">Desarrollo FullStack</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-zinc-100" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-300/20"
          >
            <FiArrowUpRight className="text-base" />
            Solicitar propuesta
          </a>
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;

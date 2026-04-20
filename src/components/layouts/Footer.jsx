import Container from "../ui/Container";
import { FiMail, FiMessageCircle } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/70 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {year} HMGDEV. Desarrollo FullStack para empresas que quieren crecer.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-200"
              href="mailto:hmgdevio@gmail.com"
            >
              <FiMail />
              hmgdevio@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-200"
              href="tel:+5493813686226"
            >
              (+54) 9 3813686226
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-200"
              href="https://wa.me/5493813686226"
              target="_blank"
              rel="noreferrer"
            >
              <FiMessageCircle />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

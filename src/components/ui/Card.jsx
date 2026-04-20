const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-800/80 bg-zinc-900/55 p-6 shadow-[0_16px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition hover:border-sky-300/40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

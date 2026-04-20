const SectionTitle = ({ title, subtitle, eyebrow, align = "center" }) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center rounded-full border border-sky-200/20 bg-sky-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">
          {eyebrow}
        </p>
      )}

      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">
        {title}
      </h2>

      {subtitle && <p className="mt-5 max-w-3xl text-zinc-400">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

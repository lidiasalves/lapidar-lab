const pubs = [
  { year: "2025", title: "Práticas pedagógicas mediadas por IA generativa: limites e possibilidades", venue: "Caderno CEAD/UnB" },
  { year: "2024", title: "Presença docente em ambientes virtuais de aprendizagem", venue: "Revista Brasileira de EaD" },
  { year: "2024", title: "Letramento crítico e cultura digital na formação docente", venue: "Educar em Revista" },
  { year: "2023", title: "Darcy Ribeiro e a universidade necessária: releituras contemporâneas", venue: "Linhas Críticas" },
];

export const Publicacoes = () => {
  return (
    <section id="publicacoes" className="bg-ink py-24 text-paper md:py-32 grain">
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">§ 04 — Publicações</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Produção <span className="italic">acadêmica</span> recente.
            </h2>
          </div>
          <a href="#" className="link-underline font-mono text-xs uppercase tracking-widest text-paper">
            Ver acervo completo →
          </a>
        </div>

        <ul className="divide-y divide-paper/15 border-y border-paper/15">
          {pubs.map((p, i) => (
            <li key={i} className="grid grid-cols-12 items-baseline gap-4 py-6">
              <span className="col-span-2 font-mono text-xs text-paper/60 md:text-sm">{p.year}</span>
              <h3 className="col-span-12 font-display text-2xl leading-snug md:col-span-7 md:text-3xl">{p.title}</h3>
              <span className="col-span-12 font-mono text-[11px] uppercase tracking-widest text-paper/60 md:col-span-3 md:text-right">{p.venue}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const projetos = [
  {
    tag: "InovaLAPIDAR",
    title: "Trilhas formativas para docência digital crítica",
    meta: "2025 · Em curso",
    desc: "Programa de formação continuada que articula letramento digital, ética em IA e práticas pedagógicas ativas.",
  },
  {
    tag: "Pesquisa",
    title: "Avaliação de mediações pedagógicas em EaD",
    meta: "2024–2026",
    desc: "Estudo longitudinal sobre presença docente, engajamento e aprendizagem em cursos a distância da UnB.",
  },
  {
    tag: "Extensão",
    title: "Residências pedagógicas no Distrito Federal",
    meta: "2025 · Em curso",
    desc: "Imersão de docentes em escolas públicas para co-construção de práticas inovadoras de ensino.",
  },
  {
    tag: "Protótipo",
    title: "Plataforma aberta de objetos de aprendizagem",
    meta: "Beta",
    desc: "Repositório com curadoria, metadados abertos e ferramentas de remixagem para professores.",
  },
];

export const Projetos = () => {
  return (
    <section id="projetos" className="bg-paper py-24 md:py-32">
      <div className="container">
        <div className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">§ 03 — Projetos & iniciativas</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            O que estamos [ <span className="font-script text-amber">construindo</span> ]<br/> agora
          </h2>
        </div>

        <ul className="border-t border-ink/15">
          {projetos.map((p, i) => (
            <li key={i}>
              <a
                href="#"
                className="group grid items-baseline gap-4 rounded-xl border-b border-ink/15 py-7 transition-colors hover:bg-paper-soft md:grid-cols-12 md:gap-6 md:py-9"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber md:col-span-2">
                  / {String(i + 1).padStart(2, "0")} · {p.tag}
                </span>
                <h3 className="font-display text-3xl leading-tight text-ink transition-transform group-hover:translate-x-2 md:col-span-6 md:text-4xl">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft md:col-span-3">{p.desc}</p>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:col-span-1 md:text-right">
                  {p.meta}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

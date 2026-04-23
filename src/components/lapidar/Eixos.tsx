const eixos = [
  {
    n: "01",
    title: "Pesquisa",
    body: "Investigação aplicada em educação, EaD e tecnologias digitais — produzindo evidência para políticas e práticas.",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    n: "02",
    title: "Formação",
    body: "Trilhas docentes, oficinas e residências pedagógicas para professores da educação básica e superior.",
    span: "md:col-span-2",
  },
  {
    n: "03",
    title: "Metodologias ativas",
    body: "Design de experiências de aprendizagem centradas no estudante.",
    span: "md:col-span-2",
  },
  {
    n: "04",
    title: "Inovação aberta",
    body: "Prototipagem de soluções digitais com licenciamento aberto.",
    span: "md:col-span-3",
  },
  {
    n: "05",
    title: "Extensão",
    body: "Diálogo com comunidades, escolas e redes públicas.",
    span: "md:col-span-3",
  },
];

export const Eixos = () => {
  return (
    <section id="eixos" className="bg-paper-soft py-24 md:py-32">
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">§ 02 — Eixos de atuação</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Cinco frentes, uma <span className="font-script text-amber">missão</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Cada eixo articula pesquisa, prática e formação, atravessado pelo uso crítico das
            tecnologias digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:auto-rows-[minmax(180px,auto)]">
          {eixos.map((e) => (
            <article
              key={e.n}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-paper p-7 transition-all duration-500 hover:border-ink ${e.span} ${
                e.accent ? "bg-ink text-paper hover:bg-ink" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${e.accent ? "text-amber" : "text-muted-foreground"}`}>
                  / {e.n}
                </span>
                <span className={`text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${e.accent ? "text-amber" : "text-ink"}`}>↗</span>
              </div>
              <div className="mt-12">
                <h3 className={`font-display text-3xl leading-tight md:text-4xl ${e.accent ? "text-paper" : "text-ink"}`}>
                  {e.title}
                </h3>
                <p className={`mt-3 max-w-sm text-sm leading-relaxed ${e.accent ? "text-paper/75" : "text-ink-soft"}`}>
                  {e.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

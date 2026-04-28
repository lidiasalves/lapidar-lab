export const Sobre = () => {
  const stats = [
    { value: 8, suffix: '+', label: 'Linhas de pesquisa' },
    { value: 32, suffix: '+', label: 'Pesquisadores' },
    { value: 10, suffix: '+', label: 'Iniciativas em curso' },
  ];

  return (
    <section id="sobre" className="bg-paper py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              § 01 — Manifesto
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Pesquisar e [<span className="font-script text-amber">lapidar</span>] o futuro da educação
            </h2>
            <div className="mt-8 inline-block border-t border-amber pt-4 font-mono text-xs uppercase tracking-widest text-ink">
              CEAD · Universidade de Brasília
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft text-pretty">
              <p className="first-letter:font-display first-letter:text-7xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-amber">
                O Laboratório reúne pesquisadores, estudantes e profissionais da educação em torno
                do desenvolvimento de metodologias inovadoras, da formação pedagógica e do
                fortalecimento de processos de ensino e aprendizagem ativos, inclusivos e
                socialmente comprometidos.
              </p>
              <p>
                Ao acessar o LAPIDAR, você encontra iniciativas, estudos e experiências que
                articulam <span className="text-ink">ensino, pesquisa e extensão</span>, orientadas
                pela busca de uma educação pública de qualidade, centrada no estudante e inspirada
                no pensamento de Darcy Ribeiro.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s, index) => (
                <div key={s.label}>
                  <div
                    className="stat-counter font-display text-5xl text-ink"
                    data-suffix={s.suffix}
                    aria-hidden="true"
                    style={
                      {
                        '--stat-target': s.value,
                        '--stat-delay': `${index * 180}ms`,
                      } as React.CSSProperties
                    }
                  />
                  <span className="sr-only">
                    {s.value}
                    {s.suffix} {s.label}
                  </span>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import darcy from "@/assets/darcy-ribeiro.jpg";

const rotating = ["pesquisa", "inovação", "experimentação", "reflexão", "crítica"];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container">
        {/* Top metadata bar */}
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground reveal-up">
          <span>— Est. 2024</span>
          <span className="hidden h-px w-8 bg-border sm:block" />
          <span>Brasília · DF</span>
          <span className="hidden h-px w-8 bg-border sm:block" />
          <span>Vol. 01 / Edição corrente</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-tight text-balance reveal-up">
              Laboratório
              <br />
              de Pesquisa
              <br />
              <span className="italic text-ink-soft">e Inovação</span>
              <br />
              <span className="relative inline-block">
                Darcy Ribeiro
                <span className="absolute -right-3 top-2 h-3 w-3 rounded-full bg-amber md:-right-6 md:top-4" />
              </span>
              <span className="text-amber">.</span>
            </h1>

            <div className="mt-8 max-w-xl">
              <p className="text-base leading-relaxed text-ink-soft md:text-lg text-pretty reveal-up">
                Um espaço de experimentação, reflexão e produção de conhecimento dedicado à
                transformação das práticas educativas por meio da pesquisa e do uso crítico de
                tecnologias digitais.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 reveal-up">
              <a
                href="#sobre"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Conheça o laboratório
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#projetos" className="link-underline text-sm font-medium text-ink">
                Ver projetos em curso
              </a>
            </div>

            {/* Rotating keywords */}
            <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-ink">Eixos:</span>
              {rotating.map((w, i) => (
                <span key={w} className="word-shimmer" style={{ animationDelay: `${i * 0.4}s` }}>
                  · {w}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-4 reveal-up">
            <figure className="relative">
              <div className="absolute -inset-3 -z-10 bg-amber/20" aria-hidden />
              <img
                src={darcy}
                alt="Retrato editorial em preto e branco de Darcy Ribeiro"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale shadow-deep"
              />
              <figcaption className="mt-3 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Darcy Ribeiro<br/>1922 — 1997</span>
                <span className="text-right">Educador,<br/>antropólogo, escritor</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="mt-20 overflow-hidden border-y border-border py-4">
        <div className="flex w-max marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12 font-display text-3xl italic text-ink-soft md:text-5xl">
              <span>educação pública</span><span className="text-amber">✺</span>
              <span>pensamento crítico</span><span className="text-amber">✺</span>
              <span>tecnologias digitais</span><span className="text-amber">✺</span>
              <span>formação docente</span><span className="text-amber">✺</span>
              <span>metodologias ativas</span><span className="text-amber">✺</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

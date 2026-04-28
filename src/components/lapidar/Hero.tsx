import darcy from "@/assets/darcy-ribeiro-lapidar.jpg";

const rotating = ["pesquisa", "inovação", "experimentação", "reflexão", "crítica"];
const titleLines = [
  { text: "Laboratório", className: "" },
  { text: "de Pesquisa", className: "" },
  { text: "e Inovação", className: "font-script text-[0.9em] text-ink-soft" },
  { text: "Darcy Ribeiro", className: "" },
];

const renderTitleLine = (
  text: string,
  className: string,
  lineIndex: number,
  prefixDelay: number,
  trailingContent?: React.ReactNode,
) => (
  <span
    className={`hero-title-line block overflow-visible leading-[1.18] ${className}`}
    aria-hidden="true"
  >
    {Array.from(text).map((char, charIndex) => (
      <span
        key={`${text}-${charIndex}`}
        className="hero-title-letter inline-block whitespace-pre"
        style={{
          "--i": charIndex,
          "--line-delay": `${prefixDelay + lineIndex * 460}ms`,
        } as React.CSSProperties}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
    {trailingContent}
  </span>
);

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
            <h1 className="flex flex-col overflow-visible py-1 font-display text-[clamp(2.4rem,7.6vw,7.2rem)] leading-[1.08] tracking-tight md:py-2 md:leading-[1.14]" aria-label="Laboratório de Pesquisa e Inovação Darcy Ribeiro">
              {renderTitleLine(titleLines[0].text, titleLines[0].className, 0, 0)}
              {renderTitleLine(titleLines[1].text, titleLines[1].className, 1, 80)}
              {renderTitleLine(titleLines[2].text, titleLines[2].className, 2, 160)}
              {renderTitleLine(
                titleLines[3].text,
                titleLines[3].className,
                0,
                1620,
                <span
                  className="hero-title-letter ml-3 inline-block h-3 w-3 rounded-[0.25rem] bg-amber align-middle md:ml-6 md:h-4 md:w-4"
                  style={{ "--i": 12 } as React.CSSProperties}
                />,
              )}
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
                className="group inline-flex items-center gap-3 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
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
              <div className="absolute -inset-3 -z-10 rounded-xl bg-[#FDB93C]" aria-hidden />
              <img
                src={darcy}
                alt="Retrato editorial de Darcy Ribeiro"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-xl object-cover"
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
              <span>educação pública</span>
              <img src="/favicon.png" alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5" />
              <span>pensamento crítico</span>
              <img src="/favicon.png" alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5" />
              <span>tecnologias digitais</span>
              <img src="/favicon.png" alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5" />
              <span>formação docente</span>
              <img src="/favicon.png" alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5" />
              <span>metodologias ativas</span>
              <img src="/favicon.png" alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

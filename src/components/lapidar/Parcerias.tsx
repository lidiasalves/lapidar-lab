const parceiros = ["UnB", "CEAD", "CAPES", "MEC", "SEDF", "FAP-DF", "RNP", "UNESCO"];

export const Parcerias = () => {
  return (
    <section id="parcerias" className="bg-paper-soft py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">§ 05 — Parcerias</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Construindo <br />[<span className="font-script text-amber">em rede</span>]
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Trabalhamos com instituições públicas, redes de ensino e organizações da sociedade
              civil para articular pesquisa, formação e impacto.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/15 bg-ink/15 sm:grid-cols-4">
              {parceiros.map((p) => (
                <div
                  key={p}
                  className="flex aspect-square items-center justify-center rounded-[0.6rem] bg-paper transition-colors hover:bg-amber"
                >
                  <span className="font-display text-3xl tracking-tight text-ink">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { CarFront, MapPin, Navigation, TrainFront } from "lucide-react";

const dicas = [
  {
    icon: Navigation,
    title: "A pé ou de bicicleta",
    text: "A partir do UDFinho no ICC, siga pelo ICC Sul em direção ao CEAD/UnB e acompanhe a sinalização interna do campus.",
  },
  {
    icon: CarFront,
    title: "Carro ou aplicativo",
    text: "Use como destino o CEAD/UnB no Campus Darcy Ribeiro. Há acesso pelas vias principais do campus e áreas de parada próximas.",
  },
  {
    icon: TrainFront,
    title: "Transporte público",
    text: (
      <>
        Da rodoviária, pegue as linhas <span className="font-semibold text-ink">0.110 ou 110.2</span> e
        desça no ponto da Faculdade de Saúde e finalize o trajeto a pé para o CEAD.
      </>
    ),
  },
];

export const ComoChegar = () => {
  return (
    <section id="como-chegar" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground">§ 06 — Como chegar</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            Encontre o <br />[ <span className="font-script text-amber">Lapidar</span> ]
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Estamos no CEAD/UnB, no Campus Darcy Ribeiro. Aqui você encontra orientações simples
            para chegar com mais facilidade em diferentes modos de deslocamento.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="Mapa do CEAD UnB no Campus Darcy Ribeiro"
                src="https://www.google.com/maps?q=CEAD+UnB+Campus+Darcy+Ribeiro&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 md:grid-cols-3">
            {dicas.map((dica) => {
              const Icon = dica.icon;

              return (
                <article
                  key={dica.title}
                  className="group rounded-3xl border border-ink/10 bg-paper-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:bg-paper"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{dica.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{dica.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 text-paper shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
                  Referência
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                  Campus Darcy Ribeiro, CEAD/UnB
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-paper/80">
                  Se estiver chegando pela primeira vez, use o ICC como ponto de partida e siga a
                  sinalização até o bloco do CEAD. A navegação interna do campus pode variar de
                  acordo com obras e eventos.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-paper/10 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                      Endereço
                    </p>
                    <p className="mt-2 text-sm text-paper">CEAD/UnB · Campus Darcy Ribeiro · Brasília/DF</p>
                  </div>
                  <div className="rounded-2xl bg-paper/10 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                      Horário
                    </p>
                    <p className="mt-2 text-sm text-paper">Atendimento conforme agenda do laboratório</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
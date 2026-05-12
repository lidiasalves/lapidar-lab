import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageMetadata } from "../lib/seo";

const Tour360 = () => {
  useEffect(() => {
    setPageMetadata(
      "Tour 360° | LAPIDAR",
      "Pagina Tour 360° do LAPIDAR para visualizacao imersiva de espacos e ambientes.",
    );
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink/15 bg-paper/90 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-sm font-medium uppercase tracking-wider text-ink-soft hover:text-ink">
            ← Voltar para inicio
          </Link>
          <Link
            to="/regulamento"
            className="rounded-lg bg-amber border border-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Ver regulamento
          </Link>
        </div>
      </header>

      <section className="container py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Experiencia imersiva</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl">
          Tour 360° do LAPIDAR
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-ink-soft">
          Area preparada para incorporar o tour virtual do laboratorio. Conectar aqui um
          iframe de plataforma 360° (Matterport, Kuula, Google Street View ou equivalente).
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink/15 bg-gradient-to-br from-paper-soft to-paper p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink">Espaco reservado para o viewer 360°</h2>
              <p className="mt-3 text-ink-soft">
                Inserir o embed responsivo com controles
                de navegacao, acessibilidade e fallback para dispositivos moveis.
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-ink/30 bg-paper/80 p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Placeholder</p>
              <p className="mt-2 font-display text-2xl text-ink">Janela do Tour 360°</p>
              <p className="mt-2 text-sm text-ink-soft">Proporcao sugerida: 16:9 ou 4:3, com altura minima de 460px.</p>
            </div>
          </div>
        </div>
          <div className="mt-10">
            <Link
            to="/not-found"
            className="rounded-lg bg-amber border border-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
            >
            Agende uma visita →
          </Link>
          </div>
      </section>
    </main>
  );
};

export default Tour360;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageMetadata } from "../lib/seo";

const itensRegulamento = [
  {
    titulo: "Governanca",
    descricao: "Define a composicao da equipe, papeis e tomada de decisao no ambito do laboratorio.",
  },
  {
    titulo: "Eixos de Atuacao",
    descricao: "Organiza as frentes de pesquisa, inovacao e extensao desenvolvidas pelo LAPIDAR.",
  },
  {
    titulo: "Participacao",
    descricao: "Apresenta criterios de ingresso, colaboracao e compromissos de integrantes e parceiros.",
  },
  {
    titulo: "Publicacoes e Creditos",
    descricao: "Estabelece boas praticas de autoria, citacao e compartilhamento dos resultados.",
  },
];

const Regulamento = () => {
  useEffect(() => {
    setPageMetadata(
      "Regulamento | LAPIDAR",
      "Pagina de regulamento do LAPIDAR com diretrizes de governanca, eixos e participacao.",
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
            to="/tour-360"
            className="rounded-lg bg-amber border border-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-amber-foreground transition-colors hover:bg-ink hover:text-paper"
          >
            Tour 360°
          </Link>
        </div>
      </header>

      <section className="container py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Documentacao institucional</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl">
          Regulamento do laboratorio
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-ink-soft">
          Esta pagina concentra os pontos principais do regulamento do laboratório LAPIDAR.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {itensRegulamento.map((item) => (
            <article key={item.titulo} className="rounded-xl border border-ink/15 bg-card p-6 shadow-sm">
              <h2 className="font-display text-2xl tracking-tight text-ink">{item.titulo}</h2>
              <p className="mt-3 text-ink-soft">{item.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Regulamento;

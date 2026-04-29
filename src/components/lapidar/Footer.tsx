import logoLapidar from "@/assets/logos/logo-lapidar.png";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="regulamento" className="bg-paper border-t border-ink/15">
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h3 className="font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
              Conheça melhor o [ <span className="font-script text-amber">laboratório</span> ]
            </h3>
            <p className="mt-6 max-w-md text-ink-soft">
              Acesse o regulamento do LAPIDAR para entender governança, eixos e formas de
              participação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Baixar regulamento ↓
              </a>
              <a
                href="mailto:lapidar@unb.br"
                className="inline-flex items-center gap-3 rounded-lg border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Falar com a equipe →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Navegar</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {["Sobre","Eixos","Projetos","Publicações","Parcerias"].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="link-underline text-ink">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Institucional</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="https://cead.unb.br" className="link-underline text-ink">CEAD/UnB</a></li>
                <li><a href="https://unb.br" className="link-underline text-ink">Universidade de Brasília</a></li>
                <li><a href="#" className="link-underline text-ink">InovaLAPIDAR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Contato</h4>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>lapidar@unb.br</li>
                <li>Campus Darcy Ribeiro<br/>Brasília · DF</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 pt-8">
          <img
            src={logoLapidar}
            alt="Logo do Laboratório LAPIDAR"
            className="h-auto w-[min(92vw,680px)] rounded-lg"
          />
          <div className="flex flex-col items-start gap-4">
            {/* Substituir os hrefs pelos caminhos reais das redes sociais quando estiverem definidos. */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              © {new Date().getFullYear()} · Laboratório de Pesquisa e Inovação Darcy Ribeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#eixos", label: "Eixos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#publicacoes", label: "Publicações" },
  { href: "#parcerias", label: "Parcerias" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl leading-none">
            <span className="text-amber">[</span>
            <span className="tracking-tight">LAPIDAR</span>
            <span className="text-amber">]</span>
          </span>
          <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            CEAD · UnB
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#regulamento"
          className="hidden rounded-full border border-ink px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper md:inline-block"
        >
          Regulamento
        </a>

        <button
          aria-label="Menu"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-ink/30"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-2.5 w-4">
            <span className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-display text-2xl text-ink">
                {l.label}
              </a>
            ))}
            <a href="#regulamento" onClick={() => setOpen(false)} className="mt-3 inline-block self-start rounded-full border border-ink px-4 py-1.5 text-xs uppercase tracking-wider">
              Regulamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

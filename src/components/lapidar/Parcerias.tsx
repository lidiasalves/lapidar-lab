import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import logoCapes from "@/assets/logos/logo-capes.png";
import logoCead from "@/assets/logos/logo-cead.png";
import logoMec from "@/assets/logos/logo-mec-br.png";
import logoUnb from "@/assets/logos/logo-unb.png";
import logoUab from "@/assets/logos/logo-uab.png";
import logoFinatec from "@/assets/logos/logo-finatec.png";

const parceiros = [
  { name: "UnB", src: logoUnb },
  { name: "CEAD", src: logoCead },
  { name: "MEC", src: logoMec },
  { name: "UAB", src: logoUab},
  { name: "CAPES", src: logoCapes},
  { name: "Finatec", src: logoFinatec}
];

export const Parcerias = () => {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particleOptions: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      color: { value: "#472563" },
      links: {
        enable: true,
        color: "#472563",
        distance: 160,
        opacity: 0.05,
        width: 1.4,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      number: {
        value: 600,
        density: {
          enable: true,
          area: 900,
        },
      },
      opacity: {
        value: 0.2,
      },
      size: {
        value: { min: 1, max: 2.8 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 120,
          links: {
            opacity: 0.22,
          },
        },
      },
    },
  };

  return (
    <section id="parcerias" className="relative overflow-hidden bg-paper-soft py-24 md:py-32">
      {particlesReady && (
        <Particles
          id="parcerias-particles"
          className="pointer-events-none absolute inset-0"
          options={particleOptions}
        />
      )}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground">§ 05 — Parcerias</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Construindo <br />[ <span className="font-script text-amber">em rede</span> ]
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Trabalhamos com instituições públicas, redes de ensino e organizações da sociedade
              civil para articular pesquisa, formação e impacto.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {parceiros.map((parceiro, index) => {
                let positionClass = "";

                if (index === 4) {
                  positionClass = "sm:col-start-2";
                } else if (index === 5) {
                  positionClass = "sm:col-start-3";
                }

                return (
                  <div
                    key={parceiro.name}
                    className={`group relative isolate flex aspect-square items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-1 ${positionClass}`}
                  >
                    <img
                      src={parceiro.src}
                      alt={parceiro.name}
                      className="relative z-0 w-full object-contain grayscale contrast-125 brightness-75 drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-[filter,transform] duration-300 group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Nav } from "@/components/lapidar/Nav";
import { Hero } from "@/components/lapidar/Hero";
import { Sobre } from "@/components/lapidar/Sobre";
import { Eixos } from "@/components/lapidar/Eixos";
import { Projetos } from "@/components/lapidar/Projetos";
import { Publicacoes } from "@/components/lapidar/Publicacoes";
import { Parcerias } from "@/components/lapidar/Parcerias";
import { Footer } from "@/components/lapidar/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "LAPIDAR — Laboratório de Pesquisa e Inovação Darcy Ribeiro · CEAD/UnB";
    const desc = "Espaço de experimentação, reflexão e produção de conhecimento dedicado à transformação das práticas educativas por meio da pesquisa e do uso crítico de tecnologias digitais.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <Sobre />
      <Eixos />
      <Projetos />
      <Publicacoes />
      <Parcerias />
      <Footer />
    </main>
  );
};

export default Index;

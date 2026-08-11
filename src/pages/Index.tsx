import { Nav } from "@/components/lapidar/Nav";
import { Hero } from "@/components/lapidar/Hero";
import { Sobre } from "@/components/lapidar/Sobre";
import { VideoLapidar } from "@/components/lapidar/VideoLapidar";
import { Eixos } from "@/components/lapidar/Eixos";
import { Projetos } from "@/components/lapidar/Projetos";
import { Publicacoes } from "@/components/lapidar/Publicacoes";
import { Parcerias } from "@/components/lapidar/Parcerias";
import { ComoChegar } from "@/components/lapidar/ComoChegar";
import { Footer } from "@/components/lapidar/Footer";
import { setPageMetadata } from "../lib/seo";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    setPageMetadata(
      "LAPIDAR - Laboratório de Pesquisa e Inovação Darcy Ribeiro · CEAD/UnB",
      "Espaço de experimentação, reflexão e produção de conhecimento dedicado à transformação das práticas educativas por meio da pesquisa e do uso crítico de tecnologias digitais.",
    );
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <Sobre />
      <div aria-hidden="true" className="bg-paper py-3 md:py-4">
        <div className="container">
          <div className="mx-auto h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        </div>
      </div>
      <VideoLapidar />
      <Eixos />
      <Projetos />
      <Publicacoes />
      <Parcerias />
      <ComoChegar />
      <Footer />
    </main>
  );
};

export default Index;

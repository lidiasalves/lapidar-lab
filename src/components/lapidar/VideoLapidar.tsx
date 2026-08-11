const videoUrl = "https://www.youtube.com/embed/dSBPfIt4CJA";

export const VideoLapidar = () => {
	return (
		<section id="video-lapidar" className="bg-paper py-24 md:py-32">
			<div className="container">
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="lg:col-span-5">
						<p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
							§ 02 — Vídeo institucional
						</p>
						<h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
							Veja o nosso <span className="whitespace-nowrap">[ <span className="font-script text-amber">espaço</span> ]</span>
						</h2>
						<p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
							Neste vídeo, você conhece um panorama do laboratório e de suas dependências, com
							uma leitura rápida dos ambientes que sustentam as atividades de pesquisa, formação
							e experimentação do LAPIDAR.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-4">
							<a
								href="mailto:lapidar.cead@unb.br?subject=Agendamento%20de%20visita%20ao%20LAPIDAR"
								className="inline-flex items-center gap-3 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
							>
								Agendamento
								<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
									→
								</span>
							</a>
							<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
								Atendimento conforme agenda do laboratório
							</span>
						</div>
					</div>

					<div className="lg:col-span-7">
						<figure className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
							<div className="aspect-video">
								<iframe
									title="Vídeo do espaço LAPIDAR"
									src={videoUrl}
									loading="lazy"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="h-full w-full border-0"
								/>
							</div>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};

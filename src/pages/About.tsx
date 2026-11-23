import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import Mission from "@/components/Mission";
import CTASection from "@/components/CTASection";

const blocks = [
  {
    img: "/mapa.jpg",
    alt: "Mapa da rede de técnicos TECNICO EXPRESS",
    title: "Uma rede que cobre o Brasil",
    text: [
      "Somos uma das maiores empresas de Field Service do Brasil, preparada para atender demandas de todos os portes e segmentos.",
      "São mais de 1.800 técnicos de informática cadastrados, com milhares de horas de experiência em atendimento local.",
    ],
  },
  {
    img: "/sistema/dashboard.png",
    alt: "Tela do sistema Chamado Express",
    title: "Tecnologia própria em cada chamado",
    text: [
      "Criamos o Chamado Express para conectar empresa, analista e técnico no mesmo fluxo: abertura, acompanhamento, comprovação e faturamento.",
      "Cada negócio tem suas particularidades. Por isso adaptamos o atendimento ao seu modelo de operação e aos seus objetivos.",
    ],
  },
];

const About = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Quem somos"
      title={<>Expertise, agilidade e <span className="gradient-text">compromisso</span></>}
      lead="Conectamos empresas a técnicos especializados para que você foque no que importa: crescer."
    />

    <section className="section pt-4">
      <div className="container-site space-y-16 lg:space-y-24">
        {blocks.map((b, i) => (
          <div key={b.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={b.img} alt={b.alt} loading="lazy" className="reveal w-full rounded-3xl border object-cover" style={{ boxShadow: "var(--shadow-lift)" }} />
            <div className="reveal" style={{ ["--reveal-delay" as string]: "80ms" }}>
              <h2 className="text-3xl font-extrabold sm:text-4xl">{b.title}</h2>
              {b.text.map((t) => <p key={t} className="mt-4 text-lg leading-relaxed text-muted-foreground">{t}</p>)}
              {i === 1 && (
                <Link to="/chamado-express" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:underline">
                  Conheça o Chamado Express <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Mission />
    <div className="pt-16 sm:pt-20" />
    <CTASection title="Vamos trabalhar juntos?" text="Conte o seu desafio e mostramos como a nossa rede pode atender a sua operação." />
  </SiteLayout>
);

export default About;

import { Clock, DollarSign, LogIn, MapPin, Smartphone, Star, UserPlus, Users } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";
import CTASection from "@/components/CTASection";
import AcordosContent from "@/components/site/AcordosContent";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { SITE } from "@/lib/site";

const benefits = [
  { icon: DollarSign, title: "Renda extra", text: "Atendimentos avulsos com valor combinado antes de cada chamado." },
  { icon: MapPin, title: "Perto de você", text: "Receba chamados na sua região e atenda clientes próximos." },
  { icon: Clock, title: "Sua agenda", text: "Você escolhe quando e quanto trabalhar." },
  { icon: Smartphone, title: "Tudo pelo celular", text: "Check-in, finalização em etapas, RAT e assinatura no Chamado Express." },
  { icon: Users, title: "Comunidade", text: "Mais de 1.800 técnicos e um grupo exclusivo para novidades." },
  { icon: Star, title: "Crescimento", text: "Atenda empresas de vários segmentos e construa sua reputação." },
];

const steps = ["Faça seu cadastro", "Aguarde a validação", "Receba chamados na sua região", "Finalize pelo app e receba"];

const AreaTecnico = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Para técnicos"
      title={<>Seja um <span className="gradient-text">TECNICO EXPRESS</span></>}
      lead="Entre para a nossa rede nacional de Field Service e aumente sua renda com liberdade de horário."
    >
      <a href={SITE.techSignupUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
        <UserPlus className="h-4 w-4" /> Quero me cadastrar
      </a>
      <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3.5">
        <LogIn className="h-4 w-4" /> Já sou cadastrado
      </a>
    </PageHero>

    <section className="border-y bg-white">
      <ol className="container-site grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s} className="reveal flex items-center gap-3" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{i + 1}</span>
            <span className="font-semibold">{s}</span>
          </li>
        ))}
      </ol>
    </section>

    <section className="section bg-secondary">
      <div className="container-site">
        <SectionHeading eyebrow="Vantagens" title="Por que fazer parte da rede" />
        <FeatureGrid items={benefits} />
      </div>
    </section>

    <section id="acordos" className="section">
      <div className="container-site max-w-4xl">
        <SectionHeading eyebrow="Acordos" title="Regras claras desde o primeiro chamado" />
        <AcordosContent />
      </div>
    </section>

    <CTASection title="Entre no grupo exclusivo de técnicos" text="Novidades, chamados em aberto e avisos da operação direto no seu WhatsApp.">
      <a href={SITE.techGroupUrl} target="_blank" rel="noopener noreferrer" className="btn-light px-6 py-3.5"><WhatsappIcon /> Entrar no grupo</a>
      <a href={SITE.techSignupUrl} target="_blank" rel="noopener noreferrer" className="btn border border-white/50 px-6 py-3.5 text-white hover:bg-white/10">Cadastrar agora</a>
    </CTASection>
  </SiteLayout>
);

export default AreaTecnico;

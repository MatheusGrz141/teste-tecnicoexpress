import { BadgeDollarSign, Clock, FileCheck2, Headphones, LogIn, MapPin, ShieldCheck } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";
import TicketMock from "@/components/home/TicketMock";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/home/ContactSection";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { SITE, whatsappLink } from "@/lib/site";

const benefits = [
  { icon: MapPin, title: "Cobertura nacional", text: "Técnicos validados perto do local, inclusive em cidades onde você não tem equipe." },
  { icon: Clock, title: "Agilidade", text: "Designação rápida e horário combinado com o responsável local." },
  { icon: FileCheck2, title: "Atendimento comprovado", text: "RAT, assinatura online, fotos e horários registrados em cada chamado." },
  { icon: Headphones, title: "Analista acompanhando", text: "Nossa equipe confere cada atendimento antes de fechar o chamado." },
  { icon: BadgeDollarSign, title: "Preço justo por caso", text: "Cada chamado é orçado conforme o serviço, a cidade e o prazo." },
  { icon: ShieldCheck, title: "Segurança", text: "Técnicos cadastrados e validados; seus dados tratados conforme a LGPD." },
];

const AreaCliente = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Para empresas"
      title={<>Atenda seus clientes <span className="gradient-text">em todo o Brasil</span> sem equipe própria</>}
      lead="Você abre o chamado, nós colocamos um técnico validado no local e você acompanha tudo pelo Chamado Express."
      aside={<TicketMock />}
    >
      <a href={whatsappLink("Olá! Sou empresa e quero contratar atendimentos técnicos.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
        <WhatsappIcon /> Solicitar orçamento
      </a>
      <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3.5">
        <LogIn className="h-4 w-4" /> Área do cliente
      </a>
    </PageHero>

    <section className="section bg-secondary">
      <div className="container-site">
        <SectionHeading eyebrow="Vantagens" title="Por que empresas escolhem a TECNICO EXPRESS" />
        <FeatureGrid items={benefits} />
      </div>
    </section>

    <ServicesSection />
    <div className="bg-secondary"><ContactSection /></div>
  </SiteLayout>
);

export default AreaCliente;

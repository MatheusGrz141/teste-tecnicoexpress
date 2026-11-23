import { Building2, HardHat, Headset, LogIn, Users } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import PlatformTabs from "@/components/home/PlatformTabs";
import PlansSection from "@/components/site/PlansSection";
import CTASection from "@/components/CTASection";
import TicketMock from "@/components/home/TicketMock";
import FAQSection from "@/components/FAQSection";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { MSG, SITE, whatsappLink } from "@/lib/site";

const profiles = [
  { icon: Building2, title: "Sua empresa", text: "Painel com todos os chamados, faturas, contratos e relatórios." },
  { icon: Headset, title: "Seus analistas", text: "Designam técnicos, validam atendimentos e faturam, cada um com o acesso que você definir." },
  { icon: Users, title: "Seus clientes", text: "Operadores do cliente abrem e acompanham chamados com acesso próprio." },
  { icon: HardHat, title: "Seus técnicos", text: "Recebem o chamado, fazem check-in e finalizam em etapas pelo celular." },
];

const ChamadoExpress = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Sistema Chamado Express"
      title={<>O sistema de chamados que <span className="gradient-text">roda a nossa operação</span>, agora na sua</>}
      lead="Gestão de field service do pedido à fatura: abertura, designação, check-in, RAT assinada, validação e faturamento. Por mensalidade, com implantação da nossa equipe."
      aside={<TicketMock />}
    >
      <a href={whatsappLink(MSG.sistema)} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
        <WhatsappIcon /> Pedir demonstração
      </a>
      <a href="#planos" className="btn-ghost px-6 py-3.5">Ver planos</a>
    </PageHero>

    <section className="section">
      <div className="container-site">
        <SectionHeading eyebrow="Quem usa" title="Cada pessoa vê o que precisa" lead="Acessos por perfil: ninguém vê o que não deve, todo mundo vê o que importa." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p, i) => (
            <div key={p.title} className="reveal card-site" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
              <div className="icon-tile"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="bg-secondary"><PlatformTabs /></div>
    <PlansSection />
    <FAQSection />
    <div className="pt-16 sm:pt-20" />
    <CTASection title="Veja o Chamado Express funcionando" text="Mostramos o sistema com o fluxo da sua operação, sem compromisso.">
      <a href={whatsappLink(MSG.sistema)} target="_blank" rel="noopener noreferrer" className="btn-light px-6 py-3.5"><WhatsappIcon /> Agendar demonstração</a>
      <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn border border-white/50 px-6 py-3.5 text-white hover:bg-white/10"><LogIn className="h-4 w-4" /> Já sou cliente</a>
    </CTASection>
  </SiteLayout>
);

export default ChamadoExpress;

import { Cable, Monitor, Printer, Server, Store, Wifi } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const services = [
  { icon: Monitor, title: "Manutenção de computadores", text: "Diagnóstico, reparo, formatação e troca de peças no local." },
  { icon: Wifi, title: "Redes e Wi-Fi", text: "Instalação, configuração e troca de roteadores, switches e access points." },
  { icon: Cable, title: "Cabeamento estruturado", text: "Passagem de cabos, crimpagem, certificação e organização de rack." },
  { icon: Store, title: "Varejo e PDV", text: "Suporte a caixas, impressoras fiscais, totens e implantação em lojas." },
  { icon: Printer, title: "Periféricos e impressão", text: "Instalação e manutenção de impressoras, scanners e equipamentos." },
  { icon: Server, title: "Field Service sob demanda", text: "Hands & eyes para sua equipe remota: o técnico executa, você orienta." },
];

const ServicesSection = () => (
  <section id="servicos" className="section">
    <div className="container-site">
      <SectionHeading eyebrow="Serviços" title="O que nossos técnicos resolvem" lead="Atendimento presencial para empresas de todos os portes. Não achou o seu caso? Fale com a gente: cada chamado é avaliado." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article key={s.title} className="reveal card-site card-site-hover flex gap-4" style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}>
            <div className="icon-tile"><s.icon className="h-5 w-5" /></div>
            <div>
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

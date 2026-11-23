import { Heart, Shield, Target } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const items = [
  {
    icon: Target,
    title: "Visão",
    text: "Ser uma das maiores empresas de Field Service do Brasil, referência pela honestidade, responsabilidade e excelência no atendimento.",
  },
  {
    icon: Heart,
    title: "Missão",
    text: "Ser um testemunho vivo do Evangelho para os técnicos, com honestidade e responsabilidade. Organizar os melhores métodos para um atendimento eficiente e dar aos técnicos oportunidades de uma vida mais digna.",
  },
  {
    icon: Shield,
    title: "Princípios",
    text: "Somos uma empresa cristocêntrica. Não impomos nossa fé nas relações comerciais, mas ela guia nossa conduta. Dois pilares inegociáveis: honestidade e responsabilidade.",
  },
];

const Mission = () => (
  <section className="section bg-secondary">
    <div className="container-site">
      <SectionHeading eyebrow="No que acreditamos" title="Visão, missão e princípios" />
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.title} className="reveal card-site" style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
            <div className="icon-tile"><it.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;

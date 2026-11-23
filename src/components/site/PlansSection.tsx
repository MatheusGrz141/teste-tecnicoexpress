import { Check } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { MSG, whatsappLink } from "@/lib/site";

const options = [
  {
    name: "Sistema para a sua equipe",
    tag: "Mensalidade",
    text: "Para empresas que já têm técnicos e querem organizar a operação.",
    items: [
      "Ambiente próprio da sua empresa, com login",
      "Cadastro de clientes, operações e técnicos",
      "App do técnico com check-in, RAT e assinatura",
      "Faturas, triagem e exportações em Excel",
      "Acessos por perfil para seus analistas",
      "Implantação e suporte da nossa equipe",
    ],
    cta: "Pedir proposta do sistema",
    msg: MSG.sistema,
    featured: true,
  },
  {
    name: "Sistema + rede TECNICO EXPRESS",
    tag: "Por chamado",
    text: "Para quem precisa de técnicos onde não tem equipe. O sistema vem incluso.",
    items: [
      "Mais de 1.800 técnicos validados",
      "Nossos analistas designam e validam",
      "Acompanhamento pelo Chamado Express",
      "Valor combinado por atendimento",
    ],
    cta: "Pedir orçamento de atendimento",
    msg: MSG.atendimento,
  },
];

/** Duas formas de usar: assinar o sistema ou contratar a rede. Valores sob proposta. */
const PlansSection = () => (
  <section id="planos" className="section bg-secondary">
    <div className="container-site">
      <SectionHeading eyebrow="Planos" title="Duas formas de trabalhar com a gente" lead="O valor da mensalidade acompanha o tamanho da sua operação. Fale com a gente e receba uma proposta." />
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
        {options.map((o, i) => (
          <div key={o.name} className={`reveal card-site flex flex-col p-7 sm:p-9 ${o.featured ? "border-primary/50 ring-1 ring-primary/20" : ""}`}
            style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
            <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${o.featured ? "bg-primary text-white" : "bg-accent text-accent-foreground"}`}>{o.tag}</span>
            <h3 className="mt-4 text-2xl font-extrabold">{o.name}</h3>
            <p className="mt-2 text-muted-foreground">{o.text}</p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {o.items.map((it) => <li key={it} className="flex items-start gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{it}</li>)}
            </ul>
            <a href={whatsappLink(o.msg)} target="_blank" rel="noopener noreferrer" className={`mt-8 w-full ${o.featured ? "btn-primary" : "btn-ghost"}`}>
              <WhatsappIcon /> {o.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;

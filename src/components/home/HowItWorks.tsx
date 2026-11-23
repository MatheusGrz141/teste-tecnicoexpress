import { ClipboardList, FileCheck2, MapPinned, Receipt } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const steps = [
  { icon: ClipboardList, title: "Você abre o chamado", text: "Pelo Chamado Express ou pelo WhatsApp: endereço, problema e janela de atendimento." },
  { icon: MapPinned, title: "Designamos o técnico", text: "Nossa equipe escolhe um técnico validado perto do local e combina o horário." },
  { icon: FileCheck2, title: "Atendimento comprovado", text: "Check-in e check-out com horário, RAT, fotos e assinatura do responsável local." },
  { icon: Receipt, title: "Validação e fatura", text: "Um analista confere tudo antes de faturar. Você recebe a fatura e a planilha completa." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="section bg-secondary">
    <div className="container-site">
      <SectionHeading
        eyebrow="Como funciona"
        title="Do pedido à fatura em 4 passos"
        lead="Você só informa o que precisa. A operação, o técnico e a comprovação ficam com a gente."
      />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="reveal card-site relative" style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
            <span className="absolute right-5 top-4 text-4xl font-extrabold text-primary/15">{i + 1}</span>
            <div className="icon-tile"><s.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;

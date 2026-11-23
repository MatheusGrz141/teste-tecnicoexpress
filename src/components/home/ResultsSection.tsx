import { Link } from "react-router-dom";
import { ArrowRight, BadgeDollarSign, Clock3, ShieldCheck, TrendingUp, X, Check } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const gains = [
  { icon: BadgeDollarSign, title: "Sem custo fixo por cidade", text: "Você paga por chamado atendido, sem manter técnico, carro e diária em cada região." },
  { icon: Clock3, title: "Menos tempo da sua equipe", text: "Nada de caçar técnico, cobrar retorno e montar relatório. Seu time só acompanha." },
  { icon: ShieldCheck, title: "Serviço comprovado", text: "Horários, RAT assinada e fotos em cada chamado. Base sólida para cobrar o seu cliente final." },
  { icon: TrendingUp, title: "Cresça para novas regiões", text: "Aceite contratos fora da sua base: a rede de técnicos já está lá." },
];

const compare = [
  ["Técnico próprio ou indicação em cada cidade", "Rede de 1.800+ técnicos validados"],
  ["Status do chamado por telefone", "Situação em tempo real no Chamado Express"],
  ["Comprovação em papel ou foto solta", "Check-in, check-out, RAT e assinatura online"],
  ["Fechamento do mês em planilha manual", "Fatura e Excel completos gerados pelo sistema"],
];

const ResultsSection = () => (
  <section id="retorno" className="section bg-[hsl(var(--ink))] text-white">
    <div className="container-site">
      <SectionHeading
        light
        eyebrow="O retorno para você"
        title="Atenda mais, gaste menos e prove cada entrega"
        lead="Empresas de TI, redes de lojas e integradores usam a TECNICO EXPRESS para atender onde não têm equipe."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gains.map((g, i) => (
          <div key={g.title} className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-primary/50"
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
            <g.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-bold !text-white">{g.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{g.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-12 overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-2 bg-white/[0.06] text-xs font-semibold uppercase tracking-wider sm:text-sm">
          <p className="p-4 text-white/60">Sem a TECNICO EXPRESS</p>
          <p className="p-4 text-primary">Com a TECNICO EXPRESS</p>
        </div>
        {compare.map(([a, b]) => (
          <div key={a} className="grid grid-cols-2 border-t border-white/10 text-sm sm:text-base">
            <p className="flex gap-2 p-4 text-white/60"><X className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />{a}</p>
            <p className="flex gap-2 p-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 text-center">
        <Link to="/contato" className="btn-primary px-6 py-3.5">
          Quero um orçamento <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ResultsSection;

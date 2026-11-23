import { KeyboardEvent, useRef, useState } from "react";
import { BarChart3, CheckCircle2, ClipboardList, FileSignature, Radar } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const tabs = [
  {
    id: "abertura",
    img: "/sistema/cliente.png",
    icon: ClipboardList,
    label: "Abertura",
    title: "Abra chamados em segundos",
    text: "Sua operação ou seus operadores abrem o chamado com endereço, contato local e descrição. Tudo fica registrado com quem pediu e quando.",
    points: ["Acesso por empresa, com operadores próprios", "RAT e assinatura online configuradas por cliente", "App instalável no celular"],
  },
  {
    id: "acompanhamento",
    img: "/sistema/chamados.png",
    icon: Radar,
    label: "Acompanhamento",
    title: "Saiba onde cada chamado está",
    text: "Lista organizada por situação: aberto, agendado, em atendimento, pausado (com motivo), finalizado e validado. Atrasados sempre no topo.",
    points: ["Histórico de cada mudança", "Pausar, retomar e cancelar com motivo", "Busca por cliente, cidade ou descrição"],
  },
  {
    id: "comprovacao",
    img: "/sistema/tecnico-celular.png",
    phone: true,
    icon: FileSignature,
    label: "Comprovação",
    title: "Prova de que o serviço foi feito",
    text: "O técnico finaliza em etapas pelo celular: responsável local, o que foi feito, materiais, RAT e assinatura. Horários de check-in e check-out conferidos.",
    points: ["Comprovante com data e hora", "Materiais só com comprovante", "Pendências destacadas para o analista"],
  },
  {
    id: "financeiro",
    img: "/sistema/dashboard.png",
    icon: BarChart3,
    label: "Fatura e relatórios",
    title: "Fechamento sem planilha manual",
    text: "Chamados validados viram fatura. Exportações em Excel com check-in, check-out, valores e situação de cada atendimento.",
    points: ["Faturas com data de vencimento", "Planilhas .xlsx prontas para somar e filtrar", "Relatórios por período, cliente e técnico"],
  },
];

/** Abas acessíveis (setas do teclado trocam a aba) mostrando o que o Chamado Express entrega. */
const PlatformTabs = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = tabs[active];

  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    const next = (active + delta + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <section id="plataforma" className="section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Chamado Express"
          title={<>Todo atendimento <span className="gradient-text">visível e comprovado</span></>}
          lead="O sistema que usamos em cada chamado fica aberto para você. Sem ligar para perguntar como está."
        />

        <div role="tablist" aria-label="Recursos do Chamado Express" onKeyDown={onKey}
          className="reveal mx-auto mb-8 flex max-w-full gap-1 overflow-x-auto rounded-2xl border bg-secondary p-1.5 sm:w-fit [scrollbar-width:none]">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (refs.current[i] = el)}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`painel-${t.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                i === active ? "bg-white text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div key={tab.id} role="tabpanel" id={`painel-${tab.id}`} aria-labelledby={`tab-${tab.id}`}
          className="panel-in grid items-center gap-8 rounded-3xl border bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1.25fr]" style={{ boxShadow: "var(--shadow-card)" }}>
          <div>
            <div className="icon-tile"><tab.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">{tab.title}</h3>
            <p className="mt-3 text-muted-foreground sm:text-lg">{tab.text}</p>
            <ul className="mt-6 space-y-3">
              {tab.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {tab.phone ? (
              <div className="w-56 overflow-hidden rounded-[2rem] border-[6px] border-[hsl(var(--ink))] bg-white sm:w-64" style={{ boxShadow: "var(--shadow-hero)" }}>
                <img src={tab.img} alt={`Tela do Chamado Express no celular: ${tab.label.toLowerCase()}`} loading="lazy" className="w-full" />
              </div>
            ) : (
              <div className="w-full overflow-hidden rounded-2xl border bg-secondary" style={{ boxShadow: "var(--shadow-lift)" }}>
                <img src={tab.img} alt={`Tela do Chamado Express: ${tab.label.toLowerCase()}`} loading="lazy" className="w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformTabs;

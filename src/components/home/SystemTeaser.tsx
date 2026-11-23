import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { MSG, whatsappLink } from "@/lib/site";

const points = [
  "Seus clientes, técnicos e analistas em um só lugar",
  "Check-in, RAT e assinatura online pelo celular",
  "Faturas, triagem a pagar e a receber e Excel prontos",
  "Acessos por perfil e app instalável",
];

/** Chamada para empresas que querem assinar o sistema (mensalidade). */
const SystemTeaser = () => (
  <section className="section">
    <div className="container-site">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl border bg-secondary p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
        <div className="reveal">
          <span className="eyebrow">Para empresas de field service</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Tem equipe própria? <span className="gradient-text">Use o nosso sistema.</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            O Chamado Express que roda a nossa operação está disponível por mensalidade para a sua empresa gerenciar os próprios chamados.
          </p>
          <ul className="mt-6 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{p}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/chamado-express" className="btn-primary">Ver planos e recursos <ArrowRight className="h-4 w-4" /></Link>
            <a href={whatsappLink(MSG.sistema)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsappIcon /> Pedir demonstração</a>
          </div>
        </div>
        <div className="reveal overflow-hidden rounded-2xl border bg-white" style={{ ["--reveal-delay" as string]: "100ms", boxShadow: "var(--shadow-hero)" }}>
          <img src="/sistema/chamados.png" alt="Tela do sistema Chamado Express" loading="lazy" className="w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default SystemTeaser;

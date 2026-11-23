import { Link } from "react-router-dom";
import { ArrowRight, HardHat, LayoutDashboard, Wrench } from "lucide-react";

const paths = [
  {
    icon: Wrench,
    who: "Para quem precisa de atendimento",
    title: "Contratar técnicos",
    text: "Mandamos um técnico validado ao local, em qualquer cidade, com tudo comprovado.",
    cta: "Ver como contratar",
    href: "/area-cliente",
  },
  {
    icon: LayoutDashboard,
    who: "Para empresas de TI e field service",
    title: "Assinar o Chamado Express",
    text: "O nosso sistema na sua operação: seus clientes, seus técnicos e seus analistas, por mensalidade.",
    cta: "Conhecer o sistema",
    href: "/chamado-express",
    featured: true,
  },
  {
    icon: HardHat,
    who: "Para técnicos de informática",
    title: "Entrar na rede",
    text: "Receba chamados na sua região, com agenda flexível e valor combinado antes.",
    cta: "Quero ser técnico",
    href: "/area-tecnico",
  },
];

/** Logo após o topo: cada público acha o seu caminho em um clique. */
const AudiencePaths = () => (
  <section aria-label="Escolha o seu caminho" className="relative z-10 -mt-6 pb-4 sm:-mt-10">
    <div className="container-site grid gap-4 md:grid-cols-3">
      {paths.map((p, i) => (
        <Link
          key={p.href}
          to={p.href}
          className={`reveal card-site card-site-hover group flex flex-col ${p.featured ? "border-primary/50 ring-1 ring-primary/20" : ""}`}
          style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={p.featured ? "icon-tile bg-primary text-white" : "icon-tile"}><p.icon className="h-5 w-5" /></div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.who}</p>
          </div>
          <h2 className="mt-4 text-xl font-extrabold">{p.title}</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            {p.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export default AudiencePaths;

import { CheckCircle2, Clock, FileSignature, MapPin, UserCheck } from "lucide-react";

const steps = [
  { icon: Clock, label: "Chamado aberto", time: "08:12", done: true },
  { icon: UserCheck, label: "Técnico designado", time: "08:40", done: true },
  { icon: MapPin, label: "Check-in no local", time: "10:05", done: true },
  { icon: FileSignature, label: "RAT assinada pelo cliente", time: "11:32", done: false },
];

/** Ilustração de um chamado no Chamado Express (dados fictícios). */
const TicketMock = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,hsl(var(--primary)/0.18),transparent)]" aria-hidden />
    <div className="rounded-2xl border bg-white p-5 sm:p-6" style={{ boxShadow: "var(--shadow-hero)" }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-muted-foreground">CHEX-24817</p>
          <p className="mt-1 font-semibold text-[hsl(var(--ink))]">Troca de switch · Loja Centro</p>
          <p className="mt-0.5 text-sm text-muted-foreground">Uberlândia, MG</p>
        </div>
        <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">Em atendimento</span>
      </div>

      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                s.done ? "bg-primary text-white" : "border-2 border-dashed border-primary/40 text-primary"
              }`}
            >
              <s.icon className="h-4 w-4" />
            </span>
            <span className={`flex-1 text-sm ${s.done ? "font-medium text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
            <span className="font-mono text-xs text-muted-foreground">{s.done ? s.time : "—"}</span>
            {i < steps.length - 1 && <span className="sr-only">,</span>}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center gap-3 rounded-xl bg-secondary p-3">
        <img src="/logo.png" alt="" className="h-9 w-9 rounded-full" />
        <div className="flex-1 text-sm">
          <p className="font-semibold">Técnico validado</p>
          <p className="text-muted-foreground">a 6 km do local</p>
        </div>
        <CheckCircle2 className="h-5 w-5 text-primary" />
      </div>
    </div>

  </div>
);

export default TicketMock;

import { CalendarClock, Handshake } from "lucide-react";

/** Condições para técnicos (pagamento e valores). Usado em /area-tecnico e /acordos. */
const AcordosContent = () => (
  <div className="grid gap-5 md:grid-cols-2">
    <div className="reveal card-site">
      <div className="icon-tile"><CalendarClock className="h-5 w-5" /></div>
      <h3 className="mt-4 text-lg font-bold">Pagamentos e prazos</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><strong>Com NFS-e:</strong> 15 a 30 dias úteis</li>
        <li><strong>Sem NFS-e:</strong> 30 a 45 dias úteis</li>
        <li><strong>Primeiro atendimento:</strong> nossa equipe orienta você</li>
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        Desde 05/08/2025, por motivo de força maior, os prazos foram alterados provisoriamente. Em breve voltam a 7 a 14 dias.
      </p>
    </div>
    <div className="reveal card-site" style={{ ["--reveal-delay" as string]: "80ms" }}>
      <div className="icon-tile"><Handshake className="h-5 w-5" /></div>
      <h3 className="mt-4 text-lg font-bold">Valor de cada chamado</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Os chamados não têm valor fixo: cada caso é um caso, e negociamos de forma justa o valor de cada atendimento antes de você aceitar.
      </p>
    </div>
  </div>
);

export default AcordosContent;

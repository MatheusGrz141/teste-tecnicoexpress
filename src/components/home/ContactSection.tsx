import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import SectionHeading from "@/components/site/SectionHeading";
import { SITE, whatsappLink } from "@/lib/site";

const needs = ["Contratar atendimento técnico", "Assinar o sistema Chamado Express", "Contrato recorrente de atendimento", "Quero ser técnico", "Outro assunto"];

/** Formulário sem servidor: monta a mensagem e abre o WhatsApp (ou e-mail) já preenchido. */
const ContactSection = ({ heading = true }: { heading?: boolean }) => {
  const [form, setForm] = useState({ nome: "", empresa: "", cidade: "", tipo: needs[0], mensagem: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const text = () =>
    [
      `Olá! Sou ${form.nome}${form.empresa ? `, da ${form.empresa}` : ""}.`,
      `Assunto: ${form.tipo}`,
      form.cidade && `Cidade do atendimento: ${form.cidade}`,
      form.mensagem && `\n${form.mensagem}`,
    ].filter(Boolean).join("\n");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(text()), "_blank", "noopener");
  };
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(`Contato pelo site: ${form.tipo}`)}&body=${encodeURIComponent(text())}`;

  return (
    <section id="contato" className="section">
      <div className="container-site">
        {heading && (
          <SectionHeading eyebrow="Contato" title="Fale com a gente e receba um orçamento" lead="Resposta rápida em horário comercial. Conte o que precisa e onde." />
        )}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <aside className="reveal space-y-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="card-site card-site-hover flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1faa53] text-white"><WhatsappIcon /></span>
              <span><span className="block font-bold">WhatsApp</span><span className="text-sm text-muted-foreground">{SITE.phoneLabel} · o caminho mais rápido</span></span>
            </a>
            <a href={`mailto:${SITE.email}`} className="card-site card-site-hover flex items-center gap-4">
              <span className="icon-tile"><Mail className="h-5 w-5" /></span>
              <span className="min-w-0"><span className="block font-bold">E-mail</span><span className="block truncate text-sm text-muted-foreground">{SITE.email}</span></span>
            </a>
            <a href={`tel:+${SITE.whatsappNumber}`} className="card-site card-site-hover flex items-center gap-4">
              <span className="icon-tile"><Phone className="h-5 w-5" /></span>
              <span><span className="block font-bold">Telefone</span><span className="text-sm text-muted-foreground">{SITE.phoneLabel}</span></span>
            </a>
            <div className="card-site flex items-start gap-4">
              <span className="icon-tile"><MapPin className="h-5 w-5" /></span>
              <span><span className="block font-bold">Bases</span><span className="text-sm text-muted-foreground">{SITE.cities.join(" · ")}</span></span>
            </div>
          </aside>

          <form onSubmit={submit} className="reveal card-site grid gap-4 p-6 sm:grid-cols-2 sm:p-8" style={{ ["--reveal-delay" as string]: "80ms" }}>
            <label className="grid gap-1.5 text-sm font-medium">Seu nome *<input required className="field" value={form.nome} onChange={set("nome")} autoComplete="name" /></label>
            <label className="grid gap-1.5 text-sm font-medium">Empresa<input className="field" value={form.empresa} onChange={set("empresa")} autoComplete="organization" /></label>
            <label className="grid gap-1.5 text-sm font-medium">Cidade do atendimento<input className="field" value={form.cidade} onChange={set("cidade")} placeholder="Ex.: Campinas, SP" /></label>
            <label className="grid gap-1.5 text-sm font-medium">Assunto
              <select className="field" value={form.tipo} onChange={set("tipo")}>{needs.map((n) => <option key={n}>{n}</option>)}</select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">O que você precisa?
              <textarea rows={4} className="field resize-y" value={form.mensagem} onChange={set("mensagem")} placeholder="Descreva o serviço, quantidade de pontos e prazo." />
            </label>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <button type="submit" className="btn-whats flex-1"><WhatsappIcon /> Enviar pelo WhatsApp</button>
              <a href={mailto} className="btn-ghost flex-1"><Send className="h-4 w-4" /> Enviar por e-mail</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

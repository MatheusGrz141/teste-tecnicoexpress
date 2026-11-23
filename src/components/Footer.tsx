import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon } from "./ui/whatsapp";
import IconTex from "./IconTex";
import { NAV, SITE, whatsappLink } from "@/lib/site";

const social = [
  { href: SITE.social.instagram, label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
  { href: SITE.social.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
  { href: SITE.social.facebook, label: "Facebook", icon: <Facebook className="h-4 w-4" /> },
];

const Footer = () => (
  <footer className="bg-[hsl(var(--ink))] text-sm text-white/70">
    <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div className="space-y-4">
        <IconTex light size={40} />
        <p className="max-w-xs leading-relaxed">
          Field Service em todo o Brasil*, com técnicos validados e cada chamado acompanhado no Chamado Express.
        </p>
        <div className="flex gap-2">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-semibold text-white">Navegação</h4>
        <ul className="space-y-2.5">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link to={n.href} className="hover:text-white">{n.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-semibold text-white">Institucional</h4>
        <ul className="space-y-2.5">
          <li><Link to="/politica" className="hover:text-white">Política de privacidade</Link></li>
          <li><Link to="/acordos" className="hover:text-white">Acordos com técnicos</Link></li>
          <li><a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Entrar no sistema</a></li>
          <li><a href={SITE.techSignupUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Cadastro de técnico</a></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-semibold text-white">Contato</h4>
        <ul className="space-y-3">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-primary" /> {SITE.phoneLabel}
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-primary" /> {SITE.email}
            </a>
          </li>
          {SITE.cities.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {c}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name} · CNPJ {SITE.cnpj}</p>
        <p>* Onde houver técnicos cadastrados e validados. ** Para contrato firmado.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

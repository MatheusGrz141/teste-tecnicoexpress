import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import IconTex from "./IconTex";
import { NAV, SITE, whatsappLink } from "@/lib/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => void (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open ? "border-b bg-white/90 shadow-sm backdrop-blur-md" : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <IconTex size={38} />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-brand" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-px h-0.5 origin-center rounded-full bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            <LogIn className="h-4 w-4" /> Entrar
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2.5 text-sm">
            Contratar <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu do celular: abas em lista grande, fácil de tocar */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0">
          <nav aria-label="Principal (celular)" className="container-site flex h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto pb-6 pt-2">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold ${
                    isActive ? "bg-accent text-brand" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                {item.name}
                <ArrowRight className="h-4 w-4 opacity-40" />
              </NavLink>
            ))}
            <div className="mt-auto grid gap-2 pt-6">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Contratar pelo WhatsApp
              </a>
              <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                <LogIn className="h-4 w-4" /> Entrar no Chamado Express
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

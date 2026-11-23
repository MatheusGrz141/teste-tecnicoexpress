import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsappIcon } from "@/components/ui/whatsapp";
import { useReveal } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/site";

/** Estrutura comum das páginas: cabeçalho, conteúdo, rodapé e atalho fixo do WhatsApp. */
const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  useReveal();

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">{children}</main>
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 [&_svg]:h-7 [&_svg]:w-7"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

export default SiteLayout;

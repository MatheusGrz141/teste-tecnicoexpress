import { ReactNode } from "react";
import { WhatsappIcon } from "./ui/whatsapp";
import { whatsappLink } from "@/lib/site";

interface Props {
  title?: string;
  text?: string;
  children?: ReactNode;
}

/** Faixa laranja de chamada para ação. Sem `children`, mostra o botão de contratar. */
const CTASection = ({
  title = "Tem um atendimento para ontem?",
  text = "Mande o endereço e o problema. A gente encontra o técnico e você acompanha pelo Chamado Express.",
  children,
}: Props) => (
  <section className="section pt-0">
    <div className="container-site">
      <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-cta px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div aria-hidden className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-black/10" />
        <h2 className="relative text-3xl font-extrabold !text-white sm:text-4xl">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90 sm:text-lg">{text}</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {children ?? (
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-light px-6 py-3.5">
              <WhatsappIcon /> Contratar agora
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

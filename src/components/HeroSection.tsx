import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { WhatsappIcon } from "./ui/whatsapp";
import TicketMock from "./home/TicketMock";
import { whatsappLink } from "@/lib/site";

const trust = ["Mais de 1.800 técnicos validados", "Atendimento presencial em todo o Brasil*", "Cada chamado rastreado do início ao fim"];

const delay = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` });

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-28 sm:pt-36 lg:pb-24">
    <div className="container-site grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <span className="eyebrow reveal">Field Service + Chamado Express</span>
        <h1 className="reveal mt-5 text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[4rem]" style={delay(60)}>
          Seu técnico no local, <span className="gradient-text">em qualquer cidade.</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl" style={delay(120)}>
          Abra o chamado, nós encontramos o técnico mais próximo e você acompanha tudo no Chamado Express: check-in,
          relatório assinado e fatura, sem montar equipe própria.
        </p>

        <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={delay(180)}>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
            <WhatsappIcon /> Contratar pelo WhatsApp
          </a>
          <Link to="/chamado-express" className="btn-ghost px-6 py-3.5">
            Ver como funciona <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="reveal mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-1" style={delay(240)}>
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal" style={delay(200)}>
        <TicketMock />
      </div>
    </div>
  </section>
);

export default HeroSection;

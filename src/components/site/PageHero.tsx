import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}

/** Topo das páginas internas: título, texto de apoio, ações e (opcional) um bloco ao lado. */
const PageHero = ({ eyebrow, title, lead, children, aside }: Props) => (
  <section className="relative overflow-hidden bg-gradient-hero pb-14 pt-28 sm:pb-20 sm:pt-36">
    <div className={`container-site grid items-center gap-10 ${aside ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
      <div className={aside ? "" : "mx-auto max-w-3xl text-center"}>
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl" style={{ ["--reveal-delay" as string]: "60ms" }}>
          {title}
        </h1>
        <p className="reveal mt-5 text-lg text-muted-foreground sm:text-xl" style={{ ["--reveal-delay" as string]: "120ms" }}>
          {lead}
        </p>
        {children && (
          <div className={`reveal mt-8 flex flex-col gap-3 sm:flex-row ${aside ? "" : "sm:justify-center"}`} style={{ ["--reveal-delay" as string]: "180ms" }}>
            {children}
          </div>
        )}
      </div>
      {aside && <div className="reveal" style={{ ["--reveal-delay" as string]: "200ms" }}>{aside}</div>}
    </div>
  </section>
);

export default PageHero;

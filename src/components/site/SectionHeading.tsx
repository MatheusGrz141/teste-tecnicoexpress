import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ eyebrow, title, lead, center = true, light = false }: Props) => (
  <div className={`reveal mb-10 max-w-2xl sm:mb-14 ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && <span className={light ? "eyebrow bg-white/15 text-white" : "eyebrow"}>{eyebrow}</span>}
    <h2 className={`mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${light ? "!text-white" : ""}`}>{title}</h2>
    {lead && <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>{lead}</p>}
  </div>
);

export default SectionHeading;

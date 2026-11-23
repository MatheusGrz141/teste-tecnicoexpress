import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

/** Grade de cards ícone + título + texto, usada nas páginas internas. */
const FeatureGrid = ({ items }: { items: Feature[] }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((f, i) => (
      <article key={f.title} className="reveal card-site card-site-hover" style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}>
        <div className="icon-tile"><f.icon className="h-5 w-5" /></div>
        <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
      </article>
    ))}
  </div>
);

export default FeatureGrid;

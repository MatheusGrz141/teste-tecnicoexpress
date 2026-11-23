import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1800, prefix: "", suffix: "+", label: "técnicos cadastrados" },
  { value: 10, prefix: "+", suffix: " mil", label: "chamados atendidos" },
  { value: 3, prefix: "", suffix: " bases", label: "regionais de operação" },
  { value: 1, prefix: "", suffix: " painel", label: "para acompanhar tudo" },
];

/** Conta de 0 até o valor quando aparece na tela (uma vez; sem animação se o usuário reduz movimento). */
const CountUp = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1200, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{n.toLocaleString("pt-BR")}</span>;
};

const StatsBar = () => (
  <section aria-label="Números" className="border-y bg-white">
    <div className="container-site grid grid-cols-2 divide-border lg:grid-cols-4 lg:divide-x">
      {stats.map((s) => (
        <div key={s.label} className="reveal px-2 py-8 text-center sm:py-10">
          <p className="text-3xl font-extrabold text-[hsl(var(--ink))] sm:text-4xl">
            {s.prefix}
            <CountUp to={s.value} />
            <span className="text-primary">{s.suffix}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;

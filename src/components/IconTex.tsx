import { Link } from "react-router-dom";

interface IconTexProps {
  size?: number;
  light?: boolean;
  className?: string;
}

/** Logo: imagem + nome. `light` para fundo escuro. */
const IconTex = ({ size = 40, light = false, className = "" }: IconTexProps) => (
  <Link to="/" aria-label="TECNICO EXPRESS, página inicial" className={`flex items-center gap-2.5 ${className}`}>
    <img src="/logo.png" alt="" width={size} height={size} className="rounded-full object-contain" />
    <span className="flex flex-col leading-none">
      <span className={`text-base font-extrabold tracking-tight sm:text-lg ${light ? "text-white" : "text-[hsl(var(--ink))]"}`}>
        TECNICO <span className="text-primary">EXPRESS</span>
      </span>
      <span className={`mt-1 text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted-foreground"}`}>
        Anytime, Anywhere
      </span>
    </span>
  </Link>
);

export default IconTex;

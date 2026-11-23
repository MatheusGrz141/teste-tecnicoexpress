import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-muted-foreground">O endereço pode ter mudado. Volte ao início ou fale com a gente.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="btn-primary">Ir para o início</Link>
        <Link to="/contato" className="btn-ghost">Contato</Link>
      </div>
    </section>
  </SiteLayout>
);

export default NotFound;

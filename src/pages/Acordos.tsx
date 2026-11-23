import { LogIn, UserPlus } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import AcordosContent from "@/components/site/AcordosContent";
import { SITE } from "@/lib/site";

const Acordos = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Acordos"
      title="Transparência com nossos técnicos"
      lead="Condições de pagamento e de valores que valem para todos os atendimentos da rede."
    >
      <a href={SITE.techSignupUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5"><UserPlus className="h-4 w-4" /> Cadastrar-se</a>
      <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3.5"><LogIn className="h-4 w-4" /> Já sou cadastrado</a>
    </PageHero>
    <section className="section pt-4">
      <div className="container-site max-w-4xl"><AcordosContent /></div>
    </section>
  </SiteLayout>
);

export default Acordos;

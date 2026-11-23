import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/FAQSection";

const Contato = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Contato"
      title={<>Vamos colocar um técnico <span className="gradient-text">onde você precisa</span></>}
      lead="Conte o serviço e a cidade. Respondemos com disponibilidade e valor antes de qualquer atendimento."
    />
    <div className="-mt-10 sm:-mt-14">
      <ContactSection heading={false} />
    </div>
    <FAQSection />
  </SiteLayout>
);

export default Contato;

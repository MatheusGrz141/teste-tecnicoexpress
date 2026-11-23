import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/site/SectionHeading";

const faqs = [
  { q: "Quanto custa um chamado?", a: "Cada chamado é avaliado pelo tipo de serviço, cidade e prazo. Envie os detalhes pelo WhatsApp ou pelo formulário e respondemos com o valor antes de qualquer atendimento." },
  { q: "Vocês atendem na minha cidade?", a: "Atendemos em todo o Brasil onde houver técnicos cadastrados e validados. Informe a cidade no contato e confirmamos a disponibilidade." },
  { q: "Como acompanho o atendimento?", a: "Pelo Chamado Express: você vê a situação de cada chamado, o técnico designado, os horários de check-in e check-out e os documentos do atendimento." },
  { q: "Que comprovação recebo do serviço?", a: "RAT preenchida, assinatura do responsável local, fotos e horários registrados. Tudo validado por um analista antes de faturar." },
  { q: "Preciso fechar contrato para começar?", a: "Não. Você pode começar com um chamado avulso. Para volume recorrente, montamos um contrato com condições e prioridade próprias." },
  { q: "Posso usar o sistema com meus próprios técnicos?", a: "Sim. O Chamado Express é oferecido por mensalidade para empresas que têm equipe própria: você cadastra seus clientes, técnicos e analistas. Nossa equipe faz a implantação e dá suporte." },
  { q: "Sou técnico. Como entro na rede?", a: "Acesse a página Para técnicos e faça seu cadastro. Após a validação, você passa a receber chamados na sua região." },
];

const FAQSection = () => (
  <section id="duvidas" className="section bg-secondary">
    <div className="container-site max-w-3xl">
      <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
      <Accordion type="single" collapsible className="reveal space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`} className="rounded-2xl border bg-white px-5 data-[state=open]:border-primary/40">
            <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

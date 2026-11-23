import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";

const blocks = [
  { title: "1. Coleta e uso de dados", body: <p>Coletamos apenas os dados essenciais para a prestação dos serviços, como nome, telefone, e-mail e endereço.</p> },
  {
    title: "2. Finalidade da coleta",
    body: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Agendamento de serviços</li>
        <li>Atendimento ao cliente</li>
        <li>Comunicação sobre suporte e manutenções</li>
        <li>Cumprimento de obrigações legais</li>
      </ul>
    ),
  },
  { title: "3. Armazenamento e segurança", body: <p>Seus dados são armazenados com segurança e não são compartilhados com terceiros sem seu consentimento, salvo quando exigido por lei.</p> },
  {
    title: "4. Direitos dos titulares",
    body: (
      <>
        <p>Você pode solicitar a qualquer momento:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Acesso aos seus dados</li>
          <li>Correção de informações</li>
          <li>Exclusão dos dados armazenados</li>
        </ul>
      </>
    ),
  },
];

const Politica = () => (
  <SiteLayout>
    <PageHero eyebrow="LGPD" title="Política de privacidade" lead="A TECNICO EXPRESS protege os dados de clientes e técnicos seguindo a Lei Geral de Proteção de Dados." />
    <section className="section pt-4">
      <div className="container-site max-w-3xl space-y-4">
        {blocks.map((b) => (
          <article key={b.title} className="reveal card-site">
            <h2 className="text-lg font-bold">{b.title}</h2>
            <div className="mt-2 leading-relaxed text-muted-foreground">{b.body}</div>
          </article>
        ))}
        <article className="reveal rounded-2xl bg-gradient-cta p-6 text-white">
          <h2 className="text-lg font-bold !text-white">5. Contato do encarregado (DPO)</h2>
          <dl className="mt-3 grid gap-1 text-white/90">
            <div><dt className="inline font-semibold">Nome: </dt><dd className="inline">Adriano de Oliveira</dd></div>
            <div><dt className="inline font-semibold">E-mail: </dt><dd className="inline"><a className="underline" href="mailto:lgpd@tecnicoexpress.com.br">lgpd@tecnicoexpress.com.br</a></dd></div>
            <div><dt className="inline font-semibold">Telefone: </dt><dd className="inline">(67) 99169-2186</dd></div>
          </dl>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default Politica;

/** Dados de contato e links usados em todo o site: altere aqui, vale para todas as páginas. */
export const SITE = {
  name: "TECNICO EXPRESS",
  whatsappNumber: "5531991671286",
  phoneLabel: "(31) 99167-1286",
  email: "contato@tecnicoexpress.com.br",
  cnpj: "28.559.702/0001-29",
  cities: ["Belo Horizonte, MG", "Campinas, SP", "Campo Grande, MS"],
  loginUrl: "https://chamadoexpress.com.br/tex/login",
  techSignupUrl: "https://chamadoexpress.com.br/tex/technical/new",
  techGroupUrl: "https://chat.whatsapp.com/DFq1xRjSA38HEstx9rbrdX",
  social: {
    instagram: "https://www.instagram.com/tecnicoexpress.tex/",
    linkedin: "https://www.linkedin.com/company/tecnicoexpress/",
    facebook: "https://www.facebook.com/share/1SCjhjeNFF/",
  },
};

export const whatsappLink = (
  text = "Olá! Quero contratar o atendimento da TECNICO EXPRESS."
) => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const MSG = {
  atendimento: "Olá! Quero contratar atendimento técnico da TECNICO EXPRESS.",
  sistema: "Olá! Quero conhecer o sistema Chamado Express para a minha empresa.",
  tecnico: "Olá! Sou técnico e quero entrar na rede TECNICO EXPRESS.",
};

export const NAV = [
  { name: "Início", href: "/" },
  { name: "Contratar técnicos", href: "/area-cliente" },
  { name: "Sistema", href: "/chamado-express" },
  { name: "Seja técnico", href: "/area-tecnico" },
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Contato", href: "/contato" },
];

export type Priority = "high" | "medium" | "low";

export const goals = [
  {
    status: "fase atual",
    title: "Crescer no estágio",
    description:
      "Absorver tudo que puder, contribuir de verdade e transformar teoria em experiência.",
  },
  {
    status: "em progresso",
    title: "Concluir Java + JS",
    description:
      "Expandir meu repertório e ficar mais confortável construindo para diferentes ambientes.",
  },
  {
    status: "próximo checkpoint",
    title: "Publicar mais projetos",
    description:
      "Tirar ideias do rascunho, documentar o processo e compartilhar cada evolução.",
  },
  {
    status: "modo foco",
    title: "Fortalecer fundamentos",
    description:
      "Estruturas de dados, algoritmos e arquitetura: a base que sustenta códigos melhores.",
  },
  {
    status: "missão contínua",
    title: "Fluência em inglês",
    description:
      "Abrir portas, aprender sem fronteiras e conversar com o mundo da tecnologia.",
  },
];

export const studyGroups: Array<{
  number: string;
  category: string;
  items: Array<{
    name: string;
    priority: Priority;
    priorityLabel: "alta" | "média" | "baixa";
  }>;
}> = [
  {
    number: "01",
    category: "Programação",
    items: [
      { name: "Estruturas de dados", priority: "high", priorityLabel: "alta" },
      { name: "Algoritmos", priority: "high", priorityLabel: "alta" },
      { name: "Banco de dados", priority: "high", priorityLabel: "alta" },
      { name: "POO", priority: "medium", priorityLabel: "média" },
    ],
  },
  {
    number: "02",
    category: "Linguagens",
    items: [
      { name: "Java", priority: "high", priorityLabel: "alta" },
      { name: "JavaScript", priority: "high", priorityLabel: "alta" },
      { name: "Python", priority: "medium", priorityLabel: "média" },
      { name: "C", priority: "low", priorityLabel: "baixa" },
    ],
  },
  {
    number: "03",
    category: "Desenvolvimento pessoal",
    items: [
      { name: "Inglês técnico", priority: "high", priorityLabel: "alta" },
      { name: "Comunicação", priority: "medium", priorityLabel: "média" },
      { name: "Organização", priority: "medium", priorityLabel: "média" },
      { name: "Networking", priority: "low", priorityLabel: "baixa" },
    ],
  },
];

export const projects = [
  {
    name: "RotaApp",
    year: "2024",
    monogram: "RA",
    label: "mobilidade que conecta",
    description:
      "Um app pensado para organizar rotas e facilitar a rotina do transporte escolar.",
    technologies: ["Produto", "UX", "Mobilidade"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Bot de caronas",
    year: "2024",
    monogram: ">_",
    label: "mensagem enviada",
    description:
      "Automação no WhatsApp para conectar pessoas, combinar trajetos e simplificar caronas.",
    technologies: ["Python", "Twilio", "WhatsApp"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "MAMMAIA",
    year: "2025",
    monogram: "AI",
    label: "tecnologia que acolhe",
    description:
      "Plataforma com IA para apoiar o acompanhamento de exames mamários com mais clareza.",
    technologies: ["IA", "Healthtech", "Impacto social"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    value: "/in/danielly",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    label: "GitHub",
    value: "@danielly",
    href: "https://github.com/",
    external: true,
  },
  {
    label: "E-mail",
    value: "vamos conversar",
    href: "mailto:danielly@email.com",
    external: false,
  },
];

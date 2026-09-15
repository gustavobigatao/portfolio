// Edite este arquivo para atualizar os projetos exibidos no portfólio.
// image/video: caminhos para mídia (ex: "/projects/bgtfit-cover.jpg"). Deixe "" enquanto não tiver.
// github/demo: links externos. Deixe "" enquanto não tiver.

export const projects = [
  {
    id: "bgt-fit",
    name: "BGT Fit",
    featured: true,
    accent: "#b3211c",
    description:
      "BGT Fit é um app de treino para Personal Trainers e seus alunos, em Flutter com Supabase no backend. O personal monta os treinos, mantém uma biblioteca de exercícios (padrão e personalizados) e acompanha as avaliações físicas dos alunos. O aluno executa o treino, registra séries e cargas, e acompanha evolução, XP e conquistas. A assinatura PRO, via Mercado Pago, libera um boneco 3D interativo de anatomia muscular e um ranking de constância entre os alunos.",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "3D", "Mercado Pago", "Git"],
    image: "/projects/bgt-fit-logo.png",
    // TODO: trocar pelo vídeo de demonstração quando quiser voltar a mostrá-lo (ex: "/projects/bgt-fit-demo.mp4")
    video: "",
    github: "",
    githubPrivate: true, // repositório privado, ainda em fase de testes
    demo: "",
  },
  {
    id: "aureon",
    name: "Aureon",
    featured: false,
    accent: "#6ba384",
    description:
      "O Aureon é um app educacional para preparação de vestibular, com uma trilha gamificada por matéria: um mapa de fases com questões de múltipla escolha e de preencher lacuna, XP e moedas. Foi desenvolvido em equipe, junto com a Unicive e a UEM, multi-tenant para atender as duas instituições. Entrei principalmente na parte de Flutter: construí a feature de preencher lacuna e depois trabalhei nos testes automatizados end-to-end.",
    collaborative: true,
    technologies: ["Flutter", "Dart", "Supabase", "Provider", "Git"],
    image: "/projects/aureon-logo.png",
    // TODO: inserir vídeo de demonstração do Aureon aqui
    video: "",
    github: "",
    githubPrivate: true, // repositório privado (projeto institucional com a Unicive/UEM)
    demo: "",
  },
  {
    id: "apinasa",
    name: "ApiNasa",
    featured: false,
    accent: "#c9564a",
    description:
      "Projeto que fiz com um colega pra praticar Python e FastAPI: o NASA Explorer, um painel que integra várias APIs públicas da NASA, como APOD, Asteroids NeoWs, DONKI, EONET, EPIC e Satellite Situation Center, entre outras.",
    collaborative: true,
    technologies: ["Python", "FastAPI", "REST API"],
    image: "/projects/apinasa-cover.png",
    // TODO: inserir vídeo de demonstração do ApiNasa aqui
    video: "",
    github: "https://github.com/JoaoGarciaBarros/ApiNasa",
    demo: "",
  },
];

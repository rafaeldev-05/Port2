import type { Project, Service, ServiceFeature, SkillCategory, TimelineItem } from '@/types';

export const socialLinks = {
  github: 'https://github.com/rafaeldev-05',
  tiktok: 'https://www.tiktok.com/@rafael_techsoftware',
  instagram: 'https://www.instagram.com/rafaelfreitasdev05/',
  youtube: 'https://www.youtube.com/@rafaelfreitasdev05',
  linkedin: 'https://www.linkedin.com/in/rafaeldev05',
  email: 'mailto:rafaelfreitas1009@gmail.com',
  whatsapp: 'https://wa.me/5598992213045',
  whatsappBudget: 'https://wa.me/5598992213045?text=Ol%C3%A1%2C%20Rafael%21%20Tenho%20interesse%20em%20solicitar%20um%20or%C3%A7amento%20gratuito%20para%20um%20projeto%20digital.'
};

export const projects: Project[] = [
  {
    title: 'Warehouse Gym',
    titlePt: 'Warehouse Gym',
    description:
      'Institutional gym website with an integrated online store, branded products, and a responsive digital experience.',
    descriptionPt:
      'Site institucional para academia com loja virtual integrada, produtos da marca e experiência digital responsiva.',
    icon: 'fas fa-dumbbell',
    links: [{ href: 'https://warehousegym.vercel.app/', label: 'View Warehouse Gym website', icon: 'fas fa-external-link-alt' }],
    tags: ['React', 'E-commerce', 'JavaScript']
  },
  {
    title: 'Eurotrip Planner',
    titlePt: 'Eurotrip Planner',
    description:
      'Web platform for travel planning, with itinerary organization, task checklists, and progress tracking.',
    descriptionPt:
      'Plataforma web para planejamento de viagens, com organização de roteiros, tarefas e acompanhamento de progresso.',
    icon: 'fas fa-shopping-cart',
    links: [
      { href: 'https://eurotrip-plan.vercel.app/', label: 'View Eurotrip Planner', icon: 'fas fa-external-link-alt' },
      { href: 'https://github.com/rafaeldev-05/Eurotrip_Plan', label: 'View Eurotrip Planner code', icon: 'fab fa-github' }
    ],
    tags: ['React', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'ESG Platform',
    titlePt: 'Plataforma ESG',
    description: 'Modern ESG platform with useful features, a polished interface, and a focus on data organization.',
    descriptionPt: 'Plataforma ESG moderna com recursos úteis, interface bem cuidada e foco em organização de dados.',
    icon: 'fas fa-blog',
    links: [
      { href: 'https://ecoflow-g2k6.vercel.app', label: 'View ESG Platform', icon: 'fas fa-external-link-alt' },
      { href: 'https://github.com/rafaeldev-05/Ecoflow', label: 'View ESG Platform code', icon: 'fab fa-github' }
    ],
    tags: ['Next.js', 'Node.js', 'JavaScript', 'Vite']
  }
];

export const services: Service[] = [
  {
    title: 'Institutional Websites',
    titlePt: 'Sites Institucionais',
    description: 'Professional, personalized websites for companies that want a solid and trustworthy online presence.',
    descriptionPt: 'Sites profissionais e personalizados para empresas que desejam ter uma presença online sólida e confiável.',
    icon: 'fas fa-building'
  },
  {
    title: 'Optimized Landing Pages',
    titlePt: 'Landing Pages Otimizadas',
    description: 'High-conversion pages for campaigns, lead capture and presentation of products or services.',
    descriptionPt: 'Páginas de alta conversão para campanhas, captação de leads e apresentação de produtos ou serviços.',
    icon: 'fas fa-bullseye'
  },
  {
    title: 'Online Stores / E-commerce',
    titlePt: 'Lojas Virtuais / E-commerce',
    description: 'Complete platforms for online sales, with a modern and functional shopping experience.',
    descriptionPt: 'Plataformas completas para venda online, com experiência de compra moderna e funcional.',
    icon: 'fas fa-cart-shopping'
  },
  {
    title: 'Custom Systems',
    titlePt: 'Sistemas Personalizados',
    description: 'Tailored solutions for specific business needs, bringing efficiency, automation, and innovation.',
    descriptionPt: 'Soluções sob medida para atender às necessidades específicas do negócio, com eficiência, automação e inovação.',
    icon: 'fas fa-layer-group'
  },
  {
    title: 'Android and iOS Apps',
    titlePt: 'Aplicativos Android e iOS',
    description: 'Modern and functional mobile apps for Android and iOS, designed to engage users.',
    descriptionPt: 'Desenvolvimento de aplicativos modernos e funcionais para Android e iOS, projetados para engajar usuários.',
    icon: 'fas fa-mobile-screen-button'
  }
];

export const serviceFeatures: ServiceFeature[] = [
  { text: 'Free quote', textPt: 'Orçamento gratuito', icon: 'fas fa-comment-dollar' },
  { text: 'Responsive design', textPt: 'Design responsivo', icon: 'fas fa-display' },
  { text: 'Tailored solutions', textPt: 'Soluções sob medida', icon: 'fas fa-sliders' },
  { text: 'Integrations & automations', textPt: 'Integrações e automações', icon: 'fas fa-diagram-project' },
  { text: 'Performance & scalability', textPt: 'Performance e escalabilidade', icon: 'fas fa-gauge-high' },
  { text: 'Android and iOS', textPt: 'Android e iOS', icon: 'fas fa-mobile-screen-button' }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    titlePt: 'Frontend',
    skills: [
      { name: 'React', percent: 95 },
      { name: 'Vue.js', percent: 85 },
      { name: 'TypeScript', percent: 90 },
      { name: 'Next.js', percent: 88 }
    ]
  },
  {
    title: 'Backend',
    titlePt: 'Backend',
    skills: [
      { name: 'Node.js', percent: 92 },
      { name: 'Express', percent: 90 },
      { name: 'Spring Boot', percent: 85 },
      { name: 'PostgreSQL', percent: 80 }
    ]
  },
  {
    title: 'Tools & Others',
    titlePt: 'Outras Ferramentas',
    skills: [
      { name: 'Git', percent: 95 },
      { name: 'Docker', percent: 75 },
      { name: 'AWS', percent: 70 },
      { name: 'Figma', percent: 88 }
    ]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2025 - Present',
    badge: 'Current',
    title: 'Software Engineer',
    titlePt: 'Engenheiro de Software',
    company: 'Emserh - Empresa Maranhense de Serviços Hospitalares.',
    description:
      'Working as a Software Engineer, developing and maintaining backend and frontend applications, intelligent automations, and integrated production systems. Responsible for building APIs, services, and system integrations using Node.js, Next.js, relational databases, and cloud infrastructure, with a focus on scalability, reliability, and automation.',
    descriptionPt:
      'Atuo como Engenheiro de Software no desenvolvimento e sustentação de aplicações backend e frontend, automações inteligentes e sistemas integrados em ambiente de produção. Sou responsável pela criação de APIs, serviços e integrações utilizando Node.js, Next.js, bancos de dados relacionais e infraestrutura em cloud, com foco em escalabilidade, confiabilidade e automação.',
    achievements: [
      { text: 'Implemented scalable and reliable system architectures', textPt: 'Implementação de arquiteturas escaláveis e confiáveis' },
      { text: 'Automated deployments and CI/CD pipelines, improving performance by 40%', textPt: 'Automação de deploys e pipelines CI/CD, aumentando a performance em 40%' },
      { text: 'Deployed 20+ production apps', textPt: 'Deploy de mais de 20 aplicações em produção' }
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'AWS', 'Jenkins', 'Coolify', 'GitHub Actions', 'n8n']
  },
  {
    year: '2023 - 2025',
    title: 'Junior Developer',
    titlePt: 'Desenvolvedor Júnior',
    company: 'Projeta Engenharia',
    description:
      'Worked on software development focused on automation, system integration, and corporate applications. Co-developed a mobile application for Daily Construction Reports (RDO), building user interfaces, integrating backend APIs, and participating in agile development processes.',
    descriptionPt:
      'Atuei no desenvolvimento de soluções de software voltadas à automação de processos, integração de sistemas e aplicações corporativas. Co-desenvolvi um aplicativo mobile para Registro Diário de Obras (RDO), trabalhando na criação de interfaces, integração com APIs backend e atuando em ambiente ágil.',
    achievements: [
      { text: 'Developed mobile and web applications for corporate use', textPt: 'Desenvolvimento de aplicações mobile e web corporativas' },
      { text: 'Worked on performance improvements and system integrations', textPt: 'Atuação em melhorias de performance e integração de sistemas' }
    ],
    tags: ['React Native', 'Flutter', 'GitHub', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Spring Boot', 'Java']
  },
  {
    year: '2023 - 2023',
    title: 'Intern Developer',
    titlePt: 'Estagiário de Desenvolvimento',
    company: 'Projeta Engenharia',
    description:
      'Supported software development activities, assisting in requirements analysis, data organization, automation tasks, and implementation of internal solutions. Gained a solid foundation in software engineering, system analysis, and development best practices.',
    descriptionPt:
      'Atuei no suporte ao desenvolvimento de software, auxiliando na análise de requisitos, organização e automação de dados e implementação de soluções internas. Nesse período, adquiri base sólida em engenharia de software, análise de sistemas e boas práticas de desenvolvimento.',
    achievements: [
      { text: 'Supported development of internal systems and tools', textPt: 'Suporte ao desenvolvimento de sistemas e ferramentas internas' },
      { text: 'Learned modern frameworks', textPt: 'Aprendizado de frameworks modernos' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Django']
  }
];

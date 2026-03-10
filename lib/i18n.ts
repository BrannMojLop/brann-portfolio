export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

export const messages = {
  en: {
    nav: {
      home: "Home",
      systems: "Systems",
      engineering: "Engineering",
      about: "About",
      contact: "Contact",
    },
    footer: {
      copy: "Engineering portfolio.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    common: {
      language: "Language",
      theme: "Theme",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      liveProfile: "Live profile",
      architectureNotes: "View system architecture",
    },
    home: {
      eyebrow: "SYSTEMS ENGINEERING PORTFOLIO",
      title: "Enterprise platforms and backend systems built for real-world operations.",
      intro: [
        "Backend engineer specialized in ERP platforms, APIs, and financial systems using Python and FastAPI.",
        "This portfolio documents production software — including Businext ERP and the TR0V1 credit platform — with a focus on domain architecture, service layers, and operational reliability.",
      ],
      stackLabel: "TECHNICAL FOCUS",
      profileBadge: "ENGINEERING PROFILE",
      exploreSystems: "Explore Production Systems",
      readNotes: "Explore Engineering",
      signalBoard: "Core Engineering Areas",
      matrixTitle: "Types of systems I work on",
      matrixNote:
        "Platforms and systems where I apply backend architecture, domain modeling, and engineering decisions for real-world operations.",
      majorSystemsTitle: "Platforms in Production",
      majorSystemsDesc:
        "Businext ERP and the TR0V1 credit platform as enterprise systems built for real-world operations, including architectural decisions, technical constraints, and operational outcomes.",
      architectureSignals: [
        {
          title: "BUSINESS DOMAINS",
          value: "Finance | HR | Sales | Inventory",
          note: "Business process modeling and real operational rules.",
        },
        {
          title: "BACKEND ARCHITECTURE",
          value: "FastAPI + Service Layer",
          note: "Backend architecture focused on APIs, explicit business logic, and modular services.",
        },
        {
          title: "FINANCIAL SYSTEMS",
          value: "Credit, payments, interest, and reconciliation",
          note: "Financial workflows with operational traceability and transactional consistency.",
        },
        {
          title: "PLATFORM SCALE",
          value: "Businext ERP with 125K+ LOC",
          note: "Enterprise platform in production with continuous evolution.",
        },
      ],
      focusTracks: [
        {
          name: "ERP PLATFORMS",
          description:
            "Enterprise systems that integrate finance, sales, inventory, human resources, and operational workflows into a single platform.",
        },
        {
          name: "API ARCHITECTURE",
          description:
            "Backend APIs and service layers designed to support business rules, transaction workflows, and maintainable platform evolution.",
        },
        {
          name: "FINANCIAL PLATFORMS",
          description:
            "Systems for credit, payments, interest, reconciliation, and account statements where operational consistency is part of the architecture.",
        },
      ],
    },
    systems: {
      title: "Systems designed for real operations",
      description:
        "Enterprise and financial platforms built from real business needs, with architecture decisions focused on maintainability, traceability, operational reliability, and explicit domain boundaries.",
      solutionLabel: "What it solves",
      stackLabel: "Core technologies",
      architectureLabel: "Architectural approach",
      impactLabel: "Impact",
    },
    engineering: {
      title: "Engineering",
      description:
        "Engineering notes and architecture decisions drawn from building real enterprise systems.",
      intro:
        "This section documents ideas, patterns, and technical decisions that emerged while designing ERP platforms, financial systems, and backend architectures in production.",
      metadata: {
        publishedOn: "Published",
        readingTime: "Reading time",
      },
      themes: {
        architecture: {
          title: "Architecture",
          description:
            "Boundaries, service decomposition, and platform decisions shaped by real ERP constraints.",
        },
        backendEngineering: {
          title: "Backend Engineering",
          description:
            "Implementation patterns for service layers, APIs, and operational reliability in production.",
        },
        financialSystems: {
          title: "Financial Systems",
          description:
            "Credit, reconciliation, and transactional controls where correctness matters more than CRUD.",
        },
      },
    },
    about: {
      title: "About",
      description:
        "Senior backend engineer and systems architect focused on enterprise platforms, ERP systems, API architecture, and production software for finance and operations.",
      metadata: {
        title: "About",
        description:
          "Professional engineering profile of Brandon Mojica Lopez, focused on backend architecture, ERP platforms, and production systems.",
      },
      intro: {
        eyebrow: "ENGINEERING PROFILE",
        title: "Backend Engineer and Systems Architect focused on enterprise platforms, API architecture, and critical software for finance and operations.",
        lead:
          "I design and build systems where operational clarity, domain modeling, and backend reliability matter more than surface-level complexity.",
        paragraphs: [
          "My work is centered on ERP platforms, financial systems, and API-driven backend platforms used daily by operational and administrative teams.",
          "That means translating real business rules into stable architecture, defining service boundaries, and building backend platforms that can evolve without disrupting operations.",
        ],
        stats: [
          { value: "5+ years", label: "building production business software" },
          { value: "200k+ LOC", label: "evolved inside Businext ERP" },
          { value: "2019 - Present", label: "leading systems at Elements Of Steel" },
          { value: "2 production platforms", label: "Businext ERP + TR0V1 Credit Platform" },
        ],
        badges: ["ERP Platforms", "Backend Architecture", "Financial Systems", "FastAPI", "AWS"],
      },
      build: {
        title: "What I Build",
        description:
          "Platforms shaped by operational constraints, not demo assumptions.",
        items: [
          {
            title: "Enterprise platforms",
            description:
              "ERP and internal systems that integrate finance, sales, inventory, human resources, and reporting into a single operational model.",
          },
          {
            title: "Backend service layers",
            description:
              "API platforms with explicit business logic, traceable state transitions, and service boundaries that support long-term maintainability.",
          },
          {
            title: "Financial workflows",
            description:
              "Credit, payments, reconciliation, statements, and account controls where correctness and auditability are part of the architecture.",
          },
        ],
      },
      background: {
        title: "Professional Background",
        description:
          "A profile shaped by building systems inside live business operations.",
        paragraphs: [
          "I currently lead systems architecture and internal platform development at Elements Of Steel, where since 2019 I have been responsible for designing, building, and evolving systems that are critical to business operations.",
          "The most representative example of that work is Businext ERP, an enterprise platform built from scratch to support finance, sales, inventory, human resources, operational dashboards, and administrative workflows in production.",
          "My academic background includes a Bachelor's degree in Computer Systems Engineering and a Master's degree in Data Science for Business, both from UTEL. That combination strengthened both my software engineering discipline and my approach to data-informed decision making.",
        ],
        highlights: [
          "Head of Systems / Lead Software Engineer at Elements Of Steel.",
          "Architect and lead developer of Businext ERP.",
          "Builder of backend and financial platforms with Python, FastAPI, React, and AWS.",
          "Spanish native speaker and English professional working proficiency.",
        ],
      },
      systemsThinking: {
        title: "How I Think About Systems",
        description:
          "Architecture should reduce operational risk and make complexity easier to reason about.",
        principles: [
          {
            title: "Model the business before the code",
            description:
              "I start from workflows, responsibilities, and failure points before designing the technical model. Useful architecture reflects how the business actually works, not the other way around.",
          },
          {
            title: "Keep logic close to the domain",
            description:
              "In business systems, correctness depends on where rules live. I prefer service layers and explicit domain logic over thin CRUD wrappers around the database.",
          },
          {
            title: "Optimize for maintainability under growth",
            description:
              "Systems become expensive when every module knows too much. I care about boundaries, naming, and evolution paths so platforms can absorb new features without turning fragile.",
          },
          {
            title: "Treat reliability as a design decision",
            description:
              "Auditability, predictable state transitions, and operational visibility are not post-launch concerns. They should exist in the system model from the start.",
          },
        ],
      },
      technologyFocus: {
        title: "Technology Focus",
        description:
          "Tools I use most often to build and operate backend-heavy systems.",
        groups: [
          {
            title: "Backend",
            items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST APIs", "Frameworks and supporting libraries"],
          },
          {
            title: "Frontend",
            items: ["React", "TypeScript", "TailwindCSS", "MUI", "Axios"],
          },
          {
            title: "Infrastructure",
            items: ["AWS EC2", "AWS S3", "Linux", "Nginx", "Production deployment"],
          },
          {
            title: "Architecture",
            items: ["ERP systems", "Microservices", "Service layers", "DDD concepts", "Operational automation"],
          },
        ],
      },
      lookingFor: {
        title: "What I'm Looking For",
        description:
          "Work where backend engineering and systems thinking directly influence the quality of the product.",
        paragraphs: [
          "I am interested in roles where backend engineering and systems thinking directly influence product quality.",
          "I want to contribute as a senior backend engineer or systems architect on platforms where I can design and evolve complex systems.",
        ],
        opportunities: [
          "Enterprise SaaS platforms",
          "Financial systems",
          "Large-scale backend platforms",
          "Products where architecture and maintainability matter more than delivery speed",
        ],
      },
    },
    contact: {
      title: "Contact",
      description:
        "Open to conversations about software architecture, backend engineering, enterprise platforms, and remote product opportunities.",
      intro:
        "I’m open to conversations about software architecture, backend engineering, enterprise platforms and remote opportunities in product teams.",
      cardIntro:
        "If you’d like to talk about ERP systems, backend platforms, FastAPI APIs or architecture for business software, feel free to reach out through any of these channels.",
      topicsTitle: "Topics I usually discuss:",
      topics: [
        "Backend architecture and APIs",
        "Enterprise systems and ERP platforms",
        "Financial platforms and credit workflows",
        "Opportunities as a Software Engineer / Systems Architect",
      ],
      pills: [
        "Backend Architecture",
        "ERP Systems",
        "Financial Platforms",
        "Remote Opportunities",
      ],
      emailLabel: "Email",
      emailValue: "brandonmojica95@gmail.com",
      note: "I usually respond best through LinkedIn or email.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Send email",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      systems: "Sistemas",
      engineering: "Ingeniería",
      about: "Sobre mí",
      contact: "Contacto",
    },
    footer: {
      copy: "Portafolio de ingeniería.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Correo",
    },
    common: {
      language: "Idioma",
      theme: "Tema",
      switchToDark: "Cambiar a modo oscuro",
      switchToLight: "Cambiar a modo claro",
      liveProfile: "Perfil activo",
      architectureNotes: "Ver arquitectura del sistema",
    },
    home: {
      eyebrow: "PORTAFOLIO DE INGENIERÍA DE SISTEMAS",
      title: "Plataformas empresariales y sistemas backend construidos para operación real.",
      intro: [
        "Ingeniero backend especializado en ERP, APIs y sistemas financieros con Python y FastAPI.",
        "Este portafolio documenta software en producción — incluyendo Businext ERP y la plataforma de crédito TR0V1 — con énfasis en arquitectura de dominio, capas de servicio y confiabilidad operativa.",
      ],
      stackLabel: "ENFOQUE TÉCNICO",
      profileBadge: "PERFIL DE INGENIERÍA",
      exploreSystems: "Explorar Sistemas en Producción",
      readNotes: "Explorar Ingeniería",
      signalBoard: "Áreas clave de ingeniería",
      matrixTitle: "Tipos de sistemas en los que trabajo",
      matrixNote:
        "Plataformas y sistemas donde aplico arquitectura backend, modelado de dominio y diseño orientado a operación real.",
      majorSystemsTitle: "Plataformas en producción",
      majorSystemsDesc:
        "Businext ERP y la plataforma de crédito TR0V1 como sistemas empresariales desarrollados para operación real, con decisiones de arquitectura, restricciones técnicas y resultados operativos.",
      architectureSignals: [
        {
          title: "DOMINIOS DE NEGOCIO",
          value: "Finanzas | RH | Ventas | Inventario",
          note: "Modelado de procesos de negocio y reglas operativas reales.",
        },
        {
          title: "ARQUITECTURA BACKEND",
          value: "FastAPI + Capa de Servicios",
          note: "Arquitectura backend orientada a APIs, lógica de negocio explícita y servicios modulares.",
        },
        {
          title: "SISTEMAS FINANCIEROS",
          value: "Crédito, pagos, interés y conciliación",
          note: "Flujos financieros con trazabilidad operativa y consistencia transaccional.",
        },
        {
          title: "ESCALA DE PLATAFORMA",
          value: "Businext ERP con +125K LOC",
          note: "Plataforma empresarial en producción con evolución continua.",
        },
      ],
      focusTracks: [
        {
          name: "PLATAFORMAS ERP",
          description:
            "Sistemas empresariales que integran finanzas, ventas, inventario, recursos humanos y procesos operativos dentro de una misma plataforma.",
        },
        {
          name: "ARQUITECTURA DE APIS",
          description:
            "APIs backend y capas de servicio diseñadas para soportar reglas de negocio, transacciones y evolución mantenible de plataforma.",
        },
        {
          name: "PLATAFORMAS FINANCIERAS",
          description:
            "Sistemas para crédito, pagos, interés, conciliación y estados de cuenta donde la consistencia operativa es parte de la arquitectura.",
        },
      ],
    },
    systems: {
      title: "Sistemas diseñados para operación real",
      description:
        "Plataformas empresariales y financieras construidas desde necesidades reales de negocio, con decisiones de arquitectura enfocadas en mantenibilidad, trazabilidad, confiabilidad operativa y límites de dominio explícitos.",
      solutionLabel: "Qué resuelve",
      stackLabel: "Tecnologías principales",
      architectureLabel: "Enfoque arquitectónico",
      impactLabel: "Impacto",
    },
    engineering: {
      title: "Ingeniería",
      description:
        "Notas de ingeniería y decisiones de arquitectura tomadas al construir sistemas empresariales reales.",
      intro:
        "Esta sección documenta ideas, patrones y decisiones técnicas surgidas al diseñar plataformas ERP, sistemas financieros y arquitecturas backend en entornos de producción.",
      metadata: {
        publishedOn: "Publicado",
        readingTime: "Tiempo de lectura",
      },
      themes: {
        architecture: {
          title: "Arquitectura",
          description:
            "Límites de dominio, descomposición de servicios y decisiones de plataforma surgidas de restricciones reales de un ERP.",
        },
        backendEngineering: {
          title: "Ingeniería Backend",
          description:
            "Patrones de implementación para capas de servicio, APIs y confiabilidad operativa en producción.",
        },
        financialSystems: {
          title: "Sistemas Financieros",
          description:
            "Crédito, conciliación y controles transaccionales donde la corrección importa más que el CRUD.",
        },
      },
    },
    about: {
      title: "Sobre mí",
      description:
        "Ingeniero backend senior y arquitecto de sistemas enfocado en plataformas empresariales, sistemas ERP, arquitectura API y software productivo para finanzas y operación.",
      metadata: {
        title: "Sobre mí",
        description:
          "Perfil profesional de ingeniería de Brandon Mojica Lopez, enfocado en arquitectura backend, plataformas ERP y sistemas en producción.",
      },
      intro: {
        eyebrow: "PERFIL DE INGENIERIA",
        title: "Ingeniero backend y arquitecto de sistemas enfocado en plataformas empresariales, arquitectura API y software crítico para finanzas y operación.",
        lead:
          "Diseño y construyo sistemas donde la claridad operativa, el modelado de dominio y la confiabilidad backend importan más que la complejidad superficial.",
        paragraphs: [
          "Mi trabajo se centra en plataformas ERP, sistemas financieros y plataformas backend orientadas a APIs utilizadas diariamente por equipos operativos y administrativos.",
          "Eso implica traducir reglas de negocio reales en arquitectura estable, definir límites entre servicios y construir plataformas backend que evolucionen sin romper la operación.",
        ],
        stats: [
          { value: "5+ años", label: "construyendo software empresarial en producción" },
          { value: "200k+ LOC", label: "evolucionadas dentro de Businext ERP" },
          { value: "2019 - actualidad", label: "liderando sistemas en Elements Of Steel" },
          { value: "2 plataformas empresariales en producción", label: "Businext ERP + TR0V1 Credit Platform" },
        ],
        badges: ["Plataformas ERP", "Arquitectura Backend", "Sistemas Financieros", "FastAPI", "AWS"],
      },
      build: {
        title: "Qué construyo",
        description:
          "Plataformas definidas por restricciones operativas reales, no por supuestos de demostración.",
        items: [
          {
            title: "Plataformas empresariales",
            description:
              "ERP y sistemas internos que integran finanzas, ventas, inventario, recursos humanos y reporteo dentro de un mismo modelo operativo.",
          },
          {
            title: "Capas de servicios backend",
            description:
              "Plataformas API con lógica de negocio explícita, transiciones de estado trazables y límites de servicio que soportan mantenibilidad a largo plazo.",
          },
          {
            title: "Flujos financieros",
            description:
              "Crédito, pagos, conciliación, estados de cuenta y controles contables donde la corrección y la auditabilidad forman parte de la arquitectura.",
          },
        ],
      },
      background: {
        title: "Trayectoria profesional",
        description:
          "Un perfil construido dentro de operaciones reales de negocio.",
        paragraphs: [
          "Actualmente lidero la arquitectura de sistemas y el desarrollo de plataformas internas en Elements Of Steel, donde desde 2019 soy responsable de diseñar, construir y evolucionar sistemas críticos para la operación del negocio.",
          "El ejemplo más representativo de este trabajo es Businext ERP, una plataforma empresarial construida desde cero para soportar finanzas, ventas, inventario, recursos humanos, dashboards operativos y flujos administrativos en producción.",
          "Mi formación académica incluye una Ingeniería en Sistemas Computacionales y una Maestría en Ciencia de Datos para Negocios, ambas en UTEL. Esa combinación fortaleció tanto mi disciplina de ingeniería de software como mi enfoque para tomar decisiones informadas por datos.",
        ],
        highlights: [
          "Responsable de sistemas e ingeniero principal de software en Elements Of Steel.",
          "Arquitecto y desarrollador principal de Businext ERP.",
          "Constructor de plataformas backend y financieras con Python, FastAPI, React y AWS.",
          "Español nativo e inglés con dominio profesional.",
        ],
      },
      systemsThinking: {
        title: "Cómo pienso sobre sistemas",
        description:
          "La arquitectura debe reducir riesgo operativo y hacer que la complejidad sea más fácil de entender.",
        principles: [
          {
            title: "Modelar el negocio antes que el código",
            description:
              "Empiezo por flujos, responsabilidades y puntos de falla antes de diseñar el modelo técnico. Una arquitectura útil refleja cómo funciona el negocio, no al revés.",
          },
          {
            title: "Mantener la lógica cerca del dominio",
            description:
              "En sistemas de negocio, la corrección depende de dónde viven las reglas. Prefiero capas de servicio y lógica de dominio explícita en lugar de CRUD delgado alrededor de la base de datos.",
          },
          {
            title: "Optimizar para mantenibilidad bajo crecimiento",
            description:
              "Los sistemas se vuelven costosos cuando cada módulo sabe demasiado. Me importan los límites, el lenguaje del código y la capacidad de evolución para que la plataforma absorba nuevas funciones sin volverse frágil.",
          },
          {
            title: "Tratar la confiabilidad como una decisión de diseño",
            description:
              "La auditabilidad, las transiciones predecibles de estado y la visibilidad operativa no son temas para después del lanzamiento. Deben existir en el modelo del sistema desde el inicio.",
          },
        ],
      },
      technologyFocus: {
        title: "Enfoque tecnológico",
        description:
          "Herramientas que uso con mayor frecuencia para construir y operar sistemas con fuerte peso backend.",
        groups: [
          {
            title: "Backend",
            items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "APIs REST", "Frameworks y librerias complementarias"],
          },
          {
            title: "Frontend",
            items: ["React", "TypeScript", "TailwindCSS", "MUI", "Axios"],
          },
          {
            title: "Infraestructura",
            items: ["AWS EC2", "AWS S3", "Linux", "Nginx", "Despliegue en producción"],
          },
          {
            title: "Arquitectura",
            items: ["Sistemas ERP", "Microservicios", "Capas de servicio", "Conceptos DDD", "Automatización operativa"],
          },
        ],
      },
      lookingFor: {
        title: "Qué estoy buscando",
        description:
          "Trabajo donde la ingeniería backend y el pensamiento de sistemas influyan directamente en la calidad del producto.",
        paragraphs: [
          "Estoy interesado en roles donde la ingeniería backend y el pensamiento de sistemas influyan directamente en la calidad del producto.",
          "Busco contribuir como ingeniero backend senior o arquitecto de sistemas en plataformas donde pueda diseñar y evolucionar sistemas complejos.",
        ],
        opportunities: [
          "Plataformas SaaS empresariales",
          "Sistemas financieros",
          "Plataformas backend de gran escala",
          "Productos donde la arquitectura y la mantenibilidad importen más que la velocidad de desarrollo",
        ],
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Abierto a conversaciones sobre arquitectura de software, backend engineering, plataformas empresariales y oportunidades remotas en equipos de producto.",
      intro:
        "Estoy abierto a conversaciones sobre arquitectura de software, backend engineering, plataformas empresariales y oportunidades remotas en equipos de producto.",
      cardIntro:
        "Si quieres hablar sobre sistemas ERP, plataformas backend, APIs con FastAPI o arquitectura para software de negocio, puedes escribirme por cualquiera de estos medios.",
      topicsTitle: "Temas sobre los que normalmente converso:",
      topics: [
        "Arquitectura backend y APIs",
        "Sistemas empresariales y ERP",
        "Plataformas financieras y flujos de crédito",
        "Oportunidades como Software Engineer / Systems Architect",
      ],
      pills: [
        "Backend Architecture",
        "ERP Systems",
        "Financial Platforms",
        "Remote Opportunities",
      ],
      emailLabel: "Correo",
      emailValue: "brandonmojica95@gmail.com",
      note: "Generalmente respondo mejor por LinkedIn o correo.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Enviar correo",
    },
  },
} as const;

export type SiteMessages = (typeof messages)[Locale];

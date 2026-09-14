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
      title: "Software engineer focused on software architecture and backend systems.",
      intro: [
        "I design and lead the evolution of business-critical platforms around real operational constraints.",
        "My work connects business rules, domain modeling, backend architecture, and maintainable APIs across enterprise and financial workflows.",
      ],
      stackLabel: "ENGINEERING FOCUS",
      profileBadge: "ENGINEERING PROFILE",
      exploreSystems: "Explore Systems",
      readNotes: "Read Engineering Notes",
      signalBoard: "Business-critical platforms",
      matrixTitle: "How I engineer software",
      matrixNote:
        "A current, human-led workflow from problem framing to evidence and release gates.",
      majorSystemsTitle: "Selected systems",
      majorSystemsDesc:
        "I describe each selected system through its context, my responsibility, architecture decisions, constraints, and current verified state.",
      architectureSignals: [
        {
          title: "BUSINESS DOMAINS",
          value: "Finance | HR | Sales | Inventory",
          note: "Business process modeling and explicit operational rules.",
        },
        {
          title: "BACKEND ARCHITECTURE",
          value: "FastAPI + Service Layers",
          note: "APIs and service boundaries that keep business logic understandable.",
        },
        {
          title: "DATA & AUTHORIZATION",
          value: "PostgreSQL + tenant boundaries",
          note: "Relational integrity, transaction boundaries, and layered authorization.",
        },
      ],
      focusTracks: [
        {
            name: "SPECIFY BEFORE BUILDING",
            description:
            "Use SDD to make scope, constraints, decisions, and acceptance evidence explicit.",
          },
          {
            name: "SEPARATE RESPONSIBILITIES",
            description:
            "Plan architecture first, then keep planning, implementation, and review distinct.",
          },
          {
            name: "REVIEW WITH EVIDENCE",
            description:
            "Use bounded AI-assisted roles, explicit handoffs, independent review, and release gates.",
          },
        ],
      workflowSequence:
        "Problem framing → Discovery → SDD / Architecture → Implementation plan → Specialized AI-assisted roles → Implementation → Independent review → Evidence / QA → Release gate",
    },
    systems: {
      title: "Systems shaped by operational constraints",
      description:
        "I describe each system through its context, my responsibility, architecture decisions, constraints, and current verified state.",
      businessContextLabel: "Context",
      responsibilityLabel: "My responsibility",
      solutionLabel: "What it solves",
      stackLabel: "Technology context",
      architectureLabel: "Architecture decisions",
      constraintsLabel: "Constraints",
      impactLabel: "Current verified state",
    },
    engineering: {
      title: "Engineering Notes",
      description:
        "Notes about the decisions, constraints, and evidence involved in designing and evolving backend and business systems.",
      intro:
        "Architecture, PostgreSQL, concurrency, authorization, SDD, and review practices for systems that must remain understandable as they evolve.",
      metadata: {
        publishedOn: "Published",
        readingTime: "Reading time",
      },
      themes: {
        architecture: {
          title: "Architecture under constraints",
          description:
            "Boundaries, service decomposition, and platform decisions shaped by operational requirements.",
        },
        backendEngineering: {
          title: "Backend and API design",
          description:
            "Service layers, APIs, and implementation patterns that keep responsibilities explicit.",
        },
        financialSystems: {
          title: "Financial and operational correctness",
          description:
            "Credit, reconciliation, and transactional controls where correctness matters more than CRUD.",
        },
      },
      currentThemesTitle: "Current engineering themes",
      currentThemesDescription:
        "The current practice extends beyond a framework list: data integrity, concurrency, authorization, system design, and disciplined delivery.",
      currentThemes: [
        {
          title: "PostgreSQL and data integrity",
          description: "Relational constraints, transaction boundaries, tenant isolation, and reliable state changes.",
        },
        {
          title: "Concurrency and authorization",
          description: "Optimistic concurrency, authorization boundaries, and workflows that remain safe under change.",
        },
        {
          title: "Specification-driven engineering",
          description: "SDD, architecture reviews, specialized responsibilities, evidence, and release gates.",
        },
        {
          title: "Distributed workflow design",
          description: "Durable handoffs, idempotency, and asynchronous patterns considered with explicit trade-offs.",
        },
        {
          title: "AI-assisted engineering",
          description: "Bounded specialized roles that support analysis and implementation while engineering decisions remain human.",
        },
      ],
    },
    about: {
      title: "About",
      description:
        "Software engineer focused on software architecture and backend systems, designing and leading the evolution of business-critical platforms.",
      metadata: {
        title: "About",
        description:
          "Professional profile of Brandon Mojica Lopez, focused on software architecture, backend systems, and business-critical platforms.",
      },
      intro: {
        eyebrow: "ENGINEERING PROFILE",
        title: "Software engineer focused on software architecture and backend systems.",
        lead:
          "I design and lead the evolution of business-critical platforms around real operational constraints.",
        paragraphs: [
          "My work connects business rules, domain modeling, backend architecture, and maintainable APIs across enterprise and financial workflows.",
          "I design and evolve ERP, credit, and financial systems by translating domain rules into explicit services, APIs, state transitions, and operational controls.",
          "The focus is practical: make boundaries clear, keep rules close to the domain, and build systems that can evolve without losing operational clarity.",
        ],
        stats: [
          { value: "Head of Systems", label: "Elements Of Steel · 2019–Present" },
          { value: "Career progression", label: "QA · Junior development · Project leadership" },
          { value: "Full-stack development", label: "Alongside systems leadership" },
        ],
        badges: ["ERP Platforms", "Backend Architecture", "PostgreSQL", "System Design", "Engineering Workflow"],
      },
      build: {
        title: "Systems I design and build",
        description:
          "Systems shaped by real operational constraints rather than demonstration assumptions.",
        items: [
          {
            title: "Enterprise platforms",
            description:
              "ERP platforms that integrate finance, sales, inventory, human resources, dashboards, and accounting workflows.",
          },
          {
            title: "Backend service architecture",
            description:
              "API platforms with explicit business logic, traceable state transitions, and clear service boundaries.",
          },
          {
            title: "Financial systems",
            description:
              "Credit, interest, payments, reconciliation, and account statements where consistency and traceability are part of the architecture.",
          },
        ],
      },
      background: {
        title: "Professional path",
        description:
          "A progression inside real business operations, from QA and junior development through project leadership, systems leadership, and full-stack development.",
        paragraphs: [
          "I joined Elements Of Steel in 2019. Over time, my work progressed through QA, junior software development, project leadership, and ultimately Head of Systems together with full-stack software development.",
          "The focus throughout this progression has been connecting software with the real needs of business operations. I design and evolve systems where domain rules, service boundaries, and maintainability are part of the engineering work.",
          "My academic background includes a Computer Systems Engineering degree and a Master’s Degree in Data Science for Business from UTEL.",
        ],
        highlights: [
          "Head of Systems at Elements Of Steel.",
          "Progression through QA, junior development, and project leadership.",
          "Full-stack software development across ERP, credit, and financial systems.",
          "Spanish — Native · English — B1 · Intermediate.",
        ],
      },
      workflow: {
        title: "How I engineer software",
        description:
          "In current work, I use specifications and architecture-first planning to make scope, constraints, decisions, and acceptance evidence explicit before implementation.",
        sequence:
          "Problem framing → Discovery → SDD / Architecture → Implementation plan → Specialized AI-assisted roles → Implementation → Independent review → Evidence / QA → Release gate",
        note:
          "AI can accelerate bounded analysis and implementation support, but engineering responsibility remains human. Handoffs record decisions, evidence, open questions, and acceptance criteria.",
      },
      systemsThinking: {
        title: "Architecture principles",
        description:
          "Architecture should reduce operational risk and make system complexity explicit, understandable and evolvable.",
        principles: [
          {
            title: "Model the business before the code",
            description:
            "Start with business flows, responsibilities, and failure points before designing the technical model.",
          },
          {
            title: "Keep logic close to the domain",
            description:
            "Use service layers and explicit domain logic instead of thin CRUD around the database.",
          },
          {
            title: "Make boundaries explicit",
            description:
            "Clear domain boundaries and expressive APIs help systems evolve without becoming fragile.",
          },
          {
            title: "Design for traceability",
            description:
            "Predictable state transitions, auditability, and operational controls belong in the system model from the beginning.",
          },
        ],
      },
      technologyFocus: {
        title: "Technology focus",
        description:
          "A curated technical focus for designing, building, and evolving enterprise systems with a strong backend orientation.",
        groups: [
          {
            title: "Backend & APIs",
            items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST APIs"],
          },
          {
            title: "Data & Persistence",
            items: ["PostgreSQL", "MySQL / MariaDB", "Relational integrity", "Transaction boundaries"],
          },
          {
            title: "Architecture & System Design",
            items: ["Domain modeling", "Concurrency", "Idempotency", "Authorization boundaries", "Multi-tenant isolation"],
          },
          {
            title: "Product, Platform & Workflow",
            items: ["React", "TypeScript", "AWS", "Nginx", "SDD", "Independent review", "Release gates"],
          },
        ],
      },
      lookingFor: {
        title: "Current technical focus",
        description:
          "Software architecture, backend systems, and business-critical platforms.",
        paragraphs: [
          "My work focuses on architecture, maintainability, and domain clarity.",
          "I design and evolve systems where clear boundaries and operational consistency matter.",
        ],
        opportunities: [
          "ERP platforms",
          "Financial workflows",
          "Backend service architecture",
          "Domain modeling and maintainability",
        ],
      },
    },
    contact: {
      title: "Contact",
      description:
        "I welcome conversations about software architecture, backend systems, enterprise platforms, financial workflows, data integrity, and maintainability.",
      intro:
        "I welcome conversations about software architecture, backend systems, enterprise platforms, financial workflows, data integrity, and maintainability.",
      cardIntro:
        "If you want to discuss architecture for business software, domain modeling, APIs, PostgreSQL, or reliable operational workflows, you can reach me through these channels.",
      topicsTitle: "Topics I usually discuss:",
      topics: [
        "Software architecture and API design",
        "Enterprise systems and ERP platforms",
        "Credit workflows and financial domain modeling",
        "PostgreSQL, data integrity, and authorization",
      ],
      pills: [
        "Software Architecture",
        "ERP Systems",
        "PostgreSQL",
        "Engineering Workflow",
      ],
      emailLabel: "Email",
      emailValue: "brandonmojica95@gmail.com",
      note: "I usually respond faster through LinkedIn or email.",
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
      title: "Ingeniero de software enfocado en arquitectura de software y sistemas backend.",
      intro: [
        "Diseño y lidero la evolución de plataformas críticas para el negocio alrededor de restricciones operativas reales.",
        "Mi trabajo conecta reglas de negocio, modelado de dominio, arquitectura backend y APIs mantenibles en flujos empresariales y financieros.",
      ],
      stackLabel: "ENFOQUE DE INGENIERÍA",
      profileBadge: "PERFIL DE INGENIERÍA",
      exploreSystems: "Explorar Sistemas",
      readNotes: "Leer Notas de Ingeniería",
      signalBoard: "Plataformas críticas para el negocio",
      matrixTitle: "Cómo hago ingeniería de software",
      matrixNote:
        "Un flujo actual y dirigido por personas, desde definir el problema hasta reunir evidencia y pasar las puertas de liberación.",
      majorSystemsTitle: "Sistemas seleccionados",
      majorSystemsDesc:
        "Describo cada sistema seleccionado a partir de su contexto, mi responsabilidad, las decisiones de arquitectura, las restricciones y su estado actual verificable.",
      architectureSignals: [
        {
          title: "DOMINIOS DE NEGOCIO",
          value: "Finanzas | RH | Ventas | Inventario",
          note: "Modelado de procesos de negocio y reglas operativas explícitas.",
        },
        {
          title: "ARQUITECTURA BACKEND",
          value: "FastAPI + Capas de servicio",
          note: "APIs y límites de servicio que mantienen clara la lógica de negocio.",
        },
        {
          title: "DATOS Y AUTORIZACIÓN",
          value: "PostgreSQL + límites de tenant",
          note: "Integridad relacional, límites transaccionales y autorización por capas.",
        },
      ],
      focusTracks: [
        {
            name: "ESPECIFICAR ANTES DE CONSTRUIR",
            description:
            "Usar SDD para hacer explícitos el alcance, las restricciones, las decisiones y la evidencia de aceptación.",
          },
          {
            name: "SEPARAR RESPONSABILIDADES",
            description:
            "Planificar la arquitectura primero y mantener separados el diseño, la implementación y la revisión.",
          },
          {
            name: "REVISAR CON EVIDENCIA",
            description:
            "Usar roles con apoyo de IA, transferencias explícitas entre etapas, revisión independiente y puertas de liberación.",
          },
        ],
      workflowSequence:
        "Definición del problema → Descubrimiento → SDD / Arquitectura → Plan de implementación → Roles especializados con apoyo de IA → Implementación → Revisión independiente → Evidencia / QA → Puerta de liberación",
    },
    systems: {
      title: "Sistemas definidos por restricciones operativas",
      description:
        "Describo cada sistema a partir de su contexto, mi responsabilidad, las decisiones de arquitectura, las restricciones y su estado actual verificable.",
      businessContextLabel: "Contexto",
      responsibilityLabel: "Mi responsabilidad",
      solutionLabel: "Qué resuelve",
      stackLabel: "Contexto tecnológico",
      architectureLabel: "Decisiones de arquitectura",
      constraintsLabel: "Restricciones",
      impactLabel: "Estado actual verificable",
    },
    engineering: {
      title: "Notas de ingeniería",
      description:
        "Notas sobre las decisiones, restricciones y evidencias que intervienen al diseñar y evolucionar sistemas backend y empresariales.",
      intro:
        "Arquitectura, PostgreSQL, concurrencia, autorización, SDD y prácticas de revisión para sistemas que deben seguir siendo entendibles al evolucionar.",
      metadata: {
        publishedOn: "Publicado",
        readingTime: "Tiempo de lectura",
      },
      themes: {
        architecture: {
          title: "Arquitectura bajo restricciones",
          description:
            "Límites, descomposición de servicios y decisiones de plataforma definidas por requisitos operativos.",
        },
        backendEngineering: {
          title: "Diseño backend y de APIs",
          description:
            "Capas de servicio, APIs y patrones de implementación que mantienen explícitas las responsabilidades.",
        },
        financialSystems: {
          title: "Corrección financiera y operativa",
          description:
            "Crédito, conciliación y controles transaccionales donde la corrección importa más que el CRUD.",
        },
      },
      currentThemesTitle: "Temas actuales de ingeniería",
      currentThemesDescription:
        "La práctica actual va más allá de una lista de frameworks: integridad de datos, concurrencia, autorización, diseño de sistemas y entrega disciplinada.",
      currentThemes: [
        {
          title: "PostgreSQL e integridad de datos",
          description: "Restricciones relacionales, límites transaccionales, aislamiento por tenant y cambios de estado confiables.",
        },
        {
          title: "Concurrencia y autorización",
          description: "Concurrencia optimista, límites de autorización y flujos que permanecen seguros ante los cambios.",
        },
        {
          title: "Ingeniería guiada por especificaciones",
          description: "SDD, revisiones de arquitectura, responsabilidades especializadas, evidencia y puertas de liberación.",
        },
        {
          title: "Diseño de flujos distribuidos",
          description: "Transferencias durables entre etapas, idempotencia y patrones asíncronos considerados con decisiones técnicas explícitas.",
        },
        {
          title: "Ingeniería con apoyo de IA",
          description: "Roles especializados y acotados que apoyan el análisis y la implementación mientras las decisiones de ingeniería siguen siendo humanas.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      description:
        "Ingeniero de software enfocado en arquitectura de software y sistemas backend, diseñando y liderando la evolución de plataformas críticas para el negocio.",
      metadata: {
        title: "Sobre mí",
        description:
          "Perfil profesional de Brandon Mojica Lopez, enfocado en arquitectura de software, sistemas backend y plataformas críticas para el negocio.",
      },
      intro: {
        eyebrow: "PERFIL DE INGENIERÍA",
        title: "Ingeniero de software enfocado en arquitectura de software y sistemas backend.",
        lead:
          "Diseño y lidero la evolución de plataformas críticas para el negocio alrededor de restricciones operativas reales.",
        paragraphs: [
          "Mi trabajo conecta reglas de negocio, modelado de dominio, arquitectura backend y APIs mantenibles en flujos empresariales y financieros.",
          "Diseño y evoluciono sistemas ERP, de crédito y financieros al traducir reglas de dominio en servicios explícitos, APIs, transiciones de estado y controles operativos.",
          "El enfoque es práctico: hacer claros los límites, mantener las reglas cerca del dominio y construir sistemas que evolucionen sin perder claridad operativa.",
        ],
        stats: [
          { value: "Jefe de Sistemas", label: "Elements Of Steel · 2019–actualidad" },
          { value: "Trayectoria progresiva", label: "QA · Desarrollo junior · Liderazgo de proyectos" },
          { value: "Desarrollo full-stack", label: "Junto con liderazgo de sistemas" },
        ],
        badges: ["Plataformas ERP", "Arquitectura Backend", "PostgreSQL", "Diseño de Sistemas", "Flujo de Ingeniería"],
      },
      build: {
        title: "Tipos de sistemas que diseño y construyo",
        description:
          "Sistemas diseñados a partir de restricciones operativas reales, no de supuestos de demostración.",
        items: [
          {
            title: "Plataformas empresariales",
            description:
              "Plataformas ERP que integran finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables.",
          },
          {
            title: "Arquitectura de servicios backend",
            description:
              "Plataformas API con lógica de negocio explícita, transiciones de estado trazables y límites claros entre servicios.",
          },
          {
            title: "Sistemas financieros",
            description:
              "Crédito, intereses, pagos, conciliación y estados de cuenta donde la consistencia y la trazabilidad forman parte de la arquitectura.",
          },
        ],
      },
      background: {
        title: "Trayectoria profesional",
        description:
          "Una progresión dentro de operaciones reales de negocio, desde QA y desarrollo junior hasta liderazgo de proyectos, jefatura de sistemas y desarrollo full-stack.",
        paragraphs: [
          "Me incorporé a Elements Of Steel en 2019. Con el tiempo, mi trabajo evolucionó por QA, desarrollo de software junior, liderazgo de proyectos y finalmente Jefe de Sistemas, junto con desarrollo de software full-stack.",
          "El foco de esta trayectoria ha sido conectar el software con las necesidades reales de la operación empresarial. Diseño y evoluciono sistemas donde las reglas de dominio, los límites de servicio y la mantenibilidad forman parte del trabajo de ingeniería.",
          "Mi formación académica incluye una Ingeniería en Sistemas Computacionales y una Maestría en Ciencia de Datos para Negocios en UTEL.",
        ],
        highlights: [
          "Jefe de Sistemas en Elements Of Steel.",
          "Trayectoria por QA, desarrollo junior y liderazgo de proyectos.",
          "Desarrollo full-stack en sistemas ERP, de crédito y financieros.",
          "Español — Nativo · Inglés — B1 · Intermedio.",
        ],
      },
      workflow: {
        title: "Cómo hago ingeniería de software",
        description:
          "En el trabajo actual utilizo especificaciones y planificación con arquitectura primero para hacer explícitos el alcance, las restricciones, las decisiones y la evidencia de aceptación antes de implementar.",
        sequence:
          "Definición del problema → Descubrimiento → SDD / Arquitectura → Plan de implementación → Roles especializados con apoyo de IA → Implementación → Revisión independiente → Evidencia / QA → Puerta de liberación",
        note:
          "La IA puede acelerar análisis acotados y apoyo a la implementación, pero la responsabilidad de ingeniería sigue siendo humana. Las transferencias explícitas entre etapas registran decisiones, evidencia, preguntas abiertas y criterios de aceptación.",
      },
      systemsThinking: {
        title: "Principios de arquitectura de sistemas",
        description:
          "La arquitectura debe reducir riesgo operativo y hacer que la complejidad del sistema sea explícita, entendible y evolutiva.",
        principles: [
          {
            title: "Modelar el negocio antes que el código",
            description:
              "Empezar por flujos de negocio, responsabilidades y puntos de fallo antes de diseñar el modelo técnico.",
          },
          {
            title: "Mantener la lógica cerca del dominio",
            description:
              "Usar capas de servicio y lógica de dominio explícita en lugar de CRUD delgado alrededor de la base de datos.",
          },
          {
            title: "Hacer explícitos los límites",
            description:
              "Los límites claros de dominio y las APIs expresivas permiten evolucionar sin volver frágil la plataforma.",
          },
          {
            title: "Diseñar para la trazabilidad",
            description:
              "Las transiciones de estado predecibles, la auditabilidad y los controles operativos pertenecen al modelo desde el inicio.",
          },
        ],
      },
      technologyFocus: {
        title: "Enfoque tecnológico",
        description:
          "Un enfoque técnico curado para diseñar, construir y evolucionar sistemas empresariales con orientación backend.",
        groups: [
          {
            title: "Backend y APIs",
            items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "APIs REST"],
          },
          {
            title: "Datos y persistencia",
            items: ["PostgreSQL", "MySQL / MariaDB", "Integridad relacional", "Límites transaccionales"],
          },
          {
            title: "Arquitectura y diseño de sistemas",
            items: ["Modelado de dominio", "Concurrencia", "Idempotencia", "Límites de autorización", "Aislamiento multi-tenant"],
          },
          {
            title: "Producto, plataforma y flujo",
            items: ["React", "TypeScript", "AWS", "Nginx", "SDD", "Revisión independiente", "Puertas de liberación"],
          },
        ],
      },
      lookingFor: {
        title: "Enfoque técnico actual",
        description:
          "Arquitectura de software, sistemas backend y plataformas críticas para el negocio.",
        paragraphs: [
          "Mi trabajo se enfoca en arquitectura, mantenibilidad y claridad de dominio.",
          "Diseño y evoluciono sistemas donde importan los límites claros y la consistencia operativa.",
        ],
        opportunities: [
          "Plataformas ERP",
          "Flujos financieros",
          "Arquitectura de servicios backend",
          "Modelado de dominio y mantenibilidad",
        ],
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Me interesan conversaciones sobre arquitectura de software, sistemas backend, plataformas empresariales, flujos financieros, integridad de datos y mantenibilidad.",
      intro:
        "Me interesan conversaciones sobre arquitectura de software, sistemas backend, plataformas empresariales, flujos financieros, integridad de datos y mantenibilidad.",
      cardIntro:
        "Si quieres hablar sobre arquitectura para software de negocio, modelado de dominio, APIs, PostgreSQL o flujos operativos confiables, puedes escribirme por cualquiera de estos medios.",
      topicsTitle: "Temas sobre los que normalmente converso:",
      topics: [
        "Arquitectura de software y diseño de APIs",
        "Sistemas empresariales y plataformas ERP",
        "Flujos de crédito y modelado financiero",
        "PostgreSQL, integridad de datos y autorización",
      ],
      pills: [
        "Arquitectura de Software",
        "Plataformas ERP",
        "PostgreSQL",
        "Flujo de Ingeniería",
      ],
      emailLabel: "Correo",
      emailValue: "brandonmojica95@gmail.com",
      note: "Normalmente respondo más rápido por LinkedIn o correo electrónico.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Enviar correo",
    },
  },
} as const;

export type SiteMessages = (typeof messages)[Locale];

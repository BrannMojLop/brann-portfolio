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
      eyebrow: "SOFTWARE ENGINEER · BACKEND & FULL-STACK",
      title: "I build business-critical software, from backend systems to complete web applications.",
      intro:
        "I connect React interfaces, Python and FastAPI services, and relational data to build enterprise software.",
      stackLabel: "CORE TECHNOLOGIES",
      exploreSystems: "View selected work",
      majorSystemsTitle: "Selected work",
      majorSystemsDesc: "Two business systems, with their domain challenges and technical decisions.",
      projectCopy: {
        businext: {
          focus: "Enterprise resource planning",
          summary:
            "An ERP spanning finance, sales, inventory, human resources, and accounting. My work centers on backend and systems evolution around business rules and service boundaries.",
          linkLabel: "Read the BusiNext ERP case",
        },
        tr0v1: {
          focus: "Credit operations",
          summary:
            "Credit workflows for installments, interest, payments, reconciliation, and statements. My work centers on architecture and backend evolution; its APIs serve administrative tools and client interfaces.",
          linkLabel: "Read the TR0V1 case",
        },
        workforce: {
          status: "Local-development scope · Not production software",
          summary:
            "A workforce-management system with documented organization, people, and scheduling workflows.",
          linkLabel: "Read the Workforce case",
        },
      },
      approachTitle: "How I approach the work",
      approach:
        "I use business rules and operating constraints to shape APIs and data, then check changes against agreed requirements.",
      aiTitle: "AI-assisted engineering",
      aiDescription:
        "I use AI for defined analysis and implementation tasks. I check results against requirements and remain responsible for technical and release decisions.",
      contactCta: "Discuss a role or project",
    },
    systems: {
      title: "Systems shaped by operational constraints",
      description:
        "Explore enterprise and financial systems through their purpose, technical decisions, constraints, and documented responsibilities.",
      businessContextLabel: "Context",
      responsibilityLabel: "My responsibility",
      solutionLabel: "What it solves",
      purposeLabel: "System purpose",
      decisionsLabel: "Technical decisions",
      stackLabel: "Technology context",
      architectureLabel: "Architecture decisions",
      constraintsLabel: "Engineering considerations",
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
      title: "From business rules to working software.",
      description:
        "I’m Brandon Mojica Lopez, a Software Engineer with a backend focus and Full-Stack experience. I connect business rules, APIs, data, and interfaces to build software around how a business operates.",
      metadata: {
        title: "About",
        description:
          "Software Engineer with backend strength and Full-Stack experience in enterprise systems, technical decisions, and AI-assisted engineering practice.",
      },
      systemsTitle: "Backend and Full-Stack in practice",
      systemsDescription:
        "My work spans enterprise operations and financial workflows, with responsibilities grounded in each system’s documented scope.",
      businextTitle: "BusiNext ERP",
      businextDescription:
        "I work on backend and systems evolution around its business rules, service boundaries, and operational constraints.",
      tr0v1Title: "TR0V1 Credit Platform",
      tr0v1Description:
        "I work on architecture and backend evolution for financial rules and state transitions. Its APIs serve administrative tools and client interfaces.",
      workforceTitle: "Workforce",
      workforceStatus: "Local-development scope · not production software",
      workforceDescription:
        "The documented local-development scope covers organization, people, scheduling, and an administrative interface.",
      approachTitle: "How I work",
      approachDescription:
        "I translate business rules into clear APIs, data boundaries, and application workflows, then review changes against agreed requirements.",
      approachPrinciples: [
        { title: "Start with the domain", description: "Make important business rules and operating needs explicit before shaping the technical model." },
        { title: "Keep boundaries clear", description: "Give services and interfaces responsibilities that are understandable and maintainable." },
        { title: "Review against requirements", description: "Check implementation evidence against the agreed behavior before technical and release decisions." },
      ],
      aiTitle: "AI-assisted engineering",
      aiDescription:
        "I use AI-supported specialist roles for focused analysis, implementation support, and review. I check outputs against requirements and retain responsibility for technical and release decisions. My engineering notes document this practice; Applied AI in products remains a growth area.",
      focusTitle: "Technical focus",
      focusDescription:
        "Python · FastAPI · React · relational data · AWS within the systems documented in this portfolio.",
      systemsCta: "Explore the systems",
      contactCta: "Discuss an opportunity",
    },
    contact: {
      title: "Let’s discuss a role or a software project.",
      description:
        "Choose the path that best matches why you’re reaching out. Email is a direct way to start the conversation.",
      metadata: {
        title: "Contact",
        description:
          "Contact Brandon Mojica about Backend or Full-Stack engineering roles, including remote opportunities, or professional software projects.",
      },
      hiringTitle: "For hiring teams",
      hiringDescription:
        "I’m interested in software engineering roles across backend and Full-Stack work, including remote and international opportunities. Share the product, technical challenges, and what the team needs from the role.",
      projectsTitle: "For professional projects",
      projectsDescription:
        "For APIs and integrations, enterprise web applications, custom software, or process and system modernization, tell me what you want to improve and the systems involved. We can discuss fit and define a practical next step.",
      emailCta: "Email me",
      emailLabel: "Email",
      emailValue: "brandonmojica95@gmail.com",
      profilesLabel: "Other professional profiles",
      linkedin: "LinkedIn",
      github: "GitHub",
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
      eyebrow: "INGENIERO DE SOFTWARE · BACKEND Y FULL-STACK",
      title: "Construyo software para operaciones empresariales críticas, desde sistemas backend hasta aplicaciones web completas.",
      intro:
        "Conecto interfaces React, servicios con Python y FastAPI, y datos relacionales para construir software empresarial.",
      stackLabel: "TECNOLOGÍAS PRINCIPALES",
      exploreSystems: "Ver proyectos seleccionados",
      majorSystemsTitle: "Proyectos seleccionados",
      majorSystemsDesc: "Dos sistemas empresariales, sus retos de dominio y sus decisiones técnicas.",
      projectCopy: {
        businext: {
          focus: "Planeación de recursos empresariales",
          summary:
            "Un ERP que abarca finanzas, ventas, inventario, recursos humanos y contabilidad. Mi trabajo se centra en la evolución backend y de sistemas alrededor de las reglas de negocio y los límites de servicio.",
          linkLabel: "Leer el caso de BusiNext ERP",
        },
        tr0v1: {
          focus: "Operación de crédito",
          summary:
            "Flujos de crédito para parcialidades, intereses, pagos, conciliación y estados de cuenta. Mi trabajo se centra en arquitectura y evolución backend; sus APIs sirven a herramientas administrativas e interfaces de clientes.",
          linkLabel: "Leer el caso de TR0V1",
        },
        workforce: {
          status: "Alcance de desarrollo local · No es software en producción",
          summary:
            "Un sistema de gestión laboral con flujos documentados de organización, personas y horarios.",
          linkLabel: "Leer el caso de Workforce",
        },
      },
      approachTitle: "Cómo abordo el trabajo",
      approach:
        "Uso las reglas de negocio y las restricciones operativas para definir APIs y datos; después compruebo los cambios frente a requisitos acordados.",
      aiTitle: "Ingeniería asistida por IA",
      aiDescription:
        "Uso IA en tareas definidas de análisis e implementación. Compruebo los resultados frente a requisitos y mantengo la responsabilidad sobre las decisiones técnicas y de liberación.",
      contactCta: "Conversemos sobre un rol o proyecto",
    },
    systems: {
      title: "Sistemas definidos por restricciones operativas",
      description:
        "Conoce sistemas empresariales y financieros a través de su propósito, decisiones técnicas, restricciones y responsabilidades documentadas.",
      businessContextLabel: "Contexto",
      responsibilityLabel: "Mi responsabilidad",
      solutionLabel: "Qué resuelve",
      purposeLabel: "Propósito del sistema",
      decisionsLabel: "Decisiones técnicas",
      stackLabel: "Contexto tecnológico",
      architectureLabel: "Decisiones de arquitectura",
      constraintsLabel: "Consideraciones de ingeniería",
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
      title: "De las reglas de negocio al software que las hace funcionar.",
      description:
        "Soy Brandon Mojica Lopez, ingeniero de software con fortaleza en backend y experiencia Full-Stack. Conecto reglas de negocio, APIs, datos e interfaces para construir software a partir de cómo opera una empresa.",
      metadata: {
        title: "Sobre mí",
        description:
          "Ingeniero de software con fortaleza en backend y experiencia Full-Stack en sistemas empresariales, decisiones técnicas e ingeniería asistida por IA.",
      },
      systemsTitle: "Backend y Full-Stack en la práctica",
      systemsDescription:
        "Mi trabajo abarca operaciones empresariales y flujos financieros, con responsabilidades acotadas al alcance documentado de cada sistema.",
      businextTitle: "BusiNext ERP",
      businextDescription:
        "Trabajo en la evolución backend y de sistemas alrededor de sus reglas de negocio, límites de servicio y restricciones operativas.",
      tr0v1Title: "Plataforma de crédito TR0V1",
      tr0v1Description:
        "Trabajo en arquitectura y evolución backend para reglas financieras y transiciones de estado. Sus APIs sirven a herramientas administrativas e interfaces para clientes.",
      workforceTitle: "Workforce",
      workforceStatus: "Alcance de desarrollo local · no es software de producción",
      workforceDescription:
        "El alcance documentado de desarrollo local abarca organización, personas, horarios y una interfaz administrativa.",
      approachTitle: "Cómo trabajo",
      approachDescription:
        "Traduzco reglas de negocio en APIs, límites de datos y flujos de aplicación claros; después reviso los cambios frente a requisitos acordados.",
      approachPrinciples: [
        { title: "Partir del dominio", description: "Hacer explícitas las reglas de negocio y necesidades operativas antes de definir el modelo técnico." },
        { title: "Mantener límites claros", description: "Dar a servicios e interfaces responsabilidades comprensibles y mantenibles." },
        { title: "Revisar frente a requisitos", description: "Contrastar la evidencia de implementación con el comportamiento acordado antes de decidir sobre aspectos técnicos y de liberación." },
      ],
      aiTitle: "Ingeniería asistida por IA",
      aiDescription:
        "Uso roles especializados con apoyo de IA para análisis enfocados, apoyo a la implementación y revisión. Compruebo los resultados frente a requisitos y mantengo la responsabilidad sobre las decisiones técnicas y de liberación. Mis notas de ingeniería documentan esta práctica; la IA aplicada a productos sigue siendo un área de crecimiento.",
      focusTitle: "Enfoque técnico",
      focusDescription:
        "Python · FastAPI · React · datos relacionales · AWS en los sistemas documentados en este portafolio.",
      systemsCta: "Explorar los sistemas",
      contactCta: "Conversar sobre una oportunidad",
    },
    contact: {
      title: "Conversemos sobre una oportunidad o un proyecto de software.",
      description:
        "Elige el motivo que mejor describe tu mensaje. El correo es una forma directa de iniciar la conversación.",
      metadata: {
        title: "Contacto",
        description:
          "Contacta a Brandon Mojica por oportunidades de ingeniería Backend o Full-Stack, incluidas remotas, o proyectos profesionales de software.",
      },
      hiringTitle: "Para equipos que están contratando",
      hiringDescription:
        "Me interesan oportunidades de ingeniería de software en backend y Full-Stack, incluidas posiciones remotas e internacionales. Cuéntame sobre el producto, sus retos técnicos y lo que el equipo necesita del rol.",
      projectsTitle: "Para proyectos profesionales",
      projectsDescription:
        "Para APIs e integraciones, aplicaciones web empresariales, software a la medida o modernización de procesos y sistemas, cuéntame qué quieres mejorar y qué sistemas intervienen. Podemos conversar sobre el encaje y definir un siguiente paso práctico.",
      emailCta: "Escribirme por correo",
      emailLabel: "Correo electrónico",
      emailValue: "brandonmojica95@gmail.com",
      profilesLabel: "Otros perfiles profesionales",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

export type SiteMessages = (typeof messages)[Locale];

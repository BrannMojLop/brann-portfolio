import type { Locale } from "@/lib/i18n";

type SystemText = {
  name: string;
  tagline: string;
  businessContext: string;
  responsibility: string;
  solution: string;
  stack: string;
  architectureApproach: string[];
  constraints: string[];
  technicalChallenges: string[];
  impact?: string[];
  results?: string[];
  ctaLabel: string;
};

export interface SystemEntry {
  slug: "businext-erp" | "tr0v1-credit-platform" | "workforce";
  technologies: string[];
  cardFocus?: Record<Locale, { label: string; items: string[] }>;
  content: Record<Locale, SystemText>;
}

/** Public case-study narrative kept separate so Systems can evolve without changing Home cards. */
export type SystemsCaseStudyText = {
  context: string;
  purpose: string;
  responsibility: string;
  decisions: string[];
  considerations: string[];
  technology: string;
  status?: string;
  ctaLabel: string;
};

export const systemsCaseStudies: Record<SystemEntry["slug"], Record<Locale, SystemsCaseStudyText>> = {
  "businext-erp": {
    en: {
      context:
        "An enterprise platform spanning finance, sales, inventory, human resources, and accounting workflows.",
      purpose:
        "Bring those operational domains into one ERP model while allowing their business rules to evolve deliberately.",
      responsibility:
        "My work focuses on backend and systems evolution around business rules, service boundaries, and operating constraints.",
      decisions: [
        "Separate domain responsibilities across finance, inventory, HR, sales, and accounting.",
        "Use explicit APIs and service layers to represent business workflows rather than mirror database tables.",
        "Keep cross-domain workflows coherent as modules evolve.",
      ],
      considerations: [
        "Accounting and inventory rules need clear ownership while workflows can cross domain boundaries.",
        "Changes to one area should be considered against their effects on connected workflows.",
      ],
      technology: "Python · FastAPI · React · MySQL / MariaDB · REST APIs · AWS · Linux · Nginx",
      ctaLabel: "Discuss related work",
    },
    es: {
      context:
        "Una plataforma empresarial que abarca flujos de finanzas, ventas, inventario, recursos humanos y contabilidad.",
      purpose:
        "Reunir esos dominios operativos en un modelo ERP y permitir que sus reglas de negocio evolucionen de forma deliberada.",
      responsibility:
        "Mi trabajo se centra en la evolución backend y de sistemas alrededor de las reglas de negocio, los límites de servicio y las restricciones operativas.",
      decisions: [
        "Separar responsabilidades de dominio entre finanzas, inventario, RH, ventas y contabilidad.",
        "Usar APIs explícitas y capas de servicio para representar flujos de negocio en lugar de reflejar tablas de base de datos.",
        "Mantener coherentes los flujos entre dominios conforme evolucionan los módulos.",
      ],
      considerations: [
        "Las reglas contables y de inventario necesitan responsabilidades claras aunque los flujos crucen dominios.",
        "Los cambios en un área deben evaluarse considerando sus efectos en flujos conectados.",
      ],
      technology: "Python · FastAPI · React · MySQL / MariaDB · APIs REST · AWS · Linux · Nginx",
      ctaLabel: "Conversemos sobre un proyecto similar",
    },
  },
  "tr0v1-credit-platform": {
    en: {
      context:
        "The portfolio documents a credit-management platform with workflows for credit lines, installments, interest, payments, reconciliation, and account statements.",
      purpose:
        "Represent credit operations as explicit financial workflows and state transitions, with APIs serving administrative tools and client interfaces.",
      responsibility:
        "I work on architecture and backend evolution that express financial rules and state transitions through services and APIs.",
      decisions: [
        "Model credit accounts, payment flows, and interest calculations around the domain rules.",
        "Design services for financial workflows rather than direct CRUD operations.",
      ],
      considerations: [
        "Retries, partial payments, interest calculations, and reconciliation require careful handling of financial state.",
        "Balance consistency must be considered across workflow transitions.",
      ],
      technology: "Python · FastAPI · SQLAlchemy · React · REST APIs",
      ctaLabel: "Discuss related work",
    },
    es: {
      context:
        "Una plataforma de gestión de crédito con flujos para líneas de crédito, parcialidades, intereses, pagos, conciliación y estados de cuenta.",
      purpose:
        "Representar las operaciones de crédito como flujos financieros y transiciones de estado explícitos, con APIs utilizadas por herramientas administrativas e interfaces de clientes.",
      responsibility:
        "Trabajo en la arquitectura y la evolución backend que expresan reglas financieras y transiciones de estado mediante servicios y APIs.",
      decisions: [
        "Modelar créditos, flujos de pago y cálculos de intereses alrededor de las reglas del dominio.",
        "Diseñar servicios para flujos financieros en lugar de operaciones CRUD directas.",
      ],
      considerations: [
        "Los reintentos, pagos parciales, cálculos de intereses y conciliaciones requieren manejar cuidadosamente el estado financiero.",
        "La consistencia de saldos debe considerarse a través de las transiciones del flujo.",
      ],
      technology: "Python · FastAPI · SQLAlchemy · React · APIs REST",
      ctaLabel: "Conversemos sobre un proyecto similar",
    },
  },
  workforce: {
    en: {
      context:
        "An independent workforce-management project with a documented local-development scope.",
      purpose:
        "Explore workflows for people, organizational structure, and work schedules.",
      responsibility:
        "I shape the system design and implementation direction around organization context, authorization, data integrity, and auditable workflows.",
      decisions: [
        "Keep the backend API and web frontend as distinct parts of a modular system.",
        "Separate user, membership, and employee responsibilities in the model.",
        "Version organizational and scheduling configuration as it evolves.",
      ],
      considerations: [
        "Organization context and authorization boundaries need to remain explicit across workflows.",
        "This is local development scope, not production software.",
      ],
      technology: "FastAPI · React · PostgreSQL",
      status: "Local-development scope · Not production software",
      ctaLabel: "Discuss related work",
    },
    es: {
      context:
        "Proyecto independiente de gestión laboral con un alcance documentado de desarrollo local.",
      purpose:
        "Explorar flujos para personas, estructura organizacional y horarios de trabajo.",
      responsibility:
        "Defino el diseño del sistema y la dirección de implementación alrededor del contexto organizacional, la autorización, la integridad de datos y los flujos auditables.",
      decisions: [
        "Mantener el backend API y el frontend web como partes diferenciadas de un sistema modular.",
        "Separar las responsabilidades de usuario, membresía y empleado en el modelo.",
        "Versionar la configuración organizacional y de horarios conforme evoluciona.",
      ],
      considerations: [
        "El contexto organizacional y los límites de autorización deben permanecer explícitos entre los flujos.",
        "El alcance corresponde a desarrollo local; no es software en producción.",
      ],
      technology: "FastAPI · React · PostgreSQL",
      status: "Alcance de desarrollo local · No es software en producción",
      ctaLabel: "Conversemos sobre un proyecto similar",
    },
  },
};

export const systems: SystemEntry[] = [
  {
    slug: "businext-erp",
    technologies: ["Python", "FastAPI", "React", "AWS", "MySQL / MariaDB", "REST APIs"],
    content: {
      en: {
        name: "BusiNext ERP",
        tagline:
          "An ERP platform bringing finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.",
        businessContext:
          "BusiNext originated inside a real business operation that initially relied on a legacy POS system developed in C# and running on physical servers. That system presented technological limitations, vendor dependency, and difficulties evolving toward new operational requirements. A first web version was later developed using Web2py focused on sales and inventory. Although this version still operates certain processes such as point-of-sale and stock control, its functional evolution stopped. Based on that experience, BusiNext ERP was created as a new platform designed to progressively replace previous systems and centralize the company's operational infrastructure.",
        responsibility:
          "I design and lead backend and systems evolution around the business rules, service boundaries, and operational constraints that the platform must preserve.",
        solution:
          "BusiNext ERP is an ERP platform bringing finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.",
        stack:
          "Python · FastAPI · React · MySQL / MariaDB · REST APIs · AWS · Linux · Nginx",
        architectureApproach: [
          "Domain boundaries defined for finance, inventory, HR, sales, and accounting.",
          "API-first architecture that enables explicit workflows and independent module evolution.",
          "Modular FastAPI backend with clear service layers for business rules.",
          "Infrastructure organized around AWS, Linux, and Nginx with clear operational boundaries.",
        ],
        technicalChallenges: [
          "Keeping accounting and inventory rules isolated while still supporting cross-domain workflows.",
          "Evolving a multi-domain ERP without turning every new feature into a platform-wide regression.",
          "Designing APIs and modules that match the business process instead of mirroring database tables.",
        ],
        constraints: [
          "Cross-domain workflows must remain coherent while the ERP evolves without making every change a platform-wide regression.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "BusiNext ERP",
        tagline:
          "Plataforma ERP que reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.",
        businessContext:
          "BusiNext surgió dentro de una operación empresarial real que inicialmente dependía de un sistema POS legacy desarrollado en C# y ejecutado en servidores físicos. Ese sistema presentaba limitaciones tecnológicas, dependencia del proveedor original y dificultades para evolucionar hacia nuevas necesidades operativas. Posteriormente se desarrolló una primera versión web utilizando Web2py enfocada en ventas e inventario. Aunque esta versión continúa operando algunos procesos como puntos de venta y control de stock, su evolución funcional se detuvo. A partir de esa experiencia se inició el desarrollo de BusiNext ERP, una nueva plataforma diseñada para reemplazar progresivamente los sistemas anteriores y centralizar la operación empresarial.",
        responsibility:
          "Diseño y lidero la evolución backend y de sistemas alrededor de las reglas de negocio, los límites de servicio y las restricciones operativas que la plataforma debe conservar.",
        solution:
          "BusiNext ERP es una plataforma ERP que reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.",
        stack:
          "Python · FastAPI · React · MySQL / MariaDB · APIs REST · AWS · Linux · Nginx",
        architectureApproach: [
          "Límites de dominio definidos para finanzas, inventario, RH, ventas y contabilidad.",
          "Arquitectura orientada a APIs que permite flujos explícitos y evolución independiente de módulos.",
          "Backend modular en FastAPI con capas de servicio claras para reglas de negocio.",
          "Infraestructura organizada alrededor de AWS, Linux y Nginx con límites operativos claros.",
        ],
        technicalChallenges: [
          "Mantener aisladas las reglas contables y de inventario sin romper flujos que cruzan varios dominios.",
          "Evolucionar un ERP multidominio sin convertir cada funcionalidad nueva en una regresión transversal.",
          "Diseñar APIs y módulos que sigan el proceso de negocio en lugar de copiar tablas de base de datos.",
        ],
        constraints: [
          "Los flujos que cruzan dominios deben mantenerse coherentes mientras el ERP evoluciona sin convertir cada cambio en una regresión transversal.",
        ],
        ctaLabel: "Explorar arquitectura del sistema",
      },
    },
  },
  {
    slug: "tr0v1-credit-platform",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "React", "REST APIs"],
    content: {
      en: {
        name: "TR0V1 Credit Platform",
        tagline:
          "A credit platform organized around installments, interest, payments, reconciliation, and account statements.",
        businessContext:
          "TR0V1 was created to support a credit-management operation. The platform needed to manage credit lines, installments, interest, payments, and account statements while maintaining financial consistency. The system evolved from an earlier Web2py implementation toward a modern architecture using FastAPI and React, with the domain rules and migration constraints made explicit.",
        responsibility:
          "I work on the architecture and backend evolution that turns financial rules and state transitions into explicit services and APIs.",
        solution:
          "TR0V1 is a credit platform organized around installments, interest, payments, reconciliation, and account statements.",
        stack:
          "Python · FastAPI · SQLAlchemy · React · REST APIs",
        architectureApproach: [
          "Backend focused on financial business rules and state transitions.",
          "Domain modeling for credit accounts, payment flows, and interest calculations.",
          "APIs consumed by both internal administrative tools and client interfaces.",
          "Architecture designed to preserve financial consistency in critical operations.",
        ],
        technicalChallenges: [
          "Preventing duplicate financial events during retries and asynchronous flows.",
          "Maintaining balance consistency over time with partial payments and interest calculations.",
          "Designing services that represent financial workflows instead of simple CRUD operations.",
        ],
        constraints: [
          "Retries, partial payments, interest calculations, and reconciliation create failure modes that simple CRUD cannot represent safely.",
        ],
        impact: [
          "The platform is organized around traceable financial workflows and explicit rules for credit lifecycle operations.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "TR0V1 Credit Platform",
        tagline:
          "Plataforma crediticia organizada alrededor de parcialidades, intereses, pagos, conciliación y estados de cuenta.",
        businessContext:
          "TR0V1 surgió para soportar una operación de gestión de crédito. El sistema debía gestionar líneas de crédito, parcialidades, intereses, pagos y estados de cuenta manteniendo consistencia financiera. Evolucionó desde una implementación anterior en Web2py hacia una arquitectura moderna basada en FastAPI y React, haciendo explícitas las reglas de dominio y las restricciones de migración.",
        responsibility:
          "Trabajo en la arquitectura y la evolución backend que convierten reglas financieras y transiciones de estado en servicios y APIs explícitos.",
        solution:
          "TR0V1 es una plataforma crediticia organizada alrededor de parcialidades, intereses, pagos, conciliación y estados de cuenta.",
        stack:
          "Python · FastAPI · SQLAlchemy · React · APIs REST",
        architectureApproach: [
          "Backend centrado en reglas de negocio y transiciones de estado financieras.",
          "Modelado de dominio para créditos, líneas de financiamiento, pagos e intereses.",
          "APIs utilizadas tanto por la aplicación administrativa como por la interfaz de clientes.",
          "Arquitectura orientada a mantener consistencia financiera en eventos críticos.",
        ],
        technicalChallenges: [
          "Evitar eventos financieros duplicados durante reintentos y procesos asíncronos.",
          "Mantener consistencia de saldos a través del tiempo considerando pagos parciales, cortes e intereses.",
          "Diseñar servicios que representen flujos financieros reales en lugar de CRUD directo sobre tablas.",
        ],
        constraints: [
          "Los reintentos, pagos parciales, cálculos de intereses y conciliaciones generan fallos que un CRUD simple no puede representar de forma segura.",
        ],
        impact: [
          "La plataforma está organizada alrededor de flujos financieros trazables y reglas explícitas para las operaciones del ciclo crediticio.",
        ],
        ctaLabel: "Explorar arquitectura del sistema",
      },
    },
  },
  {
    slug: "workforce",
    technologies: ["FastAPI", "React", "PostgreSQL"],
    cardFocus: {
      en: {
        label: "Architecture focus",
        items: ["Organization context", "Authorization boundaries", "Auditable workflows"],
      },
      es: {
        label: "Enfoque de arquitectura",
        items: ["Contexto de organización", "Límites de autorización", "Flujos auditables"],
      },
    },
    content: {
      en: {
        name: "Workforce",
        tagline:
          "An independent workforce-management product with a documented local-development scope.",
        businessContext:
          "The documented local implementation covers a secure multi-organization foundation, People and Employee management, and configuration of organizational structure and work schedules.",
        responsibility:
          "I shape the system design and implementation direction around organization context, authorization, data integrity, and auditable operational workflows.",
        solution:
          "Workforce uses FastAPI, React and PostgreSQL with server-derived organization context, tenant isolation, audited mutations, idempotency, and versioned schedule and policy configuration.",
        stack:
          "FastAPI · React · PostgreSQL",
        architectureApproach: [
          "Modular-monolith direction with an API-first backend and a separate web frontend.",
          "PostgreSQL is the transactional core; organization context is derived on the server and RLS provides defense in depth.",
          "User, Membership, and Employee responsibilities remain separate in the system model.",
          "Audited mutations, idempotency, optimistic concurrency, and versioned organizational and scheduling configuration support reliable workflows.",
          "Foundation covers BFF/Cognito integration, an HttpOnly session, CSRF, organization selection, AuthenticationContext to TenantContext, PostgreSQL roles, and RLS.",
          "People / Employees covers employee lifecycle operations, User / Employee separation, auditability, idempotency, ETag-based optimistic concurrency, and employment periods.",
          "Structure / Scheduling covers worksites, departments, positions, effective assignments, versioned timezones, policies, schedules, schedule segments, lifecycle operations, date/timezone-aware resolution, and administrative UI.",
        ],
        technicalChallenges: [
          "Keeping organization context explicit across authorization and workflow operations.",
          "Designing people and scheduling workflows that remain auditable as responsibilities evolve.",
          "Keeping the documented local-development scope distinct from future product capabilities.",
        ],
        constraints: [
          "The architecture is designed for local development scope; Workforce is not production software.",
        ],
        impact: [
          "Workforce is an independent workforce-management product with a documented local-development scope.",
        ],
        results: [
          "The local implementation covers Foundation, People / Employees, and Structure / Scheduling.",
          "Workforce remains separate from the BusiNext and TR0V1 system narratives.",
          "Workforce is not production software.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "Workforce",
        tagline:
          "Producto independiente de gestión laboral con un alcance documentado de desarrollo local.",
        businessContext:
          "La implementación local documentada cubre una base segura multi-organización, la gestión de Personas y Empleados, y la configuración de estructura organizacional y horarios de trabajo.",
        responsibility:
          "Defino el diseño de sistemas y la dirección de implementación alrededor del contexto de organización, la autorización, la integridad de datos y los flujos operativos auditables.",
        solution:
          "Workforce utiliza FastAPI, React y PostgreSQL con contexto de organización derivado del servidor, aislamiento por tenant, mutaciones auditadas, idempotencia y configuración versionada de horarios y políticas.",
        stack:
          "FastAPI · React · PostgreSQL",
        architectureApproach: [
          "Dirección de monolito modular con backend orientado a APIs y frontend web separado.",
          "PostgreSQL es el núcleo transaccional; el contexto de organización se deriva en el servidor y RLS ofrece defensa en profundidad.",
          "Las responsabilidades de Usuario, Membresía y Empleado permanecen separadas en el modelo del sistema.",
          "Las mutaciones auditadas, la idempotencia, la concurrencia optimista y la configuración versionada de estructura y horarios apoyan flujos confiables.",
          "La Base incluye integración BFF/Cognito, sesión HttpOnly, CSRF, selección de organización, AuthenticationContext hacia TenantContext, roles de PostgreSQL y RLS.",
          "Personas / Empleados incluye operaciones del ciclo de vida del empleado, separación Usuario / Empleado, auditabilidad, idempotencia, concurrencia optimista con ETag y periodos laborales.",
          "Estructura / Horarios incluye centros de trabajo, departamentos, puestos, asignaciones efectivas, zonas horarias versionadas, políticas, horarios, segmentos de horario, operaciones de ciclo de vida, resolución consciente de fecha y zona horaria, e interfaz administrativa.",
        ],
        technicalChallenges: [
          "Mantener explícito el contexto de organización entre autorizaciones y operaciones de flujo.",
          "Diseñar flujos de personas y horarios que mantengan auditabilidad conforme evolucionan las responsabilidades.",
          "Mantener separado el alcance documentado de desarrollo local de las capacidades futuras del producto.",
        ],
        constraints: [
          "La arquitectura está diseñada para el alcance de desarrollo local; Workforce no es software en producción.",
        ],
        impact: [
          "Workforce es un producto independiente de gestión laboral con un alcance documentado de desarrollo local.",
        ],
        results: [
          "La implementación local cubre Base, Personas / Empleados y Estructura / Horarios.",
          "Workforce permanece separado de las narrativas de BusiNext y TR0V1.",
          "Workforce no es software en producción.",
        ],
        ctaLabel: "Explorar arquitectura del sistema",
      },
    },
  },
];

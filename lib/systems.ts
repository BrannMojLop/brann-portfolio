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
  impact: string[];
  results: string[];
  ctaLabel: string;
};

export interface SystemEntry {
  slug: "businext-erp" | "tr0v1-credit-platform" | "workforce";
  technologies: string[];
  cardFocus?: Record<Locale, { label: string; items: string[] }>;
  content: Record<Locale, SystemText>;
}

export const systems: SystemEntry[] = [
  {
    slug: "businext-erp",
    technologies: ["Python", "FastAPI", "React", "AWS", "MySQL / MariaDB", "REST APIs"],
    content: {
      en: {
        name: "Businext ERP",
        tagline:
          "An ERP platform bringing finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.",
        businessContext:
          "Businext originated inside a real business operation that initially relied on a legacy POS system developed in C# and running on physical servers. That system presented technological limitations, vendor dependency, and difficulties evolving toward new operational requirements. A first web version was later developed using Web2py focused on sales and inventory. Although this version still operates certain processes such as point-of-sale and stock control, its functional evolution stopped. Based on that experience, Businext ERP was created as a new platform designed to progressively replace previous systems and centralize the company's operational infrastructure.",
        responsibility:
          "I design and lead backend and systems evolution around the business rules, service boundaries, and operational constraints that the platform must preserve.",
        solution:
          "Businext ERP is an ERP platform bringing finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.",
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
        impact: [
          "The platform provides a maintainable foundation for continuing enterprise-system evolution across the documented operational domains.",
        ],
        results: [
          "Reduced process fragmentation by consolidating administrative workflows in one operational model.",
          "Made finance, sales, inventory, and HR changes easier to reason about through explicit service boundaries.",
          "Created a maintainable internal ERP foundation that can absorb new modules without reworking the whole platform.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "Businext ERP",
        tagline:
          "Plataforma ERP que reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.",
        businessContext:
          "Businext surgió dentro de una operación empresarial real que inicialmente dependía de un sistema POS legacy desarrollado en C# y ejecutado en servidores físicos. Ese sistema presentaba limitaciones tecnológicas, dependencia del proveedor original y dificultades para evolucionar hacia nuevas necesidades operativas. Posteriormente se desarrolló una primera versión web utilizando Web2py enfocada en ventas e inventario. Aunque esta versión continúa operando algunos procesos como puntos de venta y control de stock, su evolución funcional se detuvo. A partir de esa experiencia se inició el desarrollo de Businext ERP, una nueva plataforma diseñada para reemplazar progresivamente los sistemas anteriores y centralizar la operación empresarial.",
        responsibility:
          "Diseño y lidero la evolución backend y de sistemas alrededor de las reglas de negocio, los límites de servicio y las restricciones operativas que la plataforma debe conservar.",
        solution:
          "Businext ERP es una plataforma ERP que reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.",
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
        impact: [
          "La plataforma ofrece una base mantenible para continuar la evolución de sistemas empresariales en los dominios operativos documentados.",
        ],
        results: [
          "Redujo la fragmentación operativa al consolidar flujos administrativos en un mismo modelo.",
          "Hizo más entendibles los cambios en finanzas, ventas, inventario y RH mediante límites claros de servicio.",
          "Creó una base ERP mantenible capaz de absorber nuevos módulos sin rehacer toda la plataforma.",
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
        results: [
          "Made credit lifecycle rules explicit across charges, billing periods, payments, and statements.",
          "Improved operational control by detecting reconciliation differences early.",
          "Delivered a backend platform supporting both internal operations and client visibility.",
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
        results: [
          "Hizo explícitas las reglas del ciclo crediticio entre cargos, periodos, pagos y estados de cuenta.",
          "Mejoró el control operativo al detectar diferencias de conciliación antes de que escalaran.",
          "Entregó una plataforma backend que soporta operación interna y visibilidad para clientes.",
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
          "An independent workforce-management product in active development.",
        businessContext:
          "Its current local implementation covers a secure multi-organization foundation, People and Employee management, and configuration of organizational structure and work schedules.",
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
          "Keeping current local implementation scope distinct from future product capabilities.",
        ],
        constraints: [
          "The architecture is designed for local development scope; Workforce is not production software.",
        ],
        impact: [
          "Workforce is an independent workforce-management product in active local development.",
        ],
        results: [
          "The local implementation covers Foundation, People / Employees, and Structure / Scheduling.",
          "Workforce remains separate from the Businext and TR0V1 system narratives.",
          "Workforce is not production software.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "Workforce",
        tagline:
          "Producto independiente de gestión laboral en desarrollo activo.",
        businessContext:
          "Su implementación local actual cubre una base segura multi-organización, la gestión de Personas y Empleados, y la configuración de estructura organizacional y horarios de trabajo.",
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
          "Mantener separado el alcance de la implementación local actual de las capacidades futuras del producto.",
        ],
        constraints: [
          "La arquitectura está diseñada para el alcance de desarrollo local; Workforce no es software en producción.",
        ],
        impact: [
          "Workforce es un producto independiente de gestión laboral en desarrollo local activo.",
        ],
        results: [
          "La implementación local cubre Base, Personas / Empleados y Estructura / Horarios.",
          "Workforce permanece separado de las narrativas de Businext y TR0V1.",
          "Workforce no es software en producción.",
        ],
        ctaLabel: "Explorar arquitectura del sistema",
      },
    },
  },
];

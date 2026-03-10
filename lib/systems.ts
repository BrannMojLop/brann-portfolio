import type { Locale } from "@/lib/i18n";

type SystemText = {
  name: string;
  tagline: string;
  businessContext: string;
  solution: string;
  stack: string;
  architectureApproach: string[];
  technicalChallenges: string[];
  impact: string[];
  results: string[];
  ctaLabel: string;
};

export interface SystemEntry {
  slug: "businext-erp" | "tr0v1-credit-platform";
  technologies: string[];
  content: Record<Locale, SystemText>;
}

export const systems: SystemEntry[] = [
  {
    slug: "businext-erp",
    technologies: ["Python", "FastAPI", "React", "AWS", "PostgreSQL", "REST APIs"],
    content: {
      en: {
        name: "Businext ERP",
        tagline:
          "Enterprise ERP platform developed from scratch to support finance, sales, inventory, and human resources operations within a unified system.",
        businessContext:
          "Businext was created inside a live industrial business to replace fragmented spreadsheets, disconnected admin tools, and manual coordination between finance, inventory, sales, and HR. The platform had to support daily operations without forcing teams to adapt to generic ERP assumptions that did not match the company workflow.",
        solution:
          "The platform was designed to replace fragmented processes with a maintainable backend architecture, domain-oriented design, and long-term operational traceability.",
        stack: "Python · FastAPI · React · PostgreSQL · REST APIs · AWS · Linux · Nginx",
        architectureApproach: [
          "Domain boundaries defined for finance, inventory, HR, sales, and accounting.",
          "API-first architecture that enables explicit workflows and independent module evolution.",
          "Modular FastAPI backend with clear service layers for business rules.",
          "Production deployment on AWS over Linux and Nginx with controlled change release.",
        ],
        technicalChallenges: [
          "Keeping accounting and inventory rules isolated while still supporting cross-domain workflows.",
          "Evolving a 200k+ LOC ERP without turning every new feature into a platform-wide regression.",
          "Designing APIs and modules that match the business process instead of mirroring database tables.",
        ],
        impact: [
          "Central platform for daily business operations across multiple areas.",
          "Enterprise codebase with more than 200k lines and continuous growth.",
          "Internal system where data consistency, business rules, and auditability are critical.",
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
          "ERP empresarial desarrollado desde cero para soportar operaciones de finanzas, ventas, inventario y recursos humanos dentro de una plataforma unificada.",
        businessContext:
          "Businext nació dentro de una operación industrial real para reemplazar hojas de cálculo, herramientas administrativas desconectadas y coordinación manual entre finanzas, inventario, ventas y recursos humanos. La plataforma debía soportar la operación diaria sin forzar al negocio a adaptarse a supuestos genéricos de un ERP tradicional.",
        solution:
          "La plataforma fue diseñada para reemplazar procesos fragmentados mediante una arquitectura backend mantenible, orientada a dominio y preparada para evolución funcional y trazabilidad operativa a largo plazo.",
        stack: "Python · FastAPI · React · PostgreSQL · REST APIs · AWS · Linux · Nginx",
        architectureApproach: [
          "Límites de dominio definidos para finanzas, inventario, RH, ventas y contabilidad.",
          "Arquitectura orientada a APIs que permite flujos explícitos y evolución independiente de módulos.",
          "Backend modular en FastAPI con capas de servicio claras para reglas de negocio.",
          "Despliegue productivo en AWS sobre Linux y Nginx con liberación controlada de cambios.",
        ],
        technicalChallenges: [
          "Mantener aisladas las reglas contables y de inventario sin romper flujos que cruzan varios dominios.",
          "Evolucionar un ERP de más de 200k líneas sin convertir cada funcionalidad nueva en una regresión transversal.",
          "Diseñar APIs y módulos que sigan el proceso de negocio en lugar de copiar tablas de base de datos.",
        ],
        impact: [
          "Plataforma central para la operación diaria del negocio en múltiples áreas.",
          "Base de código empresarial con más de 200k líneas en crecimiento continuo.",
          "Sistema interno donde consistencia de datos, reglas de negocio y auditabilidad son críticas.",
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
    technologies: ["Python", "FastAPI", "SQLAlchemy", "React", "Microservices"],
    content: {
      en: {
        name: "TR0V1 Credit Platform",
        tagline:
          "Financial system designed to manage credit, payments, interest, and account statements with auditable operational rules.",
        businessContext:
          "TR0V1 was designed for a real credit operation where balances, due dates, payments, interest, and customer visibility had to remain consistent over time. The core challenge was not only exposing data, but protecting the integrity of financial state transitions across administrative and customer-facing flows.",
        solution:
          "The platform models the full credit lifecycle — contracts, balances, payments, and reconciliation — using a backend architecture focused on financial consistency and operational traceability.",
        stack: "Python · FastAPI · SQLAlchemy · React · REST APIs · Financial Services",
        architectureApproach: [
          "Backend-first architecture centered on business rules and state transitions.",
          "Domain modeling for credit, periods, payments, interest, and reconciliation.",
          "APIs consumed by both internal operations and a customer-oriented portal.",
          "Design focused on financial traceability and consistency in critical events.",
        ],
        technicalChallenges: [
          "Preventing duplicate financial events during retries, support operations, and asynchronous processes.",
          "Keeping account balances, payment schedules, statements, and reconciliation jobs aligned over time.",
          "Designing services that expose clear operational workflows instead of thin CRUD over financial tables.",
        ],
        impact: [
          "Financial platform used for real credit operations.",
          "Helps maintain consistency between balances, due dates, and payments over time.",
          "Improves traceability of financial events for reconciliation and operational control.",
        ],
        results: [
          "Made credit lifecycle rules explicit across charges, periods, payments, and statements.",
          "Improved operational control by surfacing reconciliation mismatches before they escalated.",
          "Provided a backend platform that supports internal staff and customer visibility without splitting the source of truth.",
        ],
        ctaLabel: "Explore system architecture",
      },
      es: {
        name: "TR0V1 Credit Platform",
        tagline:
          "Sistema financiero diseñado para gestionar crédito, pagos, intereses y estados de cuenta con reglas operativas auditables.",
        businessContext:
          "TR0V1 fue diseñada para una operación crediticia real donde saldos, vencimientos, pagos, intereses y visibilidad para clientes debían mantenerse consistentes con el tiempo. El reto central no era solo exponer datos, sino proteger la integridad de las transiciones financieras en flujos administrativos y orientados al cliente.",
        solution:
          "La plataforma modela el ciclo completo de crédito — contratos, saldos, pagos y conciliaciones — mediante una arquitectura backend orientada a consistencia financiera y trazabilidad operativa.",
        stack: "Python · FastAPI · SQLAlchemy · React · APIs REST · Servicios financieros",
        architectureApproach: [
          "Arquitectura centrada en backend para reglas de negocio y transiciones de estado.",
          "Modelado de dominio para crédito, periodos, pagos, intereses y conciliación.",
          "APIs consumidas tanto por operación interna como por portal orientado al cliente.",
          "Diseño orientado a trazabilidad financiera y consistencia en eventos críticos.",
        ],
        technicalChallenges: [
          "Evitar eventos financieros duplicados durante reintentos, soporte operativo y procesos asíncronos.",
          "Mantener alineados saldos, calendarios de pago, estados de cuenta y conciliaciones con el paso del tiempo.",
          "Diseñar servicios que expongan flujos operativos claros en lugar de CRUD delgado sobre tablas financieras.",
        ],
        impact: [
          "Plataforma financiera utilizada para operación crediticia real.",
          "Permite mantener consistencia entre saldos, vencimientos y pagos a lo largo del tiempo.",
          "Mejora la trazabilidad de eventos financieros para conciliación y control operativo.",
        ],
        results: [
          "Volvió explícitas las reglas del ciclo crediticio entre cargos, periodos, pagos y estados de cuenta.",
          "Mejoró el control operativo al detectar diferencias de conciliación antes de que escalaran.",
          "Entregó una plataforma backend que soporta operación interna y visibilidad al cliente sin dividir la fuente de verdad.",
        ],
        ctaLabel: "Explorar arquitectura del sistema",
      },
    },
  },
];

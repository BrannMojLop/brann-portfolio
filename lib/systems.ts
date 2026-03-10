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
    technologies: ["Python", "FastAPI", "React", "AWS", "MySQL / MariaDB", "REST APIs"],
    content: {
      en: {
        name: "Businext ERP",
        tagline:
          "Enterprise ERP system developed from scratch to support real operations across finance, sales, inventory, and human resources within a unified platform.",
        businessContext:
          "Businext originated inside a real business operation that initially relied on a legacy POS system developed in C# and running on physical servers. That system presented technological limitations, vendor dependency, and difficulties evolving toward new operational requirements. A first web version was later developed using Web2py focused on sales and inventory. Although this version still operates certain processes such as point-of-sale and stock control, its functional evolution stopped. Based on that experience, Businext ERP was created as a new platform designed to progressively replace previous systems and centralize the company's operational infrastructure.",
        solution:
          "Businext ERP consolidates processes that were previously distributed across spreadsheets, disconnected tools, and external systems. The platform integrates financial operations, HR management, purchasing workflows, CRM, accounting, and administrative control within a domain-oriented backend architecture. This approach enables clearer business rules, operational traceability, and long-term platform evolution.",
        stack:
          "Python · FastAPI · React · MySQL / MariaDB · REST APIs · AWS · Linux · Nginx | Architecture: Domain boundaries · Service layer · Transactional workflows",
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
          "Central platform for the company's administrative and financial operations.",
          "Enterprise codebase with more than 125k lines under continuous evolution.",
          "System designed to support critical business rules, operational consistency, and financial traceability.",
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
          "ERP empresarial desarrollado desde cero para soportar operaciones reales de finanzas, ventas, inventario y recursos humanos dentro de una plataforma unificada.",
        businessContext:
          "Businext surgió dentro de una operación empresarial real que inicialmente dependía de un sistema POS legacy desarrollado en C# y ejecutado en servidores físicos. Ese sistema presentaba limitaciones tecnológicas, dependencia del proveedor original y dificultades para evolucionar hacia nuevas necesidades operativas. Posteriormente se desarrolló una primera versión web utilizando Web2py enfocada en ventas e inventario. Aunque esta versión continúa operando algunos procesos como puntos de venta y control de stock, su evolución funcional se detuvo. A partir de esa experiencia se inició el desarrollo de Businext ERP, una nueva plataforma diseñada para reemplazar progresivamente los sistemas anteriores y centralizar la operación empresarial.",
        solution:
          "Businext ERP busca consolidar procesos que anteriormente estaban distribuidos entre múltiples herramientas, hojas de cálculo y sistemas externos. La plataforma integra operaciones financieras, recursos humanos, compras, CRM, contabilidad y control administrativo dentro de una arquitectura backend modular orientada a dominio. Esto permite mantener reglas de negocio claras, trazabilidad operativa y evolución funcional a largo plazo.",
        stack:
          "Python · FastAPI · React · MySQL / MariaDB · REST APIs · AWS · Linux · Nginx | Arquitectura: Domain boundaries · Service layer · Transactional workflows",
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
          "Plataforma central para la operación administrativa y financiera del negocio.",
          "Base de código empresarial con más de 125k líneas en evolución continua.",
          "Sistema diseñado para soportar reglas de negocio críticas, consistencia operativa y trazabilidad financiera.",
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
          "Financial platform designed to manage credit accounts, payments, interest calculations, and account statements within a real credit operation.",
        businessContext:
          "TR0V1 was created to support a new business model based on providing credit to customers within a commercial operation. The platform needed to manage balances, billing cycles, payments, interest, and account statements while maintaining long-term financial consistency. The first version was built using Web2py for both internal users and client access. As the system evolved, a full migration was performed to a modern architecture using FastAPI and React. A complete migration of data, documents, and historical records was later executed to move the system into the new platform. TR0V1 currently runs on this architecture and was recently integrated into Businext ERP as part of the broader enterprise platform.",
        solution:
          "TR0V1 models the full lifecycle of a credit account including: credit applications, approvals and contracts, credit lines, purchases and charges, payments and reconciliation, and account statement generation. The platform focuses on financial consistency, operational traceability, and clear business rules across critical transactions.",
        stack:
          "Python · FastAPI · SQLAlchemy · React · REST APIs | Architecture: Service layer · Transactional workflows · Financial domain modeling",
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
        impact: [
          "Platform used to operate a real credit model for customers.",
          "Maintains consistency between balances, billing cycles, and payments.",
          "Improves traceability of financial events for reconciliation and operational control.",
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
          "Sistema financiero diseñado para gestionar crédito, pagos, intereses y estados de cuenta dentro de una operación crediticia real.",
        businessContext:
          "TR0V1 surgió para habilitar un nuevo modelo de negocio basado en crédito a clientes dentro de una operación comercial real. El sistema debía gestionar saldos, fechas de corte, pagos, intereses y estados de cuenta manteniendo consistencia financiera a lo largo del tiempo. La primera versión fue desarrollada como una aplicación web utilizando Web2py para usuarios internos y clientes. Con el crecimiento del sistema y nuevas necesidades operativas, se inició una migración completa hacia una arquitectura moderna basada en FastAPI y React. Posteriormente se realizó una migración completa de datos, documentos y archivos hacia la nueva plataforma. Actualmente TR0V1 opera con esta nueva arquitectura y recientemente fue integrado como módulo dentro de Businext ERP para consolidar la infraestructura de la plataforma empresarial.",
        solution:
          "TR0V1 modela el ciclo completo de crédito incluyendo: solicitudes de crédito, aprobación y contratos, líneas de crédito, cargos y compras, pagos y conciliaciones, y generación de estados de cuenta. La plataforma fue diseñada para mantener consistencia financiera, trazabilidad operativa y reglas de negocio claras en transacciones críticas.",
        stack:
          "Python · FastAPI · SQLAlchemy · React · REST APIs | Arquitectura: Service layer · Transactional workflows · Financial domain modeling",
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
        impact: [
          "Plataforma utilizada para operar un modelo de crédito a clientes dentro de la empresa.",
          "Permite mantener consistencia entre saldos, cortes de cuenta y pagos.",
          "Mejora la trazabilidad de eventos financieros para conciliación y control operativo.",
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
];

# Approved bilingual public copy reference

This is the approved bilingual public copy reference used for the implementation. Existing Engineering Note bodies are intentionally excluded.

## Home — English

### Primary

- Eyebrow: `SYSTEMS ENGINEERING PORTFOLIO`
- Title: `Software engineer focused on software architecture and backend systems.`
- Lead: `I design and lead the evolution of business-critical platforms around real operational constraints.`
- Supporting text: `My work connects business rules, domain modeling, backend architecture, and maintainable APIs across enterprise and financial workflows.`
- Technical label: `ENGINEERING FOCUS`

### Focus principles

- `Systems I build` — Enterprise, credit, and workforce platforms shaped by operational workflows.
- `How I design systems` — Boundaries, data, authorization, and trade-offs made explicit before implementation.
- `How I engineer software` — Specifications, bounded responsibilities, independent review, and evidence before release.

### Selected systems

- `Businext ERP` — An ERP platform bringing finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.
- `TR0V1 Credit Platform` — A credit platform organized around installments, interest, payments, reconciliation, and account statements.
- `Workforce` — An independent workforce-management product in active development. Its current local implementation covers a secure multi-organization foundation, People and Employee management, and configuration of organizational structure and work schedules.

### How I engineer software

`Problem framing → Discovery → SDD / Architecture → Implementation plan → Specialized AI-assisted roles → Implementation → Independent review → Evidence / QA → Release gate`

Short description: `I use AI-assisted roles for bounded analysis and implementation support, while engineering responsibility remains human. Planning, implementation, and review stay separate, and each stage records the decisions, evidence, open questions, and acceptance criteria the next stage needs.`

### CTA labels

- `Explore selected systems`
- `Read Engineering Notes`
- `See how I engineer software`

## Home — Spanish

### Principal

- Eyebrow: `PORTAFOLIO DE INGENIERÍA DE SISTEMAS`
- Title: `Ingeniero de software enfocado en arquitectura de software y sistemas backend.`
- Lead: `Diseño y lidero la evolución de plataformas críticas para el negocio alrededor de restricciones operativas reales.`
- Supporting text: `Mi trabajo conecta reglas de negocio, modelado de dominio, arquitectura backend y APIs mantenibles en flujos empresariales y financieros.`
- Technical label: `ENFOQUE DE INGENIERÍA`

### Principios de enfoque

- `Sistemas que construyo` — Plataformas empresariales, crediticias y de gestión laboral definidas por flujos operativos.
- `Cómo diseño sistemas` — Hago explícitos los límites, los datos, la autorización y las decisiones técnicas antes de implementar.
- `Cómo hago ingeniería de software` — Especificaciones, responsabilidades acotadas, revisión independiente y evidencia antes de liberar.

### Sistemas seleccionados

- `Businext ERP` — Plataforma ERP que reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.
- `TR0V1 Credit Platform` — Plataforma crediticia organizada alrededor de parcialidades, intereses, pagos, conciliación y estados de cuenta.
- `Workforce` — Producto independiente de gestión laboral en desarrollo activo. Su implementación local actual cubre una base segura multi-organización, la gestión de Personas y Empleados, y la configuración de estructura organizacional y horarios de trabajo.

### Cómo hago ingeniería de software

`Definición del problema → Descubrimiento → SDD / Arquitectura → Plan de implementación → Roles especializados con apoyo de IA → Implementación → Revisión independiente → Evidencia / QA → Puerta de liberación`

Descripción breve: `Utilizo roles con apoyo de IA para análisis acotados y apoyo a la implementación, pero la responsabilidad de ingeniería sigue siendo humana. Mantengo separados el diseño, la implementación y la revisión; cada etapa registra las decisiones, la evidencia, las preguntas abiertas y los criterios de aceptación que necesita la siguiente.`

### Etiquetas de CTA

- `Explorar sistemas seleccionados`
- `Leer notas de ingeniería`
- `Ver cómo hago ingeniería de software`

## Systems — English

### Page introduction

- Title: `Systems shaped by operational constraints`
- Description: `I describe each system through its context, my responsibility, architecture decisions, constraints, and current verified state.`

### Businext ERP

- Context: `Businext grew from the need to evolve business operations beyond legacy and fragmented tools. The platform brings finance, sales, inventory, human resources, dashboards, and accounting workflows into one operational model.`
- My responsibility: `I design and lead backend and systems evolution around the business rules, service boundaries, and operational constraints that the platform must preserve.`
- Architecture decisions: `Domain boundaries for finance, inventory, HR, sales, and accounting; an API-first shape; a modular FastAPI backend; and service layers that keep business rules explicit.`
- Constraints: `Cross-domain workflows must remain coherent while the ERP evolves without making every change a platform-wide regression.`
- Current verified state: `The platform provides a maintainable foundation for continuing enterprise-system evolution across the documented operational domains.`
- Technology context: `Python · FastAPI · React · MySQL / MariaDB · REST APIs · AWS · Linux · Nginx`

### TR0V1 Credit Platform

- Context: `TR0V1 supports a credit-management operation where installments, interest, payments, reconciliation, and account statements must remain consistent over time.`
- My responsibility: `I work on the architecture and backend evolution that turns financial rules and state transitions into explicit services and APIs.`
- Architecture decisions: `Domain modeling for credit accounts and payment flows; service-oriented business rules; APIs for internal and client-facing interfaces; and controls for consistent financial state.`
- Constraints: `Retries, partial payments, interest calculations, and reconciliation create failure modes that simple CRUD cannot represent safely.`
- Current verified state: `The platform is organized around traceable financial workflows and explicit rules for credit lifecycle operations.`
- Technology context: `Python · FastAPI · SQLAlchemy · React · REST APIs`

### Workforce

- Context: `Workforce is an independent workforce-management product in active development.`
- My responsibility: `I shape the system design and implementation direction around organization context, authorization, data integrity, and auditable operational workflows.`
- Architecture decisions: `A modular-monolith direction with an API-first backend, a separate web frontend, PostgreSQL as the transactional core, server-derived organization context, RLS as defense in depth, User / Membership / Employee separation, audited mutations, idempotency, optimistic concurrency, and versioned organizational and scheduling configuration.`
- Current local implementation: `The current local implementation covers Slice 0 Foundation, Slice 1 People / Employees, and Slice 2 Structure / Scheduling.`
- Scope detail: `Foundation includes BFF/Cognito integration, an HttpOnly session, CSRF, organization selection, AuthenticationContext to TenantContext, PostgreSQL roles, and RLS. People / Employees includes employee lifecycle operations, User / Employee separation, auditability, idempotency, ETag-based optimistic concurrency, and employment periods. Structure / Scheduling includes worksites, departments, positions, effective assignments, versioned timezones, policies, schedules, schedule segments, lifecycle operations, date/timezone-aware resolution, and administrative UI.`
- Current verified state: `Workforce remains local development software, not production software.`
- Technology context: `FastAPI · React · PostgreSQL`

## Systems — Spanish

### Introducción de la página

- Título: `Sistemas definidos por restricciones operativas`
- Descripción: `Describo cada sistema a partir de su contexto, mi responsabilidad, las decisiones de arquitectura, las restricciones y su estado actual verificable.`

### Businext ERP

- Contexto: `Businext surgió de la necesidad de evolucionar la operación empresarial más allá de herramientas legacy y fragmentadas. La plataforma reúne finanzas, ventas, inventario, recursos humanos, dashboards y flujos contables en un mismo modelo operativo.`
- Mi responsabilidad: `Diseño y lidero la evolución backend y de sistemas alrededor de las reglas de negocio, los límites de servicio y las restricciones operativas que la plataforma debe conservar.`
- Decisiones de arquitectura: `Límites de dominio para finanzas, inventario, RH, ventas y contabilidad; una estructura orientada a APIs; un backend modular en FastAPI; y capas de servicio que mantienen explícitas las reglas de negocio.`
- Restricciones: `Los flujos que cruzan dominios deben mantenerse coherentes mientras el ERP evoluciona sin convertir cada cambio en una regresión transversal.`
- Estado actual verificable: `La plataforma ofrece una base mantenible para continuar la evolución de sistemas empresariales en los dominios operativos documentados.`
- Contexto tecnológico: `Python · FastAPI · React · MySQL / MariaDB · APIs REST · AWS · Linux · Nginx`

### TR0V1 Credit Platform

- Contexto: `TR0V1 soporta una operación de gestión de crédito donde las parcialidades, los intereses, los pagos, la conciliación y los estados de cuenta deben conservar consistencia a través del tiempo.`
- Mi responsabilidad: `Trabajo en la arquitectura y la evolución backend que convierten reglas financieras y transiciones de estado en servicios y APIs explícitos.`
- Decisiones de arquitectura: `Modelado de dominio para cuentas de crédito y flujos de pago; reglas de negocio organizadas en servicios; APIs para interfaces internas y de clientes; y controles para mantener consistente el estado financiero.`
- Restricciones: `Los reintentos, pagos parciales, cálculos de intereses y conciliaciones generan fallos que un CRUD simple no puede representar de forma segura.`
- Estado actual verificable: `La plataforma está organizada alrededor de flujos financieros trazables y reglas explícitas para las operaciones del ciclo crediticio.`
- Contexto tecnológico: `Python · FastAPI · SQLAlchemy · React · APIs REST`

### Workforce

- Contexto: `Workforce es un producto independiente de gestión laboral en desarrollo activo.`
- Mi responsabilidad: `Defino el diseño de sistemas y la dirección de implementación alrededor del contexto de organización, la autorización, la integridad de datos y los flujos operativos auditables.`
- Decisiones de arquitectura: `Una dirección de monolito modular con backend orientado a APIs, frontend web separado, PostgreSQL como núcleo transaccional, contexto de organización derivado del servidor, RLS como defensa en profundidad, separación entre Usuario / Membresía / Empleado, mutaciones auditadas, idempotencia, concurrencia optimista y configuración versionada de estructura organizacional y horarios.`
- Implementación local actual: `La implementación local actual cubre Tramo 0 — Base, Tramo 1 — Personas / Empleados y Tramo 2 — Estructura / Horarios.`
- Detalle del alcance: `La Base incluye integración BFF/Cognito, sesión HttpOnly, CSRF, selección de organización, AuthenticationContext hacia TenantContext, roles de PostgreSQL y RLS. Personas / Empleados incluye operaciones del ciclo de vida del empleado, separación Usuario / Empleado, auditabilidad, idempotencia, concurrencia optimista con ETag y periodos laborales. Estructura / Horarios incluye centros de trabajo, departamentos, puestos, asignaciones efectivas, zonas horarias versionadas, políticas, horarios, segmentos de horario, operaciones de ciclo de vida, resolución consciente de fecha y zona horaria, e interfaz administrativa.`
- Estado actual verificable: `Workforce continúa siendo software de desarrollo local, no software en producción.`
- Contexto tecnológico: `FastAPI · React · PostgreSQL`

## About — English

- Title: `About`
- Intro title: `Software engineer focused on software architecture and backend systems.`
- Lead: `I design and lead the evolution of business-critical platforms around real operational constraints.`
- Profile: `My work connects business rules, domain modeling, backend architecture, and maintainable APIs across enterprise and financial workflows. I design and evolve systems where service boundaries, data integrity, authorization, and operational clarity are part of the engineering work.`
- Current role: `Head of Systems — Elements Of Steel · 2019–Present`
- Progression: `My path progressed through QA, junior software development, project leadership, and ultimately Head of Systems together with full-stack software development. Exact transition years are not stated.`
- Education: `Computer Systems Engineering degree and Master’s Degree in Data Science for Business from UTEL.`
- Languages: `Spanish — Native · English — B1 · Intermediate`
- Systems: `I work across enterprise platforms, credit and financial workflows, and independent product development. Businext and TR0V1 document established system work; Workforce documents current local development.`
- Current engineering practice: `In current work, I use specification-driven development and architecture-first planning to make scope, constraints, decisions, and acceptance evidence explicit. Bounded AI-assisted roles can support analysis and implementation, while planning, implementation, and review remain distinct and engineering responsibility remains human.`

## About — Spanish

- Título: `Sobre mí`
- Título de introducción: `Ingeniero de software enfocado en arquitectura de software y sistemas backend.`
- Presentación: `Mi trabajo conecta reglas de negocio, modelado de dominio, arquitectura backend y APIs mantenibles en flujos empresariales y financieros. Diseño y evoluciono sistemas donde los límites de servicio, la integridad de datos, la autorización y la claridad operativa forman parte del trabajo de ingeniería.`
- Rol actual: `Jefe de Sistemas — Elements Of Steel · 2019–actualidad`
- Trayectoria: `Mi trayectoria pasó por QA, desarrollo de software junior, liderazgo de proyectos y finalmente Jefe de Sistemas, junto con responsabilidades de desarrollo de software full-stack. No se indican años exactos para cada transición.`
- Formación: `Ingeniería en Sistemas Computacionales y Maestría en Ciencia de Datos para Negocios por UTEL.`
- Idiomas: `Español — Nativo · Inglés — B1 · Intermedio`
- Sistemas: `Trabajo en plataformas empresariales, flujos crediticios y financieros, y desarrollo de productos independientes. Businext y TR0V1 documentan trabajo de sistemas establecido; Workforce documenta desarrollo local actual.`
- Práctica actual de ingeniería: `En el trabajo actual utilizo desarrollo guiado por especificaciones y planificación con arquitectura primero para hacer explícitos el alcance, las restricciones, las decisiones y la evidencia de aceptación. Los roles acotados con apoyo de IA pueden ayudar en el análisis y la implementación, pero el diseño, la implementación y la revisión permanecen separados y la responsabilidad de ingeniería sigue siendo humana.`

## Engineering — English

- Title: `Engineering Notes`
- Intro: `Notes about the decisions, constraints, and evidence involved in designing and evolving backend and business systems.`
- Taxonomy:
  - `PostgreSQL and data integrity` — Relational constraints, transaction boundaries, tenant isolation, and reliable state changes.
  - `Concurrency and authorization` — Optimistic concurrency, authorization boundaries, and workflows that must remain safe under change.
  - `Architecture and system design` — Domain modeling, service boundaries, modular systems, and operational trade-offs.
  - `Specification-driven engineering` — SDD, architecture reviews, specialized responsibilities, evidence, and release gates.
  - `AI-assisted engineering` — Bounded roles and explicit handoffs that support analysis and implementation while engineering decisions remain human.

## Engineering — Spanish

- Título: `Notas de ingeniería`
- Introducción: `Notas sobre las decisiones, restricciones y evidencias que intervienen al diseñar y evolucionar sistemas backend y empresariales.`
- Taxonomía:
  - `PostgreSQL e integridad de datos` — Restricciones relacionales, límites transaccionales, aislamiento por tenant y cambios de estado confiables.
  - `Concurrencia y autorización` — Concurrencia optimista, límites de autorización y flujos que deben mantenerse seguros ante los cambios.
  - `Arquitectura y diseño de sistemas` — Modelado de dominio, límites de servicio, sistemas modulares y decisiones operativas.
  - `Ingeniería guiada por especificaciones` — SDD, revisiones de arquitectura, responsabilidades especializadas, evidencia y puertas de liberación.
  - `Ingeniería con apoyo de IA` — Roles acotados y transferencias explícitas entre etapas que apoyan el análisis y la implementación mientras las decisiones de ingeniería siguen siendo humanas.

## Contact — English

- Title: `Contact`
- Intro: `I welcome conversations about software architecture, backend systems, enterprise platforms, financial workflows, data integrity, and maintainability.`
- Body: `If you want to discuss architecture for business software, domain modeling, APIs, PostgreSQL, or reliable operational workflows, you can reach me through these channels.`
- Topics: `Software architecture and API design · Enterprise systems and ERP platforms · Credit and financial domain modeling · Data integrity, authorization, and maintainability`
- Note: `I usually respond faster through LinkedIn or email.`
- Actions: `LinkedIn · GitHub · Send email`

## Contact — Spanish

- Título: `Contacto`
- Introducción: `Me interesan conversaciones sobre arquitectura de software, sistemas backend, plataformas empresariales, flujos financieros, integridad de datos y mantenibilidad.`
- Cuerpo: `Si quieres hablar sobre arquitectura para software de negocio, modelado de dominio, APIs, PostgreSQL o flujos operativos confiables, puedes escribirme por cualquiera de estos medios.`
- Temas: `Arquitectura de software y diseño de APIs · Sistemas empresariales y plataformas ERP · Modelado de crédito y dominios financieros · Integridad de datos, autorización y mantenibilidad`
- Nota: `Normalmente respondo más rápido por LinkedIn o correo electrónico.`
- Acciones: `LinkedIn · GitHub · Enviar correo`

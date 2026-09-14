# Final technical taxonomy

The public profile should group technologies under capabilities. This taxonomy is bilingual and separates implementation technologies from architecture and delivery practices.

## Backend & APIs / Backend y APIs

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- REST APIs / APIs REST

## Data & Persistence / Datos y persistencia

- PostgreSQL
- MySQL / MariaDB
- Redis, only where the named system evidence supports it
- Relational integrity / Integridad relacional
- Constraints / Restricciones
- Transaction boundaries / Límites transaccionales

## Architecture & System Design / Arquitectura y diseño de sistemas

- Domain modeling / Modelado de dominio
- System design / Diseño de sistemas
- Transactional workflows / Flujos transaccionales
- Concurrency / Concurrencia
- Idempotency / Idempotencia
- Authorization boundaries / Límites de autorización
- Multi-tenant isolation / Aislamiento multi-tenant
- Versioned configuration / Configuración versionada
- Event/outbox patterns only as architecture direction where specifically supported / Patrones de eventos/outbox solo como dirección de arquitectura cuando exista soporte específico

## Product & Platform / Producto y plataforma

- React
- TypeScript
- TailwindCSS
- MUI
- AWS
- Docker, only where current repository evidence supports it
- Nginx
- CI/CD, only where current repository evidence supports it

## Engineering Workflow / Flujo de ingeniería

- Specification-driven development / Desarrollo guiado por especificaciones
- Architecture-first planning / Planificación con arquitectura primero
- AI-assisted engineering / Ingeniería con apoyo de IA
- Specialized agent workflows / Flujos con roles especializados
- Explicit handoffs / Handoffs explícitos
- Architecture review / Revisión de arquitectura
- Testing / Pruebas
- Evidence-based validation / Validación basada en evidencia
- Quality and release gates / Puertas de calidad y liberación

## Display rules

- Use capability headings instead of one flat “technology” list.
- Keep architecture concerns out of a label such as `Core technologies` / `Tecnologías principales`.
- For Workforce, use `Architecture focus` / `Enfoque de arquitectura` or `Architecture decisions` / `Decisiones de arquitectura`.
- Only expose a technology when its source identifies it as current implementation or an explicitly approved design direction.
- Do not turn the workflow taxonomy into an AI-specialist identity.

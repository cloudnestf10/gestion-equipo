# 🖥️ Gestión de Equipos

Sistema web para el control e inventario de equipos tecnológicos.

---

## 📋 Descripción

Este sistema permite registrar, rastrear y auditar el ciclo de vida completo de los equipos tecnológicos (laptops, cámaras, micrófonos, switches, monitores, entre otros) distribuidos en 9 inmuebles.

Cada equipo tiene trazabilidad completa: desde su ingreso hasta su baja, pasando por traslados, asignaciones y envíos a taller.

## ✨ Funcionalidades

- 📦 **Inventario de equipos** — registro completo con foto, serie, categoría y contrato
- 🔄 **Movimientos** — Alta, Asignación, Retorno, Envío a Taller, Traslado
- 📍 **Trazabilidad** — historial completo de dónde ha estado cada equipo
- 👥 **Gestión de usuarios** — roles de Administrador y Operador
- 📝 **Bitácora automática** — registro de todos los cambios mediante triggers
- 🔍 **Filtros y búsqueda** — por estado, categoría y edificio

---

## 🗂️ Pantallas del sistema

| Pantalla | Descripción |
|----------|-------------|
| [login.html](./login.html) | Acceso al sistema |
| [resumen.html](./resumen.html) | Resumen general y estadísticas |
| [equipos.html](./equipos.html) | Lista de equipos con filtros |
| [nuevo-equipo.html](./nuevo-equipo.html) | Formulario de registro de equipo |
| [detalle-equipo.html](./detalle-equipo.html) | Detalle, historial y bitácora del equipo |
| [usuarios.html](./usuarios.html) | Gestión de usuarios y roles |
| [registrar-movimiento.html](./registrar-movimiento.html) | Registro de movimientos del equipo |

---

## 🗄️ Base de Datos

La base de datos está construida en **PostgreSQL** a través de **Supabase** y está organizada en 7 bloques:

```
Bloque 1 — Catálogos        → Categorias, Estados, Cat_Tipo_Movimiento, Tipo_Espacio
Bloque 2 — Estructura física → Inmuebles, Ubicaciones
Bloque 3 — Contratos         → Contratos
Bloque 4 — Personal          → Roles, Colaboradores
Bloque 5 — Equipos           → Equipos
Bloque 6 — Movimientos       → Movimientos
Bloque 7 — Bitacora         → Bitacora
```
---

## 🔄 Tipos de movimiento

| Tipo | Estado resultante | Descripción |
|------|-------------------|-------------|
| Alta | Funcional | Ingreso nuevo al inventario |
| Asignación | Funcional | Se entrega a un colaborador |
| Retorno | Funcional | El colaborador lo devuelve |
| Envío a Taller | Dañado | Sale a reparación |
| Traslado | Funcional | Cambio de edificio o piso |
| Baja | Baja | El equipo sale definitivamente del inventario |

---

## 👤 Roles de usuario

| Rol | Permisos |
|-----|----------|
| **Administrador** | Acceso completo — crear usuarios, registrar equipos, ver bitácora |
| **Operador** | Registrar movimientos y consultar equipos |

---

## 🎨 Diseño

- **Fuente:** DM Sans (Google Fonts)
- **Paleta de colores:**

| Variable | Color | Uso |
|----------|-------|-----|
| `--principal` | `#195852` | Botones, títulos, navbar |
| `--secundario` | `#1E9282` | Acentos, íconos, badges |
| `--claro` | `#889693` | Textos secundarios |
| `--fondo` | `#F4F7F6` | Fondo de página |
| `--error` | `#DC3545` | Mensajes de error |

---

## 🛣️ Roadmap

- [x] Diseño de base de datos
- [x] Creación de tablas en Supabase
- [x] Diseño de pantallas (HTML/CSS)
- [ ] Triggers de auditoría en Supabase
- [ ] Backend (API)
- [ ] Conectar frontend con base de datos
- [ ] Pruebas
- [ ] Despliegue

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Base de datos | PostgreSQL (Supabase) |
| Autenticación | Supabase Auth |
| Fuentes | Google Fonts — DM Sans |

---

## 📁 Estructura del proyecto

```
gestion-equipos/
│
├── 📄 README.md                    ← este archivo
├── 📄 schema.dbml                  ← diseño de la base de datos
│
├── 🎨 frontend/
│   ├── login.html
│   ├── resumen.html
│   ├── equipos.html
│   ├── nuevo-equipo.html
│   ├── detalle-equipo.html
│   ├── usuarios.html
│   └── registrar-movimiento.html
│
└── 🗄️ database/
    └── schema.sql                  ← SQL para crear las tablas
```


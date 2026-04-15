/*
  ╔══════════════════════════════════════════════════════════╗
  ║                     NAVBAR.JS                            ║
  ║                                                          ║
  ║  Hace 3 cosas automáticamente en todas las pantallas:    ║
  ║  1. Inyecta la fuente DM Sans (Google Fonts)             ║
  ║  2. Genera y renderiza el navbar                         ║
  ║  3. Detecta la página activa y la marca en el menú       ║
  ║                                                          ║
  ║  Cada HTML solo necesita:                                ║
  ║  <div id="navbar-container"></div>                       ║
  ║  <script src="js/navbar.js"></script>                    ║
  ╚══════════════════════════════════════════════════════════╝
*/

// ─────────────────────────────────────────
// 1. INYECTAR FUENTE — evita repetirla en cada HTML
// ─────────────────────────────────────────
(function() {
  const link = document.createElement('link');
  link.rel  = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap';
  document.head.appendChild(link);
})();


// ─────────────────────────────────────────
// 2. DATOS DEL SISTEMA
// En el sistema real vendrían de la sesión activa.
// ─────────────────────────────────────────
const usuarioActual = {
  nombre:    'Ana García',
  rol:       'Administrador',
  iniciales: 'AG'
};

const navLinks = [
  {
    href:  'dashboard.html',
    texto: 'Dashboard',
    icono: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  },
  {
    href:  'equipos.html',
    texto: 'Equipos',
    icono: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
  },
  {
    href:  'usuarios.html',
    texto: 'Usuarios',
    icono: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  }
];


// ─────────────────────────────────────────
// 3. DETECTAR PÁGINA ACTIVA
// Compara el nombre del archivo actual con el href de cada link.
// Páginas "hijas" (nuevo-equipo, detalle, registrar-movimiento)
// resaltan su sección padre "Equipos".
// ─────────────────────────────────────────
const paginasEquipos = [
  'equipos.html', 'nuevo-equipo.html',
  'detalle-equipo.html', 'registrar-movimiento.html'
];

function paginaActual() {
  return window.location.pathname.split('/').pop() || 'dashboard.html';
}

function esActivo(linkHref) {
  const actual = paginaActual();
  if (linkHref === 'equipos.html') {
    return paginasEquipos.includes(actual);
  }
  return actual === linkHref;
}


// ─────────────────────────────────────────
// 4. GENERAR E INYECTAR EL NAVBAR
// ─────────────────────────────────────────
function renderNavbar() {
  const linksHTML = navLinks.map(link => {
    const claseActivo = esActivo(link.href) ? 'active' : '';
    return `<li><a href="${link.href}" class="${claseActivo}">${link.icono} ${link.texto}</a></li>`;
  }).join('');

  const html = `
    <nav class="navbar">
      <div class="navbar-left">
        <a href="dashboard.html" class="logo">Gestión de <span>Equipos</span></a>
        <ul class="nav-links">${linksHTML}</ul>
      </div>
      <div class="navbar-right">
        <div class="user-info">
          <div class="user-avatar">${usuarioActual.iniciales}</div>
          <div>
            <div class="user-name">${usuarioActual.nombre}</div>
            <div class="user-rol">${usuarioActual.rol}</div>
          </div>
        </div>
        <button class="btn-salir" onclick="cerrarSesion()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Salir
        </button>
      </div>
    </nav>`;

  const contenedor = document.getElementById('navbar-container');
  if (contenedor) {
    contenedor.innerHTML = html;
  } else {
    console.warn('navbar.js: No se encontró #navbar-container');
  }
}


// ─────────────────────────────────────────
// 5. CERRAR SESIÓN
// En el sistema real usará supabase.auth.signOut()
// ─────────────────────────────────────────
function cerrarSesion() {
  // TODO: supabase.auth.signOut()
  window.location.href = 'login.html';
}


// Ejecutar cuando el HTML esté listo
document.addEventListener('DOMContentLoaded', renderNavbar);

# Asesorías RSO

Web comercial de la pyme TI chilena RSO: software a medida, ERP, integraciones e IA. Primera propuesta local del remake orientada a conversaciones comerciales.

## Desarrollo

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:3000. Para producción: `npm run build` y luego `npm start`. Requiere Node.js, npm e internet para descargar las fuentes de Google. No requiere variables de entorno actualmente. El script lint heredado requiere configurar ESLint antes de automatizarlo.

## Estructura activa

- `app/page.js`: entrada de la página.
- `app/components/HomePage.jsx`: contenido, navegación, ejemplos y contacto.
- `app/lib/contact.js`: teléfono comercial y constructor de enlaces a WhatsApp.
- `app/layout.js`: idioma, fuente y metadatos.
- `app/styles/globals.css`: sistema visual adaptable y animaciones.
- `docs/REMAKE.md`: decisiones, verificaciones y pendientes de publicación.

Los componentes anteriores de home y navigation se conservan como referencia y no se usan en la ruta inicial. El formulario activo prepara una consulta para WhatsApp, sin enviar ni guardar datos en un servidor. Teléfono confirmado por el propietario: +56 9 8340 1461.

Rama de trabajo: `codex/remake-profesional`. No se publicó ni se modificaron los DNS. Revisar dependencias antes del despliegue, pues se mantiene por ahora Next.js 13.4.19.

## SEO y páginas comerciales

- `app/lib/services.js`: contenido de las cuatro páginas de servicios.
- `app/lib/projects.js`: casos del ERP industrial y Sarkan Vault.
- `app/servicios/[slug]/page.js` y `app/proyectos/`: páginas prerenderizadas.
- `app/lib/site.js`: dominio, enlaces y metadatos compartidos.
- `app/robots.js`, `app/sitemap.js`: rastreo y mapa del sitio.
- `app/og/route.js`: tarjeta social PNG.
- `docs/SEO.md`: implementación, fuentes, verificación y pendientes de publicación.

Las vistas previas en Vercel reciben `X-Robots-Tag: noindex` cuando `VERCEL_ENV=preview`. Revisar indexación en el dominio de producción tras publicar. No hay integración de analítica activa ni se ha solicitado indexación en herramientas externas.

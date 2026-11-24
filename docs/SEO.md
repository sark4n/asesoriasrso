# SEO y descubrimiento de RSO

## Implementación local

- Inicio, cuatro páginas de servicios, índice de proyectos y dos casos: ocho URLs con contenido prerenderizado.
- Títulos y descripciones específicos, canonical absoluto al dominio de producción, Open Graph y Twitter Cards.
- Imagen social PNG 1200×630 generada en /og; logo público SVG para identidad empresarial.
- /sitemap.xml con las ocho páginas; no se fabrican fechas de última modificación ni prioridades.
- /robots.txt permite rastreo general y OAI-SearchBot. No se cambió por separado la política de entrenamiento.
- JSON-LD: Organization y WebSite; Service y BreadcrumbList en servicios; CollectionPage e ItemList en proyectos; WebPage y BreadcrumbList en casos. Sin opiniones, calificaciones, direcciones o resultados inventados.
- Navegación enlazada entre inicio, servicios, proyectos y contacto por WhatsApp.
- Vistas previas de Vercel marcadas noindex mediante X-Robots-Tag cuando VERCEL_ENV=preview. La indexación efectiva se valida después de publicar.

## Evidencia del portafolio

ERP industrial: revisión autorizada y de solo consulta de la aplicación proporcionada por el propietario. Confirmados módulos de clientes, cotizaciones, ventas, inventario, productos, compras, proveedores, órdenes de compra, notas de trabajo, programación, control por escaneo, despachos y reportes. El caso público describe funciones y mantiene anónima la empresa. No se guardaron capturas internas, credenciales ni registros de operación en el repositorio. Sesión cerrada tras la consulta.

Sarkan Vault: contexto autorizado de los chats «Continuar proyecto Sarkan Vault», «Publica la beta.36 como prerelease» y «Evaluación de Sarkan Vault». Se distingue como proyecto propio en evolución. Descripción de biblioteca, aplicación de escritorio, emuladores, interfaz, carga de recursos y trabajo en actualizaciones. No se atribuyen usuarios, métricas o resultados empresariales.

Sitios web: experiencia indicada por el propietario. Pendiente seleccionar sitios y confirmar enlaces y material que se pueda mostrar antes de agregar casos individuales.

## Validación local

Compilación de producción. Prueba HTTP de las ocho páginas: 200, un h1, canonical individual, descripción, og:url y JSON-LD válido. Sitemap completo, enlaces internos y fragmentos resueltos, imagen social PNG con dimensiones correctas y servicio inexistente devuelve 404. Matriz de revisión DOM: ocho páginas a 320, 768 y 1280 px, sin desbordamientos o recorte en los bloques revisados. Recorrido visual de servicio ERP y portafolio; sin errores de consola observados.

Estas pruebas no equivalen a indexación real ni a validación por Search Console o Rich Results Test.

## Pendiente al publicar

1. Revisar con el propietario las descripciones y el alcance publicable de los proyectos.
2. Revisar dependencias para producción y publicar el remake en Vercel.
3. Conectar asesoriasrso.cl al despliegue correcto: el sitio público actual está en Netlify.
4. Verificar dominio en Google Search Console y Bing Webmaster Tools; enviar sitemap e inspeccionar páginas. Requiere acceso del propietario y DNS según el método elegido.
5. Comprobar respuestas, canonical, noindex, datos estructurados y redirecciones en el dominio final. Revisar páginas existentes antes de reemplazarlas.
6. Acordar e implementar analítica. Separar clic hacia WhatsApp, consulta preparada, conversación recibida y negocio cerrado. Actualmente no se instalaron servicios de medición ni se envían datos a terceros desde la web salvo la navegación a WhatsApp que decide el visitante.
7. Medir rendimiento en producción y consultas comerciales reales; ajustar contenido según evidencia.

## Fuentes oficiales consultadas

- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.openai.com/api/docs/bots
- https://nextjs.org/docs/13/app/api-reference/file-conventions/metadata/robots
- https://nextjs.org/docs/13/app/api-reference/file-conventions/metadata/sitemap
- https://nextjs.org/docs/13/app/api-reference/functions/image-response

La accesibilidad al rastreo, los datos estructurados y el contenido útil no garantizan posiciones ni recomendaciones de una IA. No se incorporó llms.txt como requisito de Google.

## Ampliación de Sarkan Vault

El propietario proporcionó un resumen detallado del proyecto. Se actualizó la tarjeta compartida de inicio/portafolio y el caso individual para Windows: biblioteca visual, mando/overlay, ciclo de ejecución y remapeo en motores compatibles, perfiles y hasta cuatro jugadores compatibles, preparación y recuperación, descargas, actualización beta e integridad. Se añadieron arquitectura (Electron, React, TypeScript y componentes nativos de Windows), estado y límites de compatibilidad. Las afirmaciones se atribuyen a la descripción del propietario; no equivalen a una auditoría funcional nueva del programa.

Se buscaron capturas existentes en el proyecto local: no se identificaron imágenes de biblioteca, fichas u overlay listas para publicar entre los archivos revisados. No se reutilizaron carátulas de pruebas ni se generaron capturas ficticias. Pendiente seleccionar capturas reales y revisar su contenido antes de incorporarlas.

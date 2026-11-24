# Remake RSO — primera implementación

## Objetivo

Generar conversaciones comerciales para una pyme TI chilena, abierta a proyectos internacionales. Oferta: software y ERP a medida, integraciones, IA aplicada y plataformas web.

## Implementado

- Portada oscura con violeta y acento verde, animación de conexiones y navegación fija.
- Mensajes centrados en problemas de operación y servicios con contacto contextual.
- Tres ejemplos conceptuales interactivos; no representan proyectos o resultados reales.
- Enfoque de trato directo, aprovechamiento de sistemas existentes y trabajo por etapas.
- Proceso, preguntas frecuentes y formulario que prepara una consulta para WhatsApp.
- Menú móvil accesible, navegación de pestañas por teclado y movimiento reducido.
- Metadatos en español y estructura con un solo h1.

## Contacto

WhatsApp +56 9 8340 1461 confirmado por el propietario el 23 de noviembre de 2026. El formulario no envía ni almacena datos: prepara un enlace; el visitante debe abrir WhatsApp y enviar el mensaje. No se utilizó el Formspree anterior ni se enviaron mensajes durante las pruebas.

## Verificación

Compilación de producción exitosa. Revisión de escritorio y móvil (390 px), sin desbordamiento horizontal observado. Comprobados: menú y Escape, selección de servicio, cambio de ejemplos y teclado, consulta preparada con nombre/empresa/mensaje, enlaces internos y ausencia de errores de consola en el recorrido probado.

## Pendiente antes de publicar

- Revisión del propietario de textos y propuesta visual, incluida la marca tipográfica provisional.
- Incorporar proyectos reales y material que se pueda mostrar con autorización. No hay testimonios ni métricas inventadas.
- Acordar una estrategia de medición de consultas y procedencia, y comprobarla al desplegar.
- Actualizar dependencias y revisar compatibilidad y seguridad para producción: se conserva el Next.js 13.4.19 original.
- Publicar en Vercel y planificar conexión de dominio: actualmente el dominio público usa Netlify.

No se hicieron cambios remotos, despliegues ni cambios DNS. Los componentes originales permanecen en el repositorio como referencia, pero la ruta inicial usa HomePage.jsx.

## Evolución de navegación — 23 de noviembre de 2026

Cabecera transparente en portada, flotante compacta al superar 88 px, indicador de sección activa y contacto permanente. En móvil: panel lateral con fondo desenfocado, cierre por fondo/Escape/enlace, bloqueo de desplazamiento, aislamiento del contenido y recorrido de foco contenido. Comprobados en navegador: navegación a Soluciones, sección activa, retorno a inicio, cierre por Escape y foco en el botón de apertura; sin desbordamiento horizontal a 390 px ni errores de consola observados.

Logo vectorial RSO propuesto en Brand.jsx, compartido por cabecera, pie y gráfico de portada. Favicon compacto en public/rso-icon.svg. Animaciones breves de barra, panel, enlaces y trazo de conexión del logo; se respeta movimiento reducido. Sigue pendiente la revisión de identidad del propietario. Sin cambios remotos ni DNS.

## Adaptación a resoluciones

Se añadió responsive.css para controlar tipografía, espacios y diagramas por ancho y altura; columnas de tablet y formulario, tarjetas sin recorte, y portada horizontal en móviles apaisados. Se mantienen lectura y scroll natural para secciones largas.

Revisión en navegador: 320×568, 375×667, 390×844, 768×1024, 844×390, 1024×600, 1280×720, 1366×768, 1440×900, 1920×1080 y 2560×1440. Comprobaciones adicionales: 667×375, 741×900 y 901×600. Sin desbordamiento horizontal ni recorte de texto en los bloques inspeccionados. Se comprobó visualmente teléfono pequeño, tablet/contacto, móvil horizontal y notebook; sin errores de consola observados. Esto es una muestra de tamaños, no una prueba exhaustiva de cada dispositivo o navegador.

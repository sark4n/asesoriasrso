'use client';
import { Analytics } from '@vercel/analytics/next';

// No incluir consultas, fragmentos ni contenido del formulario en las visitas.
function beforeSend(event) {
  const url = new URL(event.url);
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />;
}

export const SITE_URL = 'https://asesoriasrso.cl';
export const SITE_NAME = 'Asesorías RSO';
export const SERVICE_LINKS = [
  { slug: 'software-a-medida', label: 'Software a medida', interest: 'Software y ERP a medida' },
  { slug: 'erp-personalizado', label: 'ERP personalizados', interest: 'Software y ERP a medida' },
  { slug: 'integraciones-automatizacion', label: 'Integraciones y automatización', interest: 'Integraciones y automatización' },
  { slug: 'inteligencia-artificial', label: 'Inteligencia artificial', interest: 'Inteligencia artificial' },
];
export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: absoluteUrl(path), siteName: SITE_NAME, type: 'website', locale: 'es_CL', images: [{ url: '/og', width: 1200, height: 630, alt: 'RSO: software a medida, integraciones e IA desde Chile' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og'] },
  };
}

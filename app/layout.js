import './styles/globals.css';
import './styles/navbar.css';
import './styles/responsive.css';
import './styles/content.css';
import { Inter } from 'next/font/google';
import StructuredData from './components/StructuredData';
import { SITE_URL, SITE_NAME, absoluteUrl } from './lib/site';
import { CONTACT_PHONE } from './lib/contact';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/rso-icon.svg' },
  applicationName: SITE_NAME,
  title: 'RSO | Software a medida, integraciones e IA en Chile',
  description: 'Conectamos tus sistemas y simplificamos tu operación. Software a medida, ERP e inteligencia artificial para empresas en Chile. Conversemos sobre tu proyecto.',
  openGraph: { title: 'RSO · Tecnología que mueve tu negocio', description: 'Software a medida, integraciones e IA. Desde Chile, construimos el siguiente paso de tu empresa.', locale: 'es_CL', type: 'website' },
};
export default function RootLayout({ children }) {
  const identity = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, alternateName: 'RSO', url: SITE_URL, logo: absoluteUrl('/rso-logo.svg'), telephone: `+${CONTACT_PHONE}`, description: 'Empresa chilena de tecnología: software a medida, ERP personalizados, integraciones e inteligencia artificial para empresas.', contactPoint: { '@type': 'ContactPoint', telephone: `+${CONTACT_PHONE}`, contactType: 'sales', availableLanguage: 'es' } },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: 'es-CL', publisher: { '@id': `${SITE_URL}/#organization` } },
  ] };
  return <html lang="es"><body className={inter.className}><StructuredData data={identity} />{children}</body></html>;
}

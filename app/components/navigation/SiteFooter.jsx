import Brand from './Brand';
import { FiMessageCircle } from 'react-icons/fi';
import { SERVICE_LINKS } from '../../lib/site';

export default function SiteFooter() {
  return <footer className="footer"><div className="container">
    <div className="footer-top"><a className="brand footer-brand" href="/#inicio" aria-label="RSO, volver al inicio"><Brand /></a><p>Construimos el siguiente<br /> paso de tu negocio.</p><a href="/#contacto">Conversemos <FiMessageCircle /></a></div>
    <nav className="footer-services" aria-label="Servicios y proyectos de RSO">{SERVICE_LINKS.map(service => <a key={service.slug} href={`/servicios/${service.slug}`}>{service.label}</a>)}<a href="/proyectos">Proyectos</a></nav>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Asesorías RSO. Chile.</span><span>Software a medida · Integraciones · IA</span><a href="/#inicio">Volver al inicio</a></div>
  </div></footer>;
}

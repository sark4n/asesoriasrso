import { FiMessageCircle } from 'react-icons/fi';
import { whatsappUrl, CONTACT_DISPLAY } from '../lib/contact';

export default function ContentContact({ message }) {
  return <section className="content-contact section-space" id="contacto"><div className="container"><div><p className="eyebrow">CONVERSEMOS SOBRE TU OPERACIÓN</p><h2>Tu próximo paso<br /> empieza con una conversación.</h2><p>Cuéntanos qué necesitas resolver y qué herramientas usas. Primero evaluamos alternativas; después definimos una propuesta con alcance, etapas y costos.</p></div><div><a className="button button-lime" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Cuéntanos por WhatsApp <FiMessageCircle /></a><span>{CONTACT_DISPLAY} · Chile</span></div></div></section>;
}

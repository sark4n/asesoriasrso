import { notFound } from 'next/navigation';
import { FiCheck, FiMessageCircle } from 'react-icons/fi';
import RemakeNavbar from '../../components/navigation/RemakeNavbar';
import SiteFooter from '../../components/navigation/SiteFooter';
import ContentContact from '../../components/ContentContact';
import StructuredData from '../../components/StructuredData';
import { services, findService } from '../../lib/services';
import { SITE_URL, absoluteUrl, pageMetadata } from '../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }) {
  const service = findService(params.slug);
  if (!service) return {};
  return pageMetadata({ title: `${service.title} | RSO`, description: service.description, path: `/servicios/${service.slug}` });
}

export default function ServicePage({ params }) {
  const service = findService(params.slug);
  if (!service) notFound();
  const path = `/servicios/${service.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': absoluteUrl(`${path}#service`), name: service.shortTitle, serviceType: service.shortTitle, description: service.description, url: absoluteUrl(path), provider: { '@id': `${SITE_URL}/#organization` }, areaServed: { '@type': 'Country', name: 'Chile' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: service.shortTitle, item: absoluteUrl(path) }] },
  ] };
  return <><a className="skip-link" href="#contenido">Ir al contenido</a><RemakeNavbar home={false} /><StructuredData data={schema} /><main className="content-page" id="contenido">
    <section className="content-hero"><div className="container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">{service.shortTitle}</span></nav><p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1><p className="content-lead">{service.lead}</p><div className="hero-actions"><a className="button button-lime" href="#contacto">Hablemos de tu proyecto <FiMessageCircle /></a><a className="text-link" href="/proyectos">Conoce nuestros proyectos</a></div></div></section>
    <section className="section-space service-intro"><div className="container editorial-grid"><div><p className="eyebrow">QUÉ RESUELVE</p><h2>{service.shortTitle},<br /> con foco en tu operación.</h2></div><div><p>{service.intro}</p><h3>Puede tener sentido si…</h3><ul className="signal-list">{service.signals.map(signal => <li key={signal}><FiCheck /><span>{signal}</span></li>)}</ul></div></div></section>
    <section className="section-space scope-section"><div className="container"><p className="eyebrow">POSIBILIDADES QUE EVALUAMOS CONTIGO</p><h2>Un alcance definido<br /> por lo que necesitas.</h2><div className="scope-grid">{service.scope.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-space"><div className="container editorial-grid"><div><p className="eyebrow">CRITERIO ANTES DE CONSTRUIR</p><h2>{service.decisionTitle}</h2></div><div><p>{service.decision}</p><h3>¿Qué necesitamos para empezar?</h3><p>{service.preparation}</p></div></div></section>
    {service.project && <section className="service-project section-space"><div className="container"><div><p className="eyebrow">EXPERIENCIA APLICADA</p><h2>Un ERP para una<br /> fábrica de puertas.</h2><p>Un proyecto de desarrollo a medida para una operación industrial. Conoce el contexto y las funciones del sistema en nuestro portafolio.</p></div><a className="button button-dark" href="/proyectos/erp-fabrica-puertas">Conocer el proyecto</a></div></section>}
    <section className="section-space"><div className="container faq-layout"><div><p className="eyebrow">PREGUNTAS SOBRE ESTE SERVICIO</p><h2>Antes de dar<br /> el siguiente paso.</h2></div><div className="faq-list">{service.faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-section section-space"><div className="container"><p className="eyebrow">SOLUCIONES QUE PUEDEN COMPLEMENTARSE</p><h2>Explora otras posibilidades.</h2><nav className="related-links" aria-label="Otros servicios">{services.filter(item => item.slug !== service.slug).map(item => <a key={item.slug} href={`/servicios/${item.slug}`}>{item.shortTitle}<span aria-hidden="true">+</span></a>)}</nav></div></section>
    <ContentContact message={service.contact} />
  </main><SiteFooter /></>;
}

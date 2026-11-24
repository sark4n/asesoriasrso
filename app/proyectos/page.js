import RemakeNavbar from '../components/navigation/RemakeNavbar';
import SiteFooter from '../components/navigation/SiteFooter';
import ContentContact from '../components/ContentContact';
import ProjectCards from '../components/ProjectCards';
import StructuredData from '../components/StructuredData';
import { projects } from '../lib/projects';
import { pageMetadata, absoluteUrl, SITE_URL } from '../lib/site';

export const metadata = pageMetadata({ title: 'Proyectos de software y ERP | RSO Chile', description: 'Conoce proyectos de RSO: un ERP para fabricación de puertas y Sarkan Vault, una aplicación de escritorio. Experiencia en gestión y desarrollo de producto.', path: '/proyectos' });

export default function ProjectsPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Proyectos de RSO', url: absoluteUrl('/proyectos'), inLanguage: 'es-CL', about: { '@id': `${SITE_URL}/#organization` }, mainEntity: { '@type': 'ItemList', itemListElement: projects.map((project,index) => ({ '@type': 'ListItem', position: index + 1, name: project.title, url: absoluteUrl(`/proyectos/${project.slug}`) })) } };
  return <><a href="#contenido" className="skip-link">Ir al contenido</a><RemakeNavbar home={false} /><StructuredData data={schema} /><main className="content-page" id="contenido">
    <section className="content-hero"><div className="container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">Proyectos</span></nav><p className="eyebrow">EXPERIENCIA QUE PODEMOS MOSTRAR</p><h1>Proyectos distintos.<br /> Tecnología con propósito.</h1><p className="content-lead">Un sistema para una operación industrial y un producto propio de escritorio. Dos contextos para conocer cómo se concreta el desarrollo de software.</p><a className="button button-lime" href="#proyectos">Explorar los proyectos</a></div></section>
    <section className="section-space" id="proyectos"><div className="container"><h2 className="project-index-heading">Proyectos seleccionados.</h2><ProjectCards /></div></section>
    <section className="section-space scope-section"><div className="container editorial-grid"><div><p className="eyebrow">TAMBIÉN CONSTRUIMOS PRESENCIA DIGITAL</p><h2>Sitios web para<br /> presentar un negocio.</h2></div><div><p>La experiencia de desarrollo de RSO también incluye sitios web. Una web comercial cumple una función diferente de un ERP: explicar la propuesta de una empresa, ayudar a explorar sus servicios y facilitar el contacto.</p><p>Si tu proyecto combina una presencia pública con una plataforma de trabajo, podemos evaluar ambas necesidades y sus puntos de conexión.</p><a href="/servicios/software-a-medida" className="text-link dark-link">Explorar desarrollo a medida</a></div></div></section>
    <ContentContact message="Hola RSO, vi sus proyectos y quiero conversar sobre una necesidad de mi empresa." />
  </main><SiteFooter /></>;
}

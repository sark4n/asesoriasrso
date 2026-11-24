import ProjectGallery from '../../components/ProjectGallery';
import { notFound } from 'next/navigation';
import RemakeNavbar from '../../components/navigation/RemakeNavbar';
import SiteFooter from '../../components/navigation/SiteFooter';
import ContentContact from '../../components/ContentContact';
import StructuredData from '../../components/StructuredData';
import { projects, findProject } from '../../lib/projects';
import { pageMetadata, absoluteUrl, SITE_URL } from '../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }) {
  const project = findProject(params.slug);
  return project ? pageMetadata({ title: `${project.seoTitle || project.title} | RSO`, description: project.description, path: `/proyectos/${project.slug}` }) : {};
}

export default function ProjectPage({ params }) {
  const project = findProject(params.slug);
  if (!project) notFound();
  const path = `/proyectos/${project.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: project.title, description: project.description, url: absoluteUrl(path), image: project.images.map(shot => absoluteUrl(shot.src)), inLanguage: 'es-CL', isPartOf: { '@id': `${SITE_URL}/#website` }, publisher: { '@id': `${SITE_URL}/#organization` } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Proyectos', item: absoluteUrl('/proyectos') }, { '@type': 'ListItem', position: 3, name: project.title, item: absoluteUrl(path) }] },
  ] };
  return <><a href="#contenido" className="skip-link">Ir al contenido</a><RemakeNavbar home={false} /><StructuredData data={schema} /><main className="content-page" id="contenido">
    <section className="content-hero"><div className="container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><a href="/proyectos">Proyectos</a><span aria-hidden="true">/</span><span aria-current="page">{project.slug === 'sarkan-vault' ? 'Sarkan Vault' : 'ERP industrial'}</span></nav><p className="eyebrow">{project.label}</p><h1>{project.title}</h1><p className="content-lead">{project.summary}</p><a className="button button-lime" href="#contacto">Conversemos sobre tu proyecto</a></div></section>
    <ProjectGallery project={project} />
    <section className="section-space"><div className="container editorial-grid"><div><p className="eyebrow">EL CONTEXTO</p><h2>{project.shortTitle}</h2></div><p>{project.context}</p></div></section>
    <section className="section-space scope-section"><div className="container"><p className="eyebrow">FUNCIONES DEL PROYECTO</p><h2>Qué reúne la solución.</h2><div className="scope-grid project-scope">{project.implemented.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className="case-flow" aria-label="Esquema de áreas funcionales">{project.flow.map(item => <span key={item}>{item}</span>)}</div></div></section>
    {project.engineering && <section className="section-space project-engineering"><div className="container"><div className="editorial-grid"><div><p className="eyebrow">INGENIERÍA DE SOFTWARE Y PRODUCTO</p><h2>{project.engineering.title}</h2></div><div><p>{project.engineering.text}</p><ul className="technology-list" aria-label="Tecnologías del proyecto">{project.engineering.stack.map(item => <li key={item}>{item}</li>)}</ul></div></div><div className="scope-grid">{project.engineering.areas.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>}
    <section className="section-space"><div className="container editorial-grid"><div><p className="eyebrow">EXPERIENCIA DE DESARROLLO</p><h2>{project.lessonTitle}</h2></div><div><p>{project.lesson}</p><a className="text-link dark-link" href={`/servicios/${project.related}`}>{project.relatedLabel}</a></div></div></section>
    {project.status && <section className="section-space project-status"><div className="container editorial-grid"><div><p className="eyebrow">ESTADO DEL PROYECTO</p><h2>{project.status.label}</h2></div><div><p>{project.status.text}</p><p className="project-distribution">{project.status.distribution}</p></div></div></section>}
    <ContentContact message={project.contact} />
  </main><SiteFooter /></>;
}

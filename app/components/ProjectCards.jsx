import { projects } from '../lib/projects';

export default function ProjectCards() {
  return <div className="project-cards">{projects.map(project => <article key={project.slug} className={`project-card project-${project.slug}`} id={project.id}>
    <p className="eyebrow">{project.kind}</p><h3>{project.shortTitle}</h3><p>{project.summary}</p>
    <div className="project-mini-flow" aria-label="Áreas del proyecto">{project.flow.map(item => <span key={item}>{item}</span>)}</div>
    <a href={`/proyectos/${project.slug}`}>Conocer {project.slug === 'sarkan-vault' ? 'Sarkan Vault' : 'el ERP industrial'}<span aria-hidden="true">+</span></a>
  </article>)}</div>;
}

import { absoluteUrl, SERVICE_LINKS } from './lib/site';
import { projects } from './lib/projects';

export default function sitemap() {
  return ['/', '/proyectos', ...SERVICE_LINKS.map(service => `/servicios/${service.slug}`), ...projects.map(project => `/proyectos/${project.slug}`)].map(path => ({ url: absoluteUrl(path) }));
}

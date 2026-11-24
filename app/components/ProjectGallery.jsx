import Image from 'next/image';

export default function ProjectGallery({ project }) {
  return <section className="section-space project-gallery-section" aria-labelledby="galeria-titulo"><div className="container">
    <p className="eyebrow">EL PROYECTO EN PANTALLA</p><h2 id="galeria-titulo">Así se ve la solución.</h2>
    <p className="project-gallery-intro">{project.slug === 'sarkan-vault' ? 'Capturas reales de la aplicación para Windows.' : 'Capturas reales de la interfaz, sin registros comerciales ni datos personales.'}</p>
    <div className="project-gallery">{project.images.map((shot, index) => <figure key={shot.src} className={index === 0 ? 'project-shot project-shot-main' : 'project-shot'}>
      <a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar captura: ${shot.alt} (abre en otra pestaña)`}><Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={index === 0 ? '(max-width: 1200px) 92vw, 1140px' : '(max-width: 740px) 92vw, 560px'} /></a>
      <figcaption>{shot.caption}<span>Selecciona la imagen para ampliarla.</span></figcaption>
    </figure>)}</div>
  </div></section>;
}

import Image from 'next/image';

export default function ProjectGallery({ project }) {
  return <section className="section-space project-gallery-section" aria-labelledby="galeria-titulo"><div className="container">
    <p className="eyebrow">EL PROYECTO EN PANTALLA</p><h2 id="galeria-titulo">Así se ve la solución.</h2>
    <p className="project-gallery-intro">{project.slug === 'sarkan-vault' ? 'Capturas reales de la aplicación para Windows.' : 'Capturas reales de la interfaz, sin registros comerciales ni datos personales.'}</p>
    <div className="project-gallery">{project.images.map(shot => <figure key={shot.src} className="project-shot">
      <a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar captura: ${shot.alt} (abre en otra pestaña)`}><span className="capture-label">{project.slug === 'sarkan-vault' ? 'SARKAN VAULT · WINDOWS' : 'ERP INDUSTRIAL · APLICACIÓN WEB'}</span><Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 740px) 90vw, 860px" /></a>
      <figcaption>{shot.caption}<span>Selecciona la imagen para ampliarla.</span></figcaption>
    </figure>)}</div>
  </div></section>;
}

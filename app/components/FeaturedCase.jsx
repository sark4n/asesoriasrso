import Image from 'next/image';

export default function FeaturedCase() {
  return <section className="section-space featured-case" aria-labelledby="caso-erp"><div className="container featured-case-grid">
    <div><p className="eyebrow">UN PROYECTO REAL · ERP INDUSTRIAL</p><h2 id="caso-erp">De cotizar una puerta<br /> a coordinar su producción.</h2>
      <dl className="case-summary"><div><dt>El desafío</dt><dd>Relacionar la información comercial, los materiales y las etapas de trabajo de una fábrica de puertas.</dd></div><div><dt>La solución</dt><dd>Un ERP a medida con cotizaciones, inventario, compras, programación, producción y despachos.</dd></div><div><dt>El proyecto en pantalla</dt><dd>Explora las funciones y capturas reales del sistema, sin exponer los registros de la empresa.</dd></div></dl>
      <a className="button button-dark" href="/proyectos/erp-fabrica-puertas">Conocer el caso ERP <span aria-hidden="true">↗</span></a>
    </div><figure><div className="capture-frame"><span>ERP A MEDIDA · CENTRO DE REPORTES</span><Image src="/proyectos/erp-reportes.webp" width={1009} height={712} alt="Centro de informes del ERP para una fábrica de puertas" sizes="(max-width: 900px) 90vw, 560px" /></div><figcaption>Software construido alrededor de una operación industrial.</figcaption></figure>
  </div></section>;
}

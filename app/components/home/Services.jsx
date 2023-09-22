import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id='Services' className="pt-12 pb-12 lg:pb-[90px]">
      
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 ">
        {/* TITULO Y PARRAFO */}
          <div className="w-full px-4">            
            <div className="mx-auto mb-6 text-center">
                <h1 className="block text-lg font-semibold mt-4 pb-2">Nuestros Servicios</h1>
                <h2 className="pb-6 text-3xl font-bold sm:text-4xl md:text-[40px]">Que ofrecemos</h2>
                <h2 className="text-violet-700 font-extrabold">
                  ¿Está su sitio web perdiendo oportunidades potenciales de hacer crecer su negocio?
                </h2>
            </div>        
            <div className="mb-6" >
              <p className="text-gray-600 text-left">
                Ofrecemos servicios expertos de diseño y desarrollo web. Pero eso no es todo. 
                Nuestros servicios de gestión de comunidades, están diseñados específicamente para ayudar a las 
                empresas en crecimiento a triunfar en internet.</p>
              <p className="text-gray-600 text-left mt-2">
                Desde las redes sociales y la captación de clientes hasta la gestión de la reputación,
                nuestras soluciones le ayudarán a construir una sólida presencia en línea que impulse 
                la visibilidad, aumente la fidelidad de los clientes e impulse el crecimiento de sus ingresos.</p>
              <p className="text-gray-600 text-left mt-2">
                No se conforme con un sitio web mediocre.</p>             
              <p className="text-gray-600 text-left">
                Elija RSO y lleve su su negocio al siguiente nivel.</p>
            </div>
          </div>
        

            {/* SERVICIOS */}
        <div className="flex flex-wrap">
          <ServiceCard
            title="Diseño moderno & Actualizado."
            details="Nuestro servicio de diseño web crea sitios web cautivadores que reflejan la 
            identidad única de su marca. Con nuestra experiencia en experiencia de usuario y estética visual,
            nos aseguramos de que su sitio web deje una impresión duradera en sus visitantes, 
            aumentando el compromiso y las conversiones."
            icon={<Image src='/assets/modernUI.png' alt='modernui' width={5000} height={5000} className="rounded-t-2xl"/>}
          />
          <ServiceCard
            title="Gestión de comunidades: Conecte con su público"
            details="Nuestro servicio de gestión de comunidades le ayuda a construir y alimentar una próspera 
            comunidad en línea. Nos comprometemos estratégicamente con su público, fomentamos la fidelidad a 
            la marca y gestionamos su reputación en línea. Al fomentar conexiones significativas, mejoramos 
            el conocimiento de la marca y la satisfacción del cliente."
            icon={<Image src='/assets/comMan.png' alt='modernui' width={5000} height={5000} className="rounded-t-2xl"/>}
          />          
          <ServiceCard
            title="Desarrollo Web para necesidades especificas."
            details="Nuestro servicio de desarrollo web transforma sus ideas en sitios web totalmente 
            funcionales, optimizados en cuanto a rendimiento y facilidad de uso. 
            Utilizamos las últimas tecnologías para crear sitios web que ofrezcan experiencias 
            fluidas en todos los dispositivos y navegadores, ayudándole a llegar a un público más 
            amplio y a alcanzar sus objetivos empresariales."
            icon={<Image src='/assets/webDevelop.png' alt='modernui' width={5000} height={5000} className="rounded-t-2xl"/>}
          />
          <ServiceCard
            title='Comercio Electronico "E-commerce" '
            details="Nuestra experiencia en comercio electrónico le permiten establecer una potente tienda en línea 
            que atraiga clientes e impulse sus ventas. Creamos plataformas totalmente personalizadas, seguras y 
            fáciles de usar que agilizan la experiencia de compra, aumentan la confianza de los clientes e impulsan 
            sus ingresos online."
            icon={<Image src='/assets/eComer.png' alt='modernui' width={5000} height={5000} className="rounded-t-2xl"/>}
          />
          <ServiceCard
            title="Servicios de Contabilidad"
            details="El crecimiento de su negocio lleva a la necesidad de contratar nuevos trabajadores y puede ser
            un verdadero problema si no se cuenta con la asesoria adecuada.
            Cuente con nosotros para calculo de remuneraciones, previred, contratos y mucho mas!"
            icon={<Image src='/assets/conta.png' alt='modernui' width={5000} height={5000} className="rounded-t-2xl"/>}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white pb-10 shadow-md hover:shadow-lg">
          <div className='mb-8 flex items-center justify-center rounded-2xl'>{icon}</div>
          <div className="px-4">
            <h4 className="mb-3 text-xl font-extrabold text-dark">{title}</h4>
            <p className="text-gray-700">{details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

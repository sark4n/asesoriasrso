import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <>
        <div id="AboutUs" className="bg-white">  
                <div className="sm:pt-32 pt-24 container m-auto px-6 text-gray-600 md:px-12 xl:px-6 pb-10">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                        <Image src="/assets/about3.png" alt="image" loading="lazy" width="6500" height="4500" className='object-cover'/>
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Quienes Somos y Que hacemos
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Somos un equipo de profesionales con años de experiencia en emprendimiento en chile.
                                Entendemos la importancia del mundo digital y lo necesario que es ser parte de él.
                                <span className='text-violet-700'> Tu tienda física es tu sitio en internet</span>, y es 
                                importante que muestre exactamente quien eres y que ofreces. 
                            </p>
                            <p className="mt-4 text-gray-600">Ahí podemos ayudarte, empezamos creando tu sitio web,
                            como tu centro de negocios, luego nos encargamos de tus redes para aumentar tu crecimiento y
                            exposición en internet. Mas clientes implica mas ventas y crecimiento de tu negocio, 
                            si necesitas contabilidad, ya sea para manejar tus ventas o contratar nuevos colaboradores,
                            contáctanos que podemos ayudar con eso también.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default AboutUs
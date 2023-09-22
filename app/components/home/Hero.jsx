import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-start h-screen bg-fixed bg-center bg-cover hero-bg'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] triangulo' />
      <div className='sm:ml-8 ml-2 p-5 text-white z-[2]'>
        <h2 className='text-5xl font-bold mt-10 max-w-xl'>CRECE EN INTERNET Y <span className='text-violet-500'> AUMENTA</span> TUS CLIENTES
        CON NOSOTROS</h2>
        <p className='mt-4 py-5 text-xl'>
          Diseño Web & Posicionamiento en internet.<br/>
          Asesoria Contable. </p>
        <div className=''>
          <p className="py-4 hidden sm:flex">
            ¡Potencia tu presencia en línea hoy mismo!
            </p>
          
          <Link href="/"><button className='btn-morado mr-2'>Empieza Ya</button></Link>
          <Link href="/#AboutUs"><button className='btn-transp2'> Saber Mas »</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
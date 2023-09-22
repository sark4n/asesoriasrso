'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow] = useState('0 0 #0000')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#6936f5');
        setTextColor('#ffffff');
        setShadow('0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)')
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setShadow('0 0 #0000')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}`, boxShadow: `${shadow}`}}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center text-white'>
        <Link href='/'>
            <Image src="/assets/RSOlogoTransp.png" height='180' width='180' alt='logo' className='mt-5 ml-2 mb-2'/>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex ml-5'>
          <li className='p-4'>
            <Link href='/#AboutUs'>Nosotros</Link>
          </li>
          <li className='p-4'>
            <Link href='/#Services'>Servicios</Link>
          </li>
          <li className='p-4'>
            <Link href='/#Pricing'>Planes</Link>
          </li>
          <li className='p-4'>
            <Link href='/#Contact'>Contacto</Link>
          </li>
        </ul>
        
          <Link href="/#Contact">
          <button className='justify-end btn-morado'>Pide una cotizacion</button>
          </Link>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 mr-5'>
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-[url("/assets/purple-bg.png")] ease-in duration-300 '
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen bg-[url("/assets/purple-bg.png")] text-center ease-in duration-300 text-violet-700'
          }
        >
        <Link href='/' className=''>
            <Image src="/assets/RSOlogoTransp.png" height='180' width='180' alt='logo' 
            className='mt-5 ml-2 mb-2'/>
        </Link>

          <ul className='mt-24'>
            <li onClick={handleNav} className='p-4'>
              <Link href='/#AboutUs' className='text-4xl hover:text-gray-500 flex items-center gap-5'>
              <img 
                  src="https://i.ibb.co/tZq7Gsw/icono-Tienda2.png" 
                  className="w-20 " 
                  width="512" 
                  height="512" 
                  alt="icono tienda"
                /> 
                 Nosotros
              </Link>
            </li>
            <li onClick={handleNav} className='p-4'>
              <Link href='/#Services' className='text-4xl hover:text-gray-500 flex items-center gap-5'>
              <img 
                  src="https://i.ibb.co/HVp6zx2/icono-Redes2.png" 
                  className="w-20 " 
                  width="512" 
                  height="512" 
                  alt="icono tienda"
                /> 
                 Servicios
              </Link>
            </li>
            <li onClick={handleNav} className='p-4'>
              <Link href='/#Pricing' className='text-4xl hover:text-gray-500 flex items-center gap-5'>
              <img 
                  src="https://i.ibb.co/hmKxsyF/contabilidad.png" 
                  className="w-20 " 
                  width="512" 
                  height="512" 
                  alt="icono tienda"
                /> 
                 Planes
              </Link>
            </li>
            <li onClick={handleNav} className='p-4'>
              <Link href='/#Contact' className='text-4xl hover:text-gray-500 flex items-center gap-5'>
              <img 
                  src="https://i.ibb.co/gz5dgCZ/icono-Corredor.png" 
                  className="w-20 " 
                  width="512" 
                  height="512" 
                  alt="icono tienda"
                /> 
                 Contacto
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
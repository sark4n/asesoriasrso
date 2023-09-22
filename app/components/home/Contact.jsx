
// const Contact = () => {
//   return (
//     <>
    
//     {/* <!--
//   Heads up! 👋

//   Plugins:
//     - @tailwindcss/forms
// --> */}

// <section id="Contact" className="bg-gray-100">
//   <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
//       <div className="lg:col-span-2 lg:py-12">
//         <p className="max-w-xl text-lg">
//           At the same time, the fact that we are wholly owned and totally
//           independent from manufacturer and other group control gives you
//           confidence that we will only recommend what is right for you.
//         </p>

//         <div className="mt-8">
//           <a href="" className="text-2xl font-bold text-violet-600">
//             +56 9 2249 1856
//           </a>

//           <address className="mt-2 not-italic">
//             282 Kevin Brook, Imogeneborough, CA 58517
//           </address>
//         </div>
//       </div>

//       <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
//         <form action="" className="space-y-4">
//           <div>
//             <label className="sr-only" htmlFor="name">Name</label>
//             <input
//               className="w-full rounded-lg border-gray-200 p-3 text-sm"
//               placeholder="Name"
//               type="text"
//               id="name"
//             />
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label className="sr-only" htmlFor="email">Email</label>
//               <input
//                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
//                 placeholder="Email address"
//                 type="email"
//                 id="email"
//               />
//             </div>

//             <div>
//               <label className="sr-only" htmlFor="phone">Phone</label>
//               <input
//                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
//                 placeholder="Phone Number"
//                 type="tel"
//                 id="phone"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            
//             <div>
//               <input
//                 className="peer sr-only"
//                 id="option1"
//                 type="radio"
//                 tabIndex="-1"
//                 name="option"
//               />

//               <label
//                 htmlFor="option1"
//                 className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-violet-700 peer-checked:border-violet-700 peer-checked:bg-violet-700 peer-checked:text-white"
//                 tabIndex="0"
//               >
//                 <span className="text-sm"> Option 1 </span>
//               </label>
//             </div>

//             <div>
//               <input
//                 className="peer sr-only"
//                 id="option2"
//                 type="radio"
//                 tabIndex="-1"
//                 name="option"
//               />

//               <label
//                 htmlFor="option2"
//                 className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-violet-700 peer-checked:border-violet-700 peer-checked:bg-violet-700 peer-checked:text-white"
//                 tabIndex="0"
//               >
//                 <span className="text-sm"> Option 2 </span>
//               </label>
//             </div>

//             <div>
//               <input
//                 className="peer sr-only"
//                 id="option3"
//                 type="radio"
//                 tabIndex="-1"
//                 name="option"
//               />

//               <label
//                 htmlFor="option3"
//                 className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-violet-700 peer-checked:border-violet-700 peer-checked:bg-violet-700 peer-checked:text-white"
//                 tabIndex="0"
//               >
//                 <span className="text-sm"> Option 3 </span>
//               </label>
//             </div>

//           </div>

//           <div>
//             <label className="sr-only" htmlFor="message">Message</label>

//             <textarea
//               className="w-full rounded-lg border-gray-200 p-3 text-sm"
//               placeholder="Message"
//               rows="8"
//               id="message"
//             ></textarea>
//           </div>

//           <div className="mt-4">
//             <button
//               type="submit"
//               className="inline-block w-full rounded-lg bg-violet-700 px-5 py-3 font-medium text-white sm:w-auto"
//             >
//               Send Enquiry
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>

// </section>

//     </>
//   )
// }

// export default Contact
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

function Contact() {
  const [state, handleSubmit] = useForm("mgejnnlk");
  if (state.succeeded) {

      return <p id="Contact" className=" mx-auto max-w-7xl px-6 py-24 text-5xl">¡Gracias por tu mensaje! Te Contactaremos a la <span className='text-violet-700'>brevedad</span></p>;

  }
  return (
    <section id="Contact" className=" mx-auto max-w-7xl px-4 py-8">
      <div className="mx-auto max-w-lg text-center mt-10 pt-5">
        <h2 className="text-3xl font-bold sm:text-4xl sm:pt-5 sm:pb-12 pb-4">Contacto</h2>
      </div>
        <div className='sm:flex sm:gap-5 justify-center'>
          
          <div className="md:5/12 lg:w-5/12 pb-4 ">
            <p className='text-gray-700 mb-5'>¿Listo para empezar a construir una relación sólida? ¡Contáctanos ahora y descubre cómo podemos ayudarte!</p>
            <Image src="/assets/contactUs.png" alt="image" loading="lazy" width="6500" height="4500" className='object-cover rounded-xl'/>
          </div>

          <div className="md:7/12 lg:w-6/12">
          <form onSubmit={handleSubmit}>
          
          <label htmlFor="name">
            Tu nombre
          </label>
          <input
            id="name"
            type="name" 
            name="name"
            placeholder=" Tu nombre para contactarnos"
            className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          
          <label htmlFor="phone">
            Telefono
          </label>
          <input
            id="phone"
            type="phone" 
            name="phone"
            placeholder=" No llamadas, solo te contactamos por whatsapp"
            className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
          />
          
          <label htmlFor="email">
            Correo Electronico
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder=" tucorreo@tuproveedor.cl"
            className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <label htmlFor="message">
            Tu Mensaje
          </label>
          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 "
            placeholder="Estoy interesado en este servicio..."
            rows="8"
            id="message"
            ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} 
          className="mt-8 block rounded-full border border-violet-600 bg-violet-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-violet-700 hover:ring-1 hover:ring-violet-700 focus:outline-none focus:ring active:text-violet-500">
            Enviar
          </button>
          </form>
          </div>
        </div>
    </section>
  );
}

function App() {
  return (
    <Contact />
  );
}
export default App;
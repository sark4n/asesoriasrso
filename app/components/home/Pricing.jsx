import React from 'react'

const Pricing = () => {
  return (
    <>
<div id="Pricing" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 ">
  {/* TITULO */}
  <div 
    className="mx-auto max-w-lg text-center">
    <h2 className="text-3xl font-bold sm:text-4xl sm:pt-5 sm:pb-12 mt-10 py-6">Elige tu Plan</h2>
  </div>

{/* TABS */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center">
{/* SITIO WEB */}
    <div
      className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 "
    >
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Sitio Web <span className="text-violet-700">PyMe Emergente</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            $200.000 CLP *
          </strong>

          <span className="text-sm font-medium text-gray-700">/Pago Único</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Dominio .cl & host por 1 año.</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> 5 cuentas de correo & 10GB de espacio.</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Posicionamiento en Google. </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Personalizado a tu gusto NO usamos wordpress.</span>
        </li>
      </ul>

      <a
        href="https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20el%20plan%20pyme%20emergente."
        className="mt-8 block rounded-full border border-violet-600 bg-white px-12 py-3 text-center text-sm font-medium text-violet-600 hover:ring-1 hover:ring-violet-600 focus:outline-none focus:ring active:text-violet-500"
      >
        Me interesa
      </a>
      <span className="text-sm text-gray-300 italic">* Sujeto a revisión del sitio con el cliente.</span>
    </div>
{/* SITIO WEB Y REDES */}
    <div
      className="rounded-2xl border border-violet-600 p-6 shadow-sm ring-1 ring-violet-600 sm:px-8 lg:p-8"
    >
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
        <span className="text-violet-700">Plan Full</span> Sitio Web + Redes Sociales. 
          
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
          $200.000 CLP
          </strong>

          <span className="text-sm font-medium text-gray-700">/Mensual</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Dominio .cl & host por 1 año. </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700">10 Cuentas de correo & 20GB de espacio</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700">1 Publicacion diaria en la Red Social mas acorde a tu negocio. </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Google Console, Maps, Bussiness & Analitycs. </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Crecimiento de tu negocio en internet. </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Asesoria Directa. </span>
        </li>
      </ul>

      <a
        href="https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20el%20plan%20full."
        className="mt-8 block rounded-full border border-violet-600 bg-violet-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-violet-700 hover:ring-1 hover:ring-violet-700 focus:outline-none focus:ring active:text-violet-500"
      >
        Me interesa
      </a>
    </div>
{/* CONTABLE */}
    <div
      className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12"
    >
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Contabilidad para tu <span className="text-violet-700">PyMe.</span>
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            $300.000 CLP
          </strong>

          <span className="text-sm font-medium text-gray-700">/Mensual</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Servicio de remuneraciones </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Archivo Previred </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> Documentos jurídicos (contratos y finiquitos) </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-violet-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-700"> F29 mensual </span>
        </li>
      </ul>

      <a
        href="https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20el%20plan%20contable."
        className="mt-8 block rounded-full border border-violet-600 bg-white px-12 py-3 text-center text-sm font-medium text-violet-600 hover:ring-1 hover:ring-violet-600 focus:outline-none focus:ring active:text-violet-500"
      >
        Me interesa
      </a>
    </div>

  </div>

</div>
    </>
  )
}

export default Pricing
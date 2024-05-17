import React from 'react'

export default function About() {
  return (
   
        <div className=''>

            {/* Hero section */}
            <div className="relative isolate -z-10">
            <svg
                className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                <pattern
                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div
                className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                aria-hidden="true"
            >
                <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                    clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
                />
            </div>
            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent  sm:text-6xl">
                        Perfil de la Empresa.
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    DLC Electric Perù DLC EIRL, fundada en 2013, es un fabricante centrado en I+D y producción de interruptores
                     de control industrial, como interruptores de límite, microinterruptores, interruptores sellados,
                      interruptores a prueba de agua, interruptores de palanca e interruptores de pie.
                    </p>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-full flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div className="relative">
                        <img
                            src="https://i.postimg.cc/3RzK2TwY/Logo-1.avif"
                            alt=""
                            className=" w-full rounded-xl bg-gray-900/5 shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </div>
               
                 
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent sm:text-4xl">Nuestra Mision</h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                
                    <div className="mt-10 max-w-xl text-xl leading-8 text-gray-700">
                    <p>
                        

                    Nuestra misión es clara, ofrecer a nuestros clientes las mejores soluciones. 
                    Electric Perù DLC es una empresa industrial que trabajando con Método y utilizando 
                    la mejora continua como herramienta de evolución constante, aplicando tecnología avanzada,
                     y Desarrollando e Innovando productos y procesos, crea valor i ofrece soluciones técnicas
                      con servicio integrado de diseño y fabricación de componentes y productos acabados en 
                      base a perfiles de aluminio extruido.
                    </p>                
                    </div>
                </div>
            
                </div>
            </div>
            </div>
            

            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
                src="https://i.postimg.cc/sgW5pg0h/mision.png"
                alt=""
                className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
            </div>

            {/* Values section */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent  sm:text-4xl">Nuestros Valores</h2>
                <p className="mt-6 text-lg leading-4 text-gray-600">
                Esfuerzo y tenacidad.</p>
                <p className="mt-6 text-lg leading-4 text-gray-600">
                Respeto y generosidad.</p>
                <p className="mt-6 text-lg leading-4 text-gray-600">
                Autoestima racional.</p>
                <p className="mt-6 text-lg leading-4 text-gray-600">
                Entusiasmo (y actitud positiva).</p>
                <p className="mt-6 text-lg leading-4 text-gray-600">
                Flexibilidad, adaptación proactiva a los cambios.</p>
                
                
                
                
                
            </div>
            <br />
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent sm:text-4xl">Vision</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Ser un referente en el mercado industrial como suministradores de piezas con un elevado valor añadido.
                La empresa Electric Perù DLC tiene unos valores y unos principios establecidos por la dirección,
                 que deben ser conocidos por todo el personal y según los cuales todos los trabajadores de la empresa
                  deben actuar.</p>
            
                
            </div>
            {/*<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                <div key={value.name}>
                    <dt className="font-semibold text-gray-900">{value.name}</dt>
                    <dd className="mt-1 text-gray-600">{value.description}</dd>
                </div>
                ))}
                </dl>*/}
            </div>

        
        </div>
         
     

      
  )
}

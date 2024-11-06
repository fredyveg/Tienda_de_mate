"use client";

import { InputField } from "./WorkWithUs";

export default function Franchise() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
            <main className="w-full max-w-3xl bg-transparent rounded-lg shadow-none p-6">

                <div className="text-center mb-6">
                    <div className="text-lg text-[#c7a17a] text-opacity-0.5 font-light">
                        <span>{`CONOCÉ TODAS LAS OPCIONES`}</span>
                    </div>

                    <div className="mt-3 mb-4">
                        <strong className="text-3xl font-bold text-gray-800">CONVERTITE EN FRANQUICIADO                        </strong>
                    </div>

                    <div className="bg-secundario-300 h-0.5 w-16 mx-auto" style={{ height: '0.15rem' }}/>
                    
                    <div className="mt-3">
                        <span className="text-gray-600">
                            Querés ser parte de este equipo? Dejanos tus datos para recibir mas información, y nos pondremos en contacto para contarte todas las posibilidades de tu próxima franquicia Tienda de Mate!
                        </span>
                    </div>
                </div>


                <form className="mt-8 space-y-6">
                    {/* Nombre y Apellido */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <InputField placeholder="Nombre" type="name" />
                        <InputField placeholder="Apellido" type="lastname" />
                    </div>

                    {/* E-mail y telefono */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <InputField placeholder="Teléfono" type="tel" />
                        <InputField placeholder="E-mail" type="email" />
                    </div>

                    {/* Como llegaste a nosotros */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <input
                            placeholder="¿Cómo llegaste a nosotros?"
                            className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
                        />
                    </div>

                    {/* Zona de franquicia */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <InputField placeholder="¿En qué zona te interesaría instalar la franquicia?" type="text" />
                    </div>

                    {/* Botón de envío */}
                    <div className="text-center">
                        <button className="bg-secundario-300 text-white font-semibold w-full md:w-1/4 py-2 mt-6 rounded shadow-none cursor-pointer hover:bg-orange-300">
                            ENVIAR
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

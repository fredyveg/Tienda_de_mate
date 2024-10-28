// Componentes

export default function Franchises() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
      <main className="w-full max-w-3xl bg-transparent rounded-lg shadow-none p-6">
        {/* Título */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">CONOCÉ TODAS LAS OPCIONES</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">CONVERTITE EN FRANQUICIADO</h1>
          <div className="bg-amber-500 h-0.5 w-16 mx-auto" />
          <p className="text-gray-600 mt-4">
          Querés ser parte de este equipo? Dejanos tus datos para recibir mas información, y nos pondremos en contacto para contarte todas las posibilidades de tu próxima franquicia Tienda de Café!
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="Nombre"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
            <div>
              <input
                placeholder="Apellido"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
          </div>

          {/* E-mail y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="E-mail"
                type="email"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
            <div>
              <input
                placeholder="Teléfono"
                type="tel"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
          </div>

          {/* Como Leggaste y Zona */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="¿Cómo llegaste a nosotros?"
                type="how"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
            <div>
              <input
                placeholder="¿En que zona te interesaría instalar la franquicia?"
                type="zone"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
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

"use client";
// Componente de entrada reutilizable
interface InputFieldProps {
  placeholder: string;
  type?: string;
}
function InputField({ placeholder, type = "text" }: InputFieldProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
    />
  );
}
// Componente reutilizable para encabezado
interface HeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

function Header({ subtitle, title, description }: HeaderProps) {
  return (
    <div className="text-center mb-6">
      <p className="text-sm text-gray-500">{subtitle}</p>
      <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{title}</h1>
      <div className="bg-amber-500 h-0.5 w-16 mx-auto" />
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
}

const WorkWithUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
      <main className="w-full max-w-3xl bg-transparent rounded-lg shadow-none p-6">
        <Header
          subtitle="SUMATE A NUESTRO EQUIPO"
          title="TRABAJÁ EN TDM"
          description="Si querés formar parte de Tienda de Mate envíanos tus datos y adjunta tu CV"
        />

        <form className="mt-8 space-y-6">
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField placeholder="Nombre" type="name" />
            <InputField placeholder="Apellido" type="lastname" />
          </div>

          {/* E-mail y telefono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField placeholder="Teléfono" type="tel" />
            <InputField placeholder="E-mail" type="email" />
          </div>

          {/* Puesto de trabajo y Adjuntar CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="¿Cuál es tu puesto de trabajo?"
                className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-700">Adjuntar CV:</label>
              <div className="flex items-center space-x-10">
                <input id="file-upload" type="file" className="hidden" />
                <label htmlFor="file-upload" className="border border-gray-300 text-gray-700 py-1 px-4 rounded cursor-pointer hover:bg-gray-100">
                  Elegir Archivo
                </label>
                <span className="text-gray-600">No file chosen</span>
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="bg-white border border-gray-300 rounded shadow-none p-2 w-full"
            />
          </div>

          {/* Boton de envio */}
          <div className="text-center">
            <button className="bg-secundario-300 text-white font-semibold w-full md:w-1/4 py-2 mt-6 rounded shadow-none cursor-pointer hover:bg-orange-300">
              ENVIAR
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export { InputField, Header, WorkWithUs }; // Se Exportan los componentes

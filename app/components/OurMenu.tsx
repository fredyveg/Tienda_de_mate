"use client";
// React
import React from "react";
import {MENU_PRODUCTOS} from "../resources/constants";

// Componente OurMenu
export default function OurMenu() {
  return (
    <div className="flex flex-col gap-4 bg-white">
        {/*Header con imagen*/}
        <header
  className="relative w-full h-[40vh] sm:h-[450px] md:h-[550px] bg-cover bg-center flex items-center justify-start px-5 sm:px-10"
  style={{
          backgroundImage:
            'url(https://tiendadecafe.com.ar/wp-content/uploads/2021/05/slider_platos_02.jpg?id=902)',
          backgroundSize: '130% 145%', 
          backgroundPosition: '60% 60%',
        }}
      >
        <div className="ml-20 text-white">
          <h1 className="text-5xl flex flex-col items-start font-light">SOMOS MATE <span className="text-[4.0rem] font-bold ">Y MUCHO MAS</span></h1>
          <h2 className="text-xl font-light ">Veni a disfrutar nuestros platos, perfectos para<br />
           <span className="block">cada momento de tu día.</span>

</h2>
        </div>
      </header>
      <h2 className="text-xl font-bold"></h2>
      <div className="flex flex-wrap justify-center gap-4">
        {MENU_PRODUCTOS.slice(0, 10).map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 w-1/2 md:w-1/3 lg:w-1/5"
          >
            <img
              src={url}
              alt={`Producto ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Imagen horizontal MENU */}
      <div className="flex flex-col gap-4 bg-[#dddddd] mt-4 p-7">
        <h2 className="text-center font-bold text-black text-2xl p-6">
          CONOCÉ TODAS NUESTRAS OPCIONES
        </h2>
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-md w-1/2 md:w-1/3 lg:w-1/2">
            <a
              href={MENU_PRODUCTOS[10]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MENU_PRODUCTOS[10]}
                alt="Imagen horizontal"
                className="w-full h-64 object-contain"
              />{" "}
            </a>
          </div>
          <div className="overflow-hidden rounded-md w-1/2 md:w-1/3 lg:w-1/2">
            <a
              href={MENU_PRODUCTOS[11]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MENU_PRODUCTOS[11]}
                alt="Imagen horizontal"
                className="w-full h-64 object-contain"
              />{" "}
            </a>
          </div>
          <div className="overflow-hidden rounded-md w-1/2 md:w-1/3 lg:w-1/2">
            <a
              href={MENU_PRODUCTOS[12]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MENU_PRODUCTOS[12]}
                alt="Imagen horizontal"
                className="w-full h-64 object-contain"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

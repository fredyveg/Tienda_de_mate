"use client";
// React
import React from "react";

// Utils
import {PRODUCTOS} from "../resources/constants";
import {useWindowSize} from "@/hooks/useWindowSize";

export default function OurMatePage() {
  // Hook personalizado para revisar el ancho y alto de la ventana
  const {width} = useWindowSize();

  return (
    <div
      className={`flex ${
        width > 1280 ? "flex-wrap" : "flex-col"
      } w-full py-10 justify-around gap-10 items-center xl:px-52`}
    >
      {PRODUCTOS.map((product) => (
        <div
          key={product.id}
          className="relative flex-shrink-0 bg-white rounded-lg p-4 group"
        >
          <img
            src={product.image}
            className="mb-2 w-64 h-64 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
          />

          <h3 className="text-lg font-semibold text-primario-300">
            {product.name}
          </h3>

          {/* Texto y fondo sobre la imagen */}
          <div
            className={`absolute inset-0 ${product.color} bg-opacity-20 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg px-10 py-5 m-4 h-[80%]`}
          >
            <span className="text-base font-normal text-primario-300">
              {product.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

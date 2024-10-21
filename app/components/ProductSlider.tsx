"use client";
// React
import React from "react";

// NextUI
import {Button, Card, CardBody, Divider} from "@nextui-org/react";

// Utils
import {PRODUCTOS} from "../resources/constants";

export default function ProductSlider() {
  return (
    <div className="flex flex-col w-full pt-72 xl:py-8 ">
      <h1 className="text-center text-4xl  text-primario-300 font-semibold">
        NUESTROS PRODUCTOS
      </h1>
      <Divider className="bg-secundario-300 my-10 w-4/12 xl:w-1/12 self-center h-[2px]" />
      <div className="overflow-x-auto">
        <div className="flex space-x-5">
          {PRODUCTOS.map((product) => (
            <div
              key={product.id}
              className="relative flex-shrink-0 bg-white rounded-lg p-4 group"
            >
              <img
                src={product.image}
                className="mb-2 w-64 h-64 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
              />

              <h3 className="text-lg font-semibold text-primario-300 text-center">
                {product.name}
              </h3>

              {/* Texto y fondo sobre la imagen */}
              <div
                className={`absolute inset-0 ${product.color} bg-opacity-50 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg px-10 py-5 m-4 h-[80%]`}
              >
                <span className="text-base font-normal text-primario-300">
                  {product.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row w-full py-10 gap-8">
        <Card className="w-full h-96 rounded-none shadow-none bg-cover bg-[url('https://yerbamateargentina.org.ar/imagenes/archivos/noticias/79192_imagen_1227x747xrecortarxagrandar.jpg?random=1615376832')]">
          <CardBody className="flex flex-col justify-end gap-4 items-start p-8">
            <p className="bg-blanco px-2 py-1 text-primario-300 text-lg">
              Aprende a hacer tu mate como un experto
            </p>
            <h1 className="text-4xl font-semibold text-blanco">
              SECRETOS DEL GAUCHO
            </h1>
            <Button
              size="sm"
              className="bg-primario-300 rounded-none text-blanco text-lg"
            >
              VER
            </Button>
          </CardBody>
        </Card>
        <Card className="w-full h-96 rounded-none shadow-none bg-cover bg-[url('https://media.ambito.com/p/5891322c9b9c38abd24864874a7e6948/adjuntos/239/imagenes/039/792/0039792172/1200x675/smart/mate1jpg.jpg')]">
          <CardBody className="flex flex-col justify-end gap-4 items-start p-8">
            <p className="bg-blanco px-2 py-1 text-primario-300 text-lg">
              Conoce todo lo que podes encontrar en nuestros locales
            </p>
            <h1 className="text-4xl font-semibold text-blanco">
              NUESTROS MATES
            </h1>
            <Button
              size="sm"
              className="bg-primario-300 rounded-none text-blanco text-lg"
            >
              VER
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

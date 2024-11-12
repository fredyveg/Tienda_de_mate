"use client";
// React
import React from "react";

// NextUI
import {Divider} from "@nextui-org/react";

export default function Tutoriales() {
  return (
    <div className="flex flex-col w-full  py-4 xl:py-8 px-4 xl:px-40">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-center text-lg  text-primario-200 font-thin text-balance">
          Nuestra intención es que estas guías sirvan como un punto de partida
          para tu experiencia con el mate. El sabor de la infusión puede ser
          modificado por la yerba que elijas, el molido, el agua y, por
          supuesto, la forma en que cebes. Cada mate y cada bombilla es
          diferente, por lo cual estos parámetros deben tomarse como
          recomendaciones, no como reglas absolutas.
        </p>
        <p className="text-center text-lg  text-primario-200 font-thin text-balance">
          Al revisar nuestras guías de preparación, notarás que utilizamos
          gramos al hablar de la cantidad de agua o yerba. Esto no es un error:
          para facilitar el proceso, equiparamos mililitros con gramos, de modo
          que el cálculo sea más sencillo.
        </p>
        <p className="text-center text-lg  text-primario-200 font-thin text-balance italic">
          Algunos tips:
        </p>
        <div className="flex flex-col text-center gap-2">
          <p className="text-lg  text-primario-200 font-thin ">
            Cuanto más tiempo dejes reposar el agua antes de cebar, más suave
            será el sabor de la yerba.
          </p>
          <p className="text-lg  text-primario-200 font-thin ">
            A mayor temperatura del agua, más intensa será la infusión, así que
            juega con esto para ajustar a tu gusto.
          </p>
        </div>
        <p className="text-center text-lg  text-primario-200 font-bold text-balance">
          ¡Ahora sí, a disfrutar del mate y a experimentar!
        </p>
      </div>
      <Divider className="bg-primario-200/20 my-10 px-10 self-center" />

      <div className="flex flex-col place-self-center">
        <div className="flex flex-col xl:flex-row w-full py-10 gap-24 text-center">
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">
                PREPARACION DEL MATE PERFECTO
              </p>
              <p>Aprender mas </p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">DULCE O AMARGO</p>
              <p>Aprender mas</p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full py-10 gap-24 text-center">
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">TECNICAS PARA CEBAR MATE</p>
              <p>Aprender mas </p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">TIPOS DE YERBA</p>
              <p>Aprender mas</p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full py-10 gap-24 text-center">
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">EL MATE EN COMUNIDAD</p>
              <p>Aprender mas</p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
          <div className="relative flex overflow-hidden flex-col text-blanco pointer-events-none">
            <div className="hover:scale-110 transition-all duration-300 pointer-events-auto">
              <img
                src="https://tn.com.ar/resizer/v2/el-dia-nacional-del-mate-se-conmemora-en-homenaje-al-caudillo-andres-guacurari-y-artigas-mas-conocido-como-andresito-foto-adobe-stock-LMJQPS26VZA6BHEUKTQWOII2EU.jpg?auth=d981230f922c03aa8be56f343eae1a8c70188154d6b88babd437eb7f19aa2b1d&width=767"
                height={500}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <p className="text-2xl font-bold">ACCESORIOS ESENCIALES</p>
              <p>Aprender mas</p>
              <Divider className="bg-secundario-300 h-[2px] w-2/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

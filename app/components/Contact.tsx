"use client";
// React
import React from "react";

// NextUI
import {Button, Divider, Input, Textarea} from "@nextui-org/react";

// Utils
import {useWindowSize} from "@/hooks/useWindowSize";

export default function ContactPage() {
  // Hook personalizado para revisar el ancho y alto de la ventana
  const {width} = useWindowSize();

  return (
    <div className="flex flex-col xl:flex-row w-full py-10 justify-around gap-10 px-4 xl:px-56">
      <div className="flex flex-col xl:w-1/2 gap-10">
        <div className="flex flex-col xl:flex-row items-center gap-5 ">
          <h2 className="xl:text-center text-2xl text-primario-300 font-semibold whitespace-nowrap">
            COMUNICATE CON NOSOTROS
          </h2>
          <Divider className="bg-primario-200/25 w-1/2" />
        </div>
        <p className="text-primario-200 font-light ">
          Ante cualquier consulta no dudes en comunicarte. Dejá tus datos y
          consulta utilizando el formulario a continuación y nos contactaremos a
          la brevedad.
        </p>
        <Input
          placeholder="Nombre"
          classNames={{
            inputWrapper:
              "bg-white border-2 border-primario-100 shadow-none rounded-none",
          }}
        />
        <Input
          placeholder="E-mail"
          classNames={{
            inputWrapper:
              "bg-white border-2 border-primario-100 shadow-none rounded-none",
          }}
        />
        <Input
          placeholder="Asunto"
          classNames={{
            inputWrapper:
              "bg-white border-2 border-primario-100 shadow-none rounded-none",
          }}
        />
        <Textarea
          minRows={10}
          placeholder="Mensaje"
          classNames={{
            inputWrapper:
              "bg-white border-2 border-primario-100 shadow-none rounded-none",
          }}
        />
        <Button className="bg-secundario-300 text-blanco rounded-none shadow-none place-self-start text-base font-light">
          ENVIAR
        </Button>
      </div>
      {width > 1280 ? (
        <Divider
          orientation="vertical"
          className="bg-primario-200/25 h-screen"
        />
      ) : null}
      <div className="flex flex-col xl:w-1/2 gap-10">
        <div className="flex flex-row items-center gap-5">
          <h2 className="text-center text-2xl text-primario-300 font-semibold whitespace-nowrap">
            NUESTRAS REDES SOCIALES
          </h2>
          <Divider className="bg-primario-200/25 w-1/2" />
        </div>
        <img
          src="/images/svg/dark-facebook.svg"
          height={80}
          width={80}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/marcosmonaco/tiendademate",
              "_blank"
            )
          }
        />
        <img
          src="/images/svg/dark-instagram.svg"
          height={80}
          width={80}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/marcosmonaco/tiendademate",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

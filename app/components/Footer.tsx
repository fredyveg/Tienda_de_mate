"use client";
// React
import React from "react";

// NextUI
import {Button, Card, CardBody, Chip, Divider, Input} from "@nextui-org/react";
import Link from "next/link";

export default function CustomFooter() {
  return (
    <footer>
      <Card className="rounded-none">
        <CardBody className="flex flex-col bg-primario-500 px-0">
          <div className="flex flex-col xl:flex-row w-full xl:justify-between gap-5 xl:gap-0 py-10 px-4 xl:px-56 text-center xl:text-start">
            <div className="flex flex-col text-center">
              <p className="font-semibold text-inherit text-3xl">TIENDA</p>
              <p className="font-normal text-inherit text-2xl">DE MATE</p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-secundario-300 text-lg font-medium">
                CONTENIDOS
              </h5>
              <Link href="#" className="text-blanco/70 font-extralight">
                Inicio
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Nuestro Mate
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Locales
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Nuestro Menu
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-secundario-300 text-lg font-medium">
                NECESITAS AYUDA
              </h5>
              <Link href="#" className="text-blanco/70 font-extralight">
                Tutoriales
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Trabaja en TDM
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Franquicias
              </Link>
              <Link href="#" className="text-blanco/70 font-extralight">
                Contacto
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-secundario-300 text-lg font-medium">
                SUSCRIBITE A NUESTRO NEWSLETTER
              </h5>
              <div className="flex flex-row">
                <Input
                  className=""
                  classNames={{
                    inputWrapper:
                      "rounded-none bg-primario-500 border-1 border-primario-300 group-data-[hover=true]:bg-primario-300 group-data-[focus=true]:bg-primario-300",
                    input: "font-light",
                  }}
                  placeholder="Tu email"
                />
                <Button className="rounded-none bg-secundario-300">
                  SUSCRIBIRME
                </Button>
              </div>
              <h5 className="text-secundario-300 text-lg font-medium">
                CONECTATE CON NOSOTROS
              </h5>
              <div className="flex flex-row gap-4 justify-center xl:justify-start">
                <div className="bg-primario-200 rounded-full p-1 flex ">
                  <img src="/images/svg/facebook.svg" height={25} width={25} />
                </div>
                <div className="bg-primario-200 rounded-full p-1 flex ">
                  <img src="/images/svg/instagram.svg" height={25} width={25} />
                </div>
              </div>
            </div>
          </div>
          <Divider className="bg-primario-50/25" />
          <div className="flex flex-col text-blanco/70 text-xs font-thin gap-1 pt-4 pb-2 px-4 xl:px-56 text-center xl:text-start">
            <p>© Copyright 2024 Tienda de Mate - Ningun derecho reservado.</p>
            <p>
              Ningun logo, producto, marca y nombre aqui utilizados son
              propiedad registrada. Esto es un proyecto educativo.
            </p>
          </div>
        </CardBody>
      </Card>
    </footer>
  );
}

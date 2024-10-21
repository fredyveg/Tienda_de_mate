"use client";
// React
import React from "react";

// NextUI
import {Card, CardBody, Divider} from "@nextui-org/react";

export default function ProductHighlight() {
  return (
    <footer>
      <Card className="bg-whitesmoke rounded-none shadow-none flex flex-col">
        <CardBody>
          <div className="flex flex-col gap-2 py-2">
            <p className="text-center text-secundario-300 font-light text-lg">
              NUESTRO MATE
            </p>
            <h1 className="text-4xl text-primario-300 font-semibold text-center">
              ¿CUÁL VAS A ELEGIR HOY?
            </h1>
            <Divider className="bg-secundario-300 my-10 w-4/12 xl:w-1/12 self-center h-[2px]" />
            <div className="flex flex-col xl:flex-row gap-10 px-4 xl:px-20 xl:px-56">
              <div className="flex flex-col text-center xl:text-end gap-5">
                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE CLÁSICA
                  </h3>
                  <p className="text-primario-200 font-light">
                    ¡El sabor de la tradición en cada sorbo! Si buscas una
                    experiencia auténtica, la Yerba Mate Clásica es para ti.
                    Perfecta para cualquier momento del día, con el equilibrio
                    ideal de amargor y frescura.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE CON HIERBAS
                  </h3>
                  <p className="text-primario-200 font-light">
                    Un toque herbal para revitalizarte. Esta combinación de
                    yerba mate con hierbas seleccionadas te dará un impulso
                    extra, ideal para comenzar el día con energía renovada y una
                    frescura natural.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE ORGÁNICA
                  </h3>
                  <p className="text-primario-200 font-light">
                    Natural y pura, tal como la naturaleza la ofrece. Cultivada
                    sin pesticidas ni aditivos, esta yerba mate es ideal para
                    quienes buscan un estilo de vida saludable, respetando el
                    medio ambiente en cada mate.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE SUAVE
                  </h3>
                  <p className="text-primario-200 font-light">
                    El equilibrio perfecto entre suavidad y sabor. Disfruta de
                    un mate más suave al paladar sin perder el gusto
                    tradicional. Perfecta para quienes prefieren un mate más
                    ligero pero lleno de sabor.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE ENERGÉTICA
                  </h3>
                  <p className="text-primario-200 font-light">
                    ¡Poder en cada sorbo! Ideal para los que buscan un impulso
                    extra en su día, esta yerba está diseñada para darte energía
                    y concentración, sin dejar de lado el sabor tradicional.
                  </p>
                </div>
              </div>
              <img
                src="https://elboyero.com/16118-large_default/mate-artesanal-diseno-flores-y-hojas-el-boyero.jpg"
                className="xl:h-[650px] xl:w-[650px] bg-cover"
              />
              <div className="flex flex-col gap-5 text-center xl:text-start">
                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE CON MENTA
                  </h3>
                  <p className="text-primario-200 font-light">
                    Refrescante y vigorizante. La frescura de la menta se
                    combina a la perfección con la yerba mate, creando una
                    mezcla perfecta para disfrutar en días calurosos o para
                    refrescar tu mente.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE CON LIMÓN
                  </h3>
                  <p className="text-primario-200 font-light">
                    Ácido, refrescante y único. El toque cítrico del limón
                    aporta una nueva dimensión de frescura a tu mate, haciéndolo
                    la elección perfecta para quienes disfrutan de sabores
                    vibrantes y refrescantes.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE DESPALADA
                  </h3>
                  <p className="text-primario-200 font-light">
                    Pura, intensa y sin palos. Esta yerba mate está compuesta
                    exclusivamente por hojas, lo que le otorga un sabor más
                    fuerte e intenso. Ideal para los amantes de un mate puro y
                    poderoso.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE CON JENGIBRE
                  </h3>
                  <p className="text-primario-200 font-light">
                    Picante y energizante. Una combinación única de yerba mate
                    con el toque picante del jengibre, perfecta para quienes
                    buscan una bebida revitalizante y llena de sabor.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-secundario-300 text-2xl">
                    YERBA MATE AHUMADA
                  </h3>
                  <p className="text-primario-200 font-light">
                    Una experiencia de sabor intensa. Con un sabor robusto y
                    ahumado, esta yerba mate es ideal para aquellos que buscan
                    una experiencia más profunda y compleja en cada mate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </footer>
  );
}

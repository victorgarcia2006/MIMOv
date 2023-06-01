import React from "react";
import Proceso from "./process";

const ProcesoSection = () => {
  const section = [
    {
      title: "Planeacion",
      description:
        "El desarrollo del peluche se dio basándonos en una plantilla de internet, a la cual se le modificaron algunas medidas, permitiendo que las medidas del peluche se adecuarán a las del circuito. ",
      imagen:
        "images/planos.png",
    },
    {
      title: "Plantillas",
      description:
        "El desarrollo del cuerpo se hizo por partes, para la cabeza fue necesario tomar en cuenta las medidas de la pantalla de leds, que era de 8x8, asimismo se le adicionaron algunos centímetros a cada lado para que la cabeza tuviera un poco de profundidad; para hacer la parte de las piernas también se modificaron las medidas originales, se redujeron al menos dos centímetros de la plantilla original. ",
      imagen:
        "images/planos3.png",
    },
    {
      title: "Desarrollo",
      description:
        "El desarrollo del cuerpo se hizo por partes, para la cabeza fue necesario tomar en cuenta las medidas de la pantalla de leds, que era de 8x8, asimismo se le adicionaron algunos centímetros a cada lado para que la cabeza tuviera un poco de profundidad; para hacer la parte de las piernas también se modificaron las medidas originales, se redujeron al menos dos centímetros de la plantilla original.",
      imagen:
        "images/proceso.jpg",
    },
    {
      title: "Terminado",
      description:
        "Cabe señalar qué el desarrollo del peluche se hizo por partes, para que se le diera una forma más definida y se dejarán los espacios para que el circuito estuviera interconectado, asimismo se le implementó un cierre en la parte de atrás para que el circuito pudiera ser cargado y se pudiera poner el relleno. ",
      imagen:
        "images/mimoterminado.jpg",
    },
  ];

  return (
    <section>
      <div>
        <div className="">
          <h2 className="text-center">Proceso del modelado</h2>
        </div>
        <div className="grid grid-cols-2 ">
            {section.map((section, index) => (
                <div key={index}>
                    <Proceso
                        subtitulo={section.title}
                        texto={section.description}
                        imagen={section.imagen}
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcesoSection;

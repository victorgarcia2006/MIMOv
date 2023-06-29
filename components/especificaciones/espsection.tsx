import React from "react";
import DiagramaSection from "./seccion/diagrama";
import ComponentesSection from "./seccion/componentes";
import CircuitoSection from "./seccion/circuito";


const EspSection = () => {
  const diagrama = {
    titulo: "Diagrama del circuito",
    imagen: "/images/diagrama.jpg",
  };

  return (
    <section className="bg-white">
      <div className="flex max-2xl:flex-col">
        <div>
          <DiagramaSection titulo={diagrama.titulo} imagen={diagrama.imagen} />
        </div>
        <div>
          <ComponentesSection />
        </div>
      </div>
      <CircuitoSection />
    </section>
  );
};

export default EspSection;

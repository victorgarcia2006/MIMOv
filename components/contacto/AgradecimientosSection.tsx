import React from "react";
import AgradecimientosBase from "./agradecimientosBase";

const AgradecimientosSection = () => {
  const agradecimientos = [
    {
      titulo: "Diseño y desarrollo del peluche",
      personas: [
        "Anette Paola Almaraz Castro",
        "Camila Jaramillo Carrillo",
        "Andrea Montañez Lopez",
      ],
    },
    {
      titulo: "Diseño, desarrollo y programación del circuito del peluche",
      personas: [
        "Emiliano Ramos Najera",
        "Juan Rodrigo Herrera Rodriguez",
        "Luis Alberto Vazquez Martinez",
        "Diego Villa Durán",
        "Víctor Alfredo García Calvillo",
        "Daniela Fernanda Meneses Díaz de León",
      ],
    },
    {
      titulo: "Vendimia",
      personas: [
        "Tlaloc Cuauhtémoc Mejía Rodríguez",
        "Emiliano Pacheco Olvera",
        "Pablo Troncoso Sánchez",
        "Bruno López Marin",
        "María Fernanda Soriano López",
        "Víctor Eduardo Rodríguez Lechuga",
        "Carlos Eduardo Escareño Gomez",
      ],
    },
    {
      titulo: "Documentación",
      personas: [
        "Zeus Hernández Palos",
        "Daniel Zaid Berumen Rocha",
        "Alejandra Guadalupe Ortiz Villasana",
        "Daniel Alejandro Montoya Montoya",
      ],
    },
    {
      titulo: "Publicidad",
      personas: ["Camila Castanedo Carrillo"],
    },
    {
      titulo: "Desarrollo de la página web",
      personas: ["Víctor Alfredo García Calvillo"],
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center my-10">
        <h2 className=" text-black">Agradecimientos</h2>
        <div className="grid grid-cols-2 gap-x-60 max-xl:flex max-xl:flex-col max-xl:gap-y-10 max-xl:ml-5">
          {agradecimientos.map((agradecimientos, index) => (
            <div key={index}>
              <AgradecimientosBase
                titulo={agradecimientos.titulo}
                personas={agradecimientos.personas}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgradecimientosSection;

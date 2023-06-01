import { Inter } from "next/font/google";
import Boton from "./Boton";
import Slider2 from "./Slider2";
import { Button } from "@mantine/core";

interface DiseñoProps {
  subtitulo: string;
  texto: string;
}

function Diseño({ subtitulo, texto }: DiseñoProps) {
  return (
    <div>
      <div className="bg-white px-40 py-40 flex flex-row-reverse justify-between items-center">
        <div>
          <h2>{subtitulo}</h2>
          <p className="text-black w-80 py-6">{texto}</p>
          <Button component="a" href="/Diseno">See More</Button>
        </div>
        <Slider2
          imagenes={["images/planos.png","images/planos2.png","images/planos3.png", "images/proceso.jpg", "images/mimoterminado.jpg"]}
        /> 
      </div>
    </div>
  );
}

export default Diseño;

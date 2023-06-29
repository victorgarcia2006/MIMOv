import { Inter } from "next/font/google";
import Boton from "./Boton";
import Slider from "./Slider";
import { Button } from "@mantine/core";

interface EspecificacionesProps {
  subtitulo: string;
  texto: string;
}

function Especificaciones({ subtitulo, texto }: EspecificacionesProps) {
  return (
    <div>
      <div className="bg-white w-full px-40 py-40 flex justify-between items-center max-2xl:flex-col-reverse">
        <div>
          <h2>{subtitulo}</h2>
          <p className="text-black text-justify w-80 py-6 max-2xl:w-96">{texto}</p>
          <div className="flex max-2xl:justify-center">
            <Button component="a" href="/Especificaciones">
              See More
            </Button>
          </div>
        </div>
        <div>
          <div>
            <Slider
              imagenes={[
                "images/diagrama.jpg",
                "images/circuito1.jpg",
                "images/circuito2.jpg",
                "images/circuito3.jpg",
                "images/circuito4.jpg",
                "images/circuito5.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Especificaciones;

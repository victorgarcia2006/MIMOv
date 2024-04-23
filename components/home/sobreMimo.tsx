import { Inter } from "next/font/google";
import Boton from "./Boton";
import Slider from "./Slider";
import { Button } from "@mantine/core";

interface SobreMimoProps {
  subtitulo: string;
  texto: string;
}

function SobreMimo({ subtitulo, texto }: SobreMimoProps) {
  return (
    <div>
      <div className="bg-white w-full px-40 py-40 flex justify-between items-center max-md:flex-col-reverse max-2xl:flex-col-reverse">
        <div className="">
          <h2>{subtitulo}</h2>
          <p className="text-black w-96 text-justify max-[500px]:w-72 text-lg">{texto}</p>
          <div className="max-2xl:flex max-2xl:justify-center">
            <Button component="a" href="/SobreMimo">
              Ver más
            </Button>
          </div>
        </div>
        <div className="">
          <Slider
            imagenes={[
              "images/newmimo5.jpg",
              "images/newmimo4.jpg",
              "images/newmimo3.jpg",
              "images/newmimo2.jpg",
              "images/newmimo1.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SobreMimo;

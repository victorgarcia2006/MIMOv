import { Inter } from "next/font/google";
import Boton from "./Boton";
import Slider from "./Slider";
import { Button } from "@mantine/core";

interface SobreMimoProps {
  subtitulo: string;
  texto: string;
  imagem: string;
}

function SobreMimo({ subtitulo, texto, imagem }: SobreMimoProps) {
  return (
    <div>
      <div className="bg-white w-full px-40 py-40 flex justify-between items-center">
        <div>
          <h2>{subtitulo}</h2>
          <p className="text-black w-96  text-justify">{texto}</p>
          <Button component="a" href="/SobreMimo">See More</Button>
        </div>
        <div className="">
          <Slider
            imagenes={["images/mimo5.jpg", "images/mimo6.jpg", "images/mimo7.jpg", "images/mimo8.jpg"]}
          />
        </div>
      </div>
    </div>
  );
}

export default SobreMimo;
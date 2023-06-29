import { Inter } from "next/font/google";
import React from "react";
import Boton from "../home/Boton";
import { Button } from "@mantine/core";


interface especificacionesHeadProps {
  titulo: string;
  descripcion: string;
}

function EspecificacionesHead({ titulo, descripcion }: especificacionesHeadProps) {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover px-40 flex items-center justify-center max-2xl:bg-[center_top_0rem]">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-5xl">{titulo}</h1>
          <p className="py-12 text-white">{descripcion}</p>
          <div className="flex justify-center">
          <Button component="a" href="https://www.youtube.com/@MIMO-ko2pf" target="_blank" >See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EspecificacionesHead;
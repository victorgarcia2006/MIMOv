import React from "react";
import { useMantineTheme } from "@mantine/core";

interface cabezeraProps {
  titulo: string;
  descripcion: string;
}

function Cabezera({ titulo, descripcion }: cabezeraProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <div className="w-auto h-screen bg-fixed bg-[url('/images/newmimo.jpg')] bg-[center_-20rem] bg-cover px-40 flex items-center max-2xl:bg-[center_top_0rem] max-[500px]:px-10">
        <div>
          <h1 className="text-5xl">{titulo}</h1>
          <p className="w-96 py-6 text-white text-justify max-[500px]:w-72 text-lg">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default Cabezera;

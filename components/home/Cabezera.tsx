import { Inter } from "next/font/google";

interface cabezeraProps {
  titulo: string;
  descripcion: string;
}

function Cabezera({ titulo, descripcion }: cabezeraProps) {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover px-40 flex items-center">
        <div>
          <h1 className="text-5xl">{titulo}</h1>
          <p className="w-96 py-6 text-white text-justify">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default Cabezera;

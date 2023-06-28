import ImagesHead from "@/components/sobremimo/ImagesHead";

interface cabezeraMimoProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

function CabezeraMimo({ titulo, descripcion, imagen }: cabezeraMimoProps) {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover flex items-start justify-center py-20">
        <div className="">
          <h1 className="text-center text-5xl">{titulo}</h1>
          <p className="py-5 mx-72 text-center text-white">{descripcion}</p>
          <ImagesHead></ImagesHead>
        </div>
      </div>
    </div>
  );
}

export default CabezeraMimo;
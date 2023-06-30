import ImagesHead from "@/components/sobremimo/ImagesHead";

interface cabezeraMimoProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

function CabezeraMimo({ titulo, descripcion, imagen }: cabezeraMimoProps) {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover flex items-start justify-center py-10 max-2xl:bg-[center_top_0rem] max-xl:py:5">
        <div className="">
          <h1 className="text-center text-5xl">{titulo}</h1>
          <p className="py-5 mx-72 text-center text-white max-xl:w-80 max-xl:py-1 max-sm:text-sm">{descripcion}</p>
          <ImagesHead></ImagesHead>
        </div>
      </div>
    </div>
  );
}

export default CabezeraMimo;
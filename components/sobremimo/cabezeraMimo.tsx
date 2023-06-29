import ImagesHead from "@/components/sobremimo/ImagesHead";

interface cabezeraMimoProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

function CabezeraMimo({ titulo, descripcion, imagen }: cabezeraMimoProps) {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover flex items-start justify-center py-20 max-2xl:bg-[center_top_0rem]">
        <div className="">
          <h1 className="text-center text-5xl">{titulo}</h1>
          <p className="py-5 mx-72 text-center text-white max-xl:w-96 max-xl:py-1">{descripcion}</p>
          <ImagesHead></ImagesHead>
        </div>
      </div>
    </div>
  );
}

export default CabezeraMimo;
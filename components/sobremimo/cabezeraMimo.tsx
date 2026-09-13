import Image from "next/image";

interface cabezeraMimoProps {
  titulo: string;
  descripcion: string;
}

function CabezeraMimo({ titulo, descripcion }: cabezeraMimoProps) {
  return (
    <div className="bg-base pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem]">
            <div className="absolute -inset-4 bg-secondary rounded-[2.5rem] -z-10" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/mimo-perfil.jpeg"
                alt="MIMO de perfil"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-6 order-1 md:order-2 text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-heading text-4xl md:text-5xl text-ink">{titulo}</h1>
          <p className="font-body text-ink-muted text-lg max-w-md">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default CabezeraMimo;

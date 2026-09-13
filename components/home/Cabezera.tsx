import Image from "next/image";
import Link from "next/link";

interface cabezeraProps {
  titulo: string;
  descripcion: string;
}

function Cabezera({ titulo, descripcion }: cabezeraProps) {
  return (
    <div className="bg-base pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="font-heading text-5xl md:text-6xl text-ink">{titulo}</h1>
          <p className="font-body text-ink-muted text-lg max-w-md">{descripcion}</p>
          <Link
            href="/SobreMimo"
            className="font-heading font-semibold rounded-full bg-primary text-white px-7 py-3 hover:bg-primary-dark transition-colors no-underline"
          >
            Conoce a MIMO
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem]">
            <div className="absolute -inset-4 bg-primary-light rounded-[2.5rem] -z-10" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/mimo-frontal.jpeg"
                alt="MIMO, el peluche interactivo"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabezera;

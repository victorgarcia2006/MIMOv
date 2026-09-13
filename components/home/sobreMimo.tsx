import Image from "next/image";
import { Button } from "@mantine/core";

interface SobreMimoProps {
  subtitulo: string;
  texto: string;
}

function SobreMimo({ subtitulo, texto }: SobreMimoProps) {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src="/images/mimo-perfil.jpeg"
              alt="MIMO visto de perfil"
              fill
              sizes="(max-width: 768px) 224px, 256px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-5">
          <h2 className="font-heading text-3xl text-ink">{subtitulo}</h2>
          <p className="font-body text-ink-muted text-lg max-w-md">{texto}</p>
          <Button component="a" href="/SobreMimo" radius="xl" color="mimo-blue">
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SobreMimo;

import { Card, Group, Image } from "@mantine/core";

interface ProcesoProps {
  subtitulo: string;
  texto: string;
  imagen: string;
}

function Proceso({ subtitulo, texto, imagen }: ProcesoProps) {
  return (
    <Card
      className="flex justify-center items-center w-[500px] h-[700px] max-xl:w-80"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={imagen} alt="" className="" height={400} />
      </Card.Section>

      <Group>
        <div className="text-center">
          <h3>{subtitulo}</h3>
        </div>
        <p className="text-justify">{texto}</p>
      </Group>
    </Card>
  );
}

export default Proceso;

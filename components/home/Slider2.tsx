import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";	

interface Slider2Props {
  imagenes: string[];
}

function Slider2({ imagenes }: Slider2Props) {
  const slices = imagenes.map((imagen) => (
    <Carousel.Slide key={imagen} gap="xs" className="flex items-center justify-center">
      <Image src={imagen} alt="" width={160} height={160} radius={20} className="w-40 h-40 rounded-3xl object-cover" />
    </Carousel.Slide>
  ));
  return (
    <div className="bg-[#95BCEC] rounded-3xl">
      <Carousel
              className="m-5"
              withIndicators
              w={600}
              height={256}
              loop
              align="center"
              slideSize="33.333333%"
              
      >
        {slices}
      </Carousel>
    </div>
  );
}

export default Slider2;

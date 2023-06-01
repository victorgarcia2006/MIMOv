import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface SliderEspProps {
  imagenes: string[];
}

function SliderEsp({ imagenes }: SliderEspProps) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = imagenes.map((imagen) => (
    <Carousel.Slide key={imagen}>
      <img
        src={imagen}
        alt=""
        className="w-[600px] h-[600px] rounded-3xl mt-10"
      />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      mx="auto"
      withIndicators
      slideSize="100%"
      loop
      w={600}
      height={680}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}

export default SliderEsp;

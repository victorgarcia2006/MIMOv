import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@mantine/core";

interface SliderProps {
  imagenes: string[];
}

function Slider({ imagenes }: SliderProps) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = imagenes.map((imagen) => (
    <Carousel.Slide key={imagen}>
      <Image
        src={imagen}
        alt=""
        width={500}
        height={640}
        className="mt-10 object-cover absolute top-0 left-0 right-0 bottom-0 mx-auto"
        radius="xl"
      />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      mx="auto"
      withIndicators
      slideSize="100%"
      loop
      w={500}
      height={720}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className="relative"
    >
      {slides}
    </Carousel>
  );
}

export default Slider;

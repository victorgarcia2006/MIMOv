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
        width={600}
        height={500}
        className="w-[600px] h-[500px] rounded-3xl mt-10 object-cover absolute "
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
      height={540}
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

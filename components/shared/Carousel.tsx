import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import Image from "next/image";
import { ActionIcon } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export interface CarouselItem {
  imagen: string;
  etiqueta: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const SWIPE_THRESHOLD = 40;

function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (items.length === 0) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) goPrev();
    else if (deltaX < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  const current = items[index];

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-secondary"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={current.imagen}
          alt={current.etiqueta}
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          style={{ objectFit: "cover" }}
        />

        <ActionIcon
          aria-label="Anterior"
          onClick={goPrev}
          radius="xl"
          size="xl"
          variant="filled"
          className="!absolute left-3 top-1/2 -translate-y-1/2"
        >
          <IconChevronLeft />
        </ActionIcon>
        <ActionIcon
          aria-label="Siguiente"
          onClick={goNext}
          radius="xl"
          size="xl"
          variant="filled"
          className="!absolute right-3 top-1/2 -translate-y-1/2"
        >
          <IconChevronRight />
        </ActionIcon>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {items.map((item, i) => (
          <button
            key={item.imagen}
            type="button"
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-3 w-3 rounded-full transition-colors " +
              (i === index ? "bg-primary" : "bg-primary-light")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

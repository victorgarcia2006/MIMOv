import React from "react";
import HeadImg from "./headImg";
import { Carousel } from "@mantine/carousel";

const ImagesHead = () => {
  const img = [
    {
      src: "images/mimofeliz.jpg",
    },
    {
      src: "images/mimotriste.jpg",
    },
    {
      src: "images/mimoenojado.jpg",
    },
    {
      src: "images/mimoangustia.jpg",
    },
  ];

  return (
    <section>
      <div className="flex flex-row items-center justify-center py-20 max-xl:grid max-xl:grid-cols-2 max-xl:w-96 max-xl:h-60 max-xl:ml-72 max-xl:py-0">
        {img.map((img, index) => (
          <div key={index}>
            <HeadImg image={img.src} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesHead;

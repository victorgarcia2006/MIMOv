import React from "react";
import { Inter } from "next/font/google";
import HeadImg from "./headImg";

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
        <div className="flex flex-row items-center justify-center py-20">
            {img.map((img, index) => (
                <div key={index}>
                    <HeadImg
                        image={img.src}
                    />
                </div>
            ))}
        </div>
    </section>
  );
};

export default ImagesHead;
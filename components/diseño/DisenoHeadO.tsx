import React from "react";
import HeadImg from "../sobremimo/headImg";

const DisenoHeadO = () => {
  const img = [
    {
      src: "images/planos.png",
    },
    {
      src: "images/planos2.png",
    },
    {
      src: "images/planos3.png",
    },
  ];
  return (
    <section>
      <div>
        <div className="w-full h-2/3 bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover px-40 flex items-start justify-center text-center flex-col absolute max-2xl:bg-[center_top_0rem]">
          <div>
            <h1 className="text-5xl">Diseño de MIMO</h1>
            <p className="py-6 text-white ">
            Para el desarrollo del peluche se optó por utilizar una tela con textura suave y color azul, 
            sin embargo este es meramente representativo ya que es el color asociado al autismo. {" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end justify-center bg-transparent relative pt-[440px] pb-20">
          {img.map((img, index) => (
            <div key={index}>
              <HeadImg image={img.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisenoHeadO;

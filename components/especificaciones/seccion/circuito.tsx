import React from "react";
import SliderEsp from "../sliderEsp";


export default function CircuitoSection() {
  return (
    <div className="flex flex-row items-center justify-around max-xl:flex-col max-xl:gap-20">
      <div className="flex flex-col justify-center items-center text-center max-xl:text-start max-xl:items-start">
        <h2 className="w-80 max-2xl:w-full">Proceso de pruebas y cableado </h2>
        <SliderEsp
          imagenes={[
            "/images/especificaciones/proceso1.jpg",
            "/images/especificaciones/proceso2.jpg",
            "/images/especificaciones/proceso3.jpg",
            "images/especificaciones/proceso4.jpg",
            "images/especificaciones/proceso5.jpg",
            "images/especificaciones/proceso6.jpg",
            "images/especificaciones/proceso7.jpg",
            "images/especificaciones/proceso8.jpg",
            "images/especificaciones/proceso9.jpg",
            "images/especificaciones/proceso10.jpg",
            "images/especificaciones/proceso11.jpg",
            "images/especificaciones/proceso12.jpg",
          ]}
        />
      </div>
      <div className="flex flex-col items-center justify-start text-center max-xl:text-start max-xl:items-start">
        <h2 className="w-80 max-2xl:w-full">Circuito por dentro del peluche </h2>
        <div>
          <img
            src="images/circuito2.jpg"
            alt=""
            className="w-[600px] h-[600px] rounded-xl mt-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

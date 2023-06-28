import React from "react";
import { Carousel } from "@mantine/carousel";
import SliderComponentes from "./sliderComponentes";


const ComponentsSection = () => {
  const components = [
    {
      imagen: "images/Arduino UNO.png",
      titulo: "Arduino UNO",
      descripcion: 
        "Placa basada en el microcontrolador ATmega328p capaz de grabar instrucciones en él mediante su lenguaje de programación basado en C, también posee entradas análogicas y deigitales para la recepción de señales",
    },
    {
      imagen: "images/button.png",
      titulo: "Botón",
      descripcion:
        "Interruptor/switch cuya función es permitir o interrumpor el paso de la corriente eléctrica de manera momentánea",
    },
    {
      imagen: "images/matriz.png",
      titulo: "Matriz de LED",
      descripcion:
        "Módulo compatible con Arduino compuesta por 64 leds de Neopixel los cuales pueden alcanzar 256 niveles de brillo el cual es regulable y maneja diversos colores bajo el Código RGB.",
    },
    {
      imagen: "images/buzzer.png",
      titulo: "Buzzer",
      descripcion:
        "También conocido cómo zumbador, es un trasductor que convierte la energía eléctrica en sonido",
    },
    {
      imagen: "images/vibrador.png",
      titulo: "Motor Vibrador",
      descripcion:
        "Motor que conduce alta velocidad giratoria (12,000 rpm) excéntrica produciento vibración",
    },
    {
      imagen: "images/resistencia.png",
      titulo: "Resistencias",
      descripcion:
        "Componente pásivo que genera cierta oposición al flujo de la corriente dependiendo de su valor",
    },
    {
      imagen: "images/alambre.png",
      titulo: "Alambre estañado",
      descripcion:
        "Alambre de cobre recubierto con una fina capa de estaño con el fin de protegerlo de la corrosion.",
    },
    {
      imagen: "images/soldadura.png",
      titulo: "Soldadura",
      descripcion:
        "Aleación de estaño y plomo insoluble al agua el cual sirve para unir 2 componentes con el fin de garantizar la conductividad eléctrica.",
    },
    {
      imagen: "images/termofit.png",
      titulo: "Termofit",
      descripcion:
        "Aleación de estaño y plomo insoluble al agua el cual sirve para unir 2 componentes con el fin de garantizar la conductividad eléctrica.",
    },
    {
      imagen: "images/jumpers.png",
      titulo: "Jumpers",
      descripcion:
        "Conectores de tipo dupont en sus extremos diseñados para conectarse a los conectores tipos header, pines de placas cómo Arduino, etc..",
    },
  ];
  return (
    <div className="px-20 py-10">
      <h2>Componentes</h2>
      <Carousel
        withControls
        withIndicators
        loop
        align="start"
        orientation="vertical"
        height={620}
      >
        {components.map((component, index) => (
          <div key={index}>
            <SliderComponentes
              imagen={component.imagen}
              title={component.titulo}
              description={component.descripcion}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ComponentsSection;

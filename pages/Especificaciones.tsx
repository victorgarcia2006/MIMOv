import BarraMenu from "../components/home/Barra";
import React from "react";
import EspecificacionesHead from "@/components/especificaciones/especificacionesHead";
import EspSection from "@/components/especificaciones/espsection";

export default function Especificaciones() {
    return (
        <main>
            <BarraMenu></BarraMenu>
            <EspecificacionesHead
                titulo="Especificaciones de MIMO"
                descripcion="¿Cómo es que funciona esta herramienta? 
                Posee un botón en cada extremidad del peluche los cuales 
                accionan una matriz de leds 8 x 8 en la que se dibujan las 
                emociones, el el pecho posee un botón en especial para los
                momentos de crisis ya que activan 2 motores vibradores de 
                12,000 rpm cada uno; suficiente para producir un efecto de 
                relajación durante un determinado periodo de tiempo. Cada 
                que se pulse un botón un buzzer emitirá un pequeño sonido 
                con el fin de notificar el cambio de emoción.
                "
            />
            <EspSection></EspSection>
        </main>
    );
}
import BarraMenu from "../components/home/Barra";
import React from "react";
import ContactoHead from "@/components/contacto/contactoHead";
import SiguenosSection from "@/components/contacto/siguenosSection";
import AgradecimientosSection from "@/components/contacto/AgradecimientosSection";

export default function Contacto() {
    return (
        <main>
            <BarraMenu/>
            <ContactoHead/>
            <AgradecimientosSection/>
            <SiguenosSection/>
        </main>
    );
};
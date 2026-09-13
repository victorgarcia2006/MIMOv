import BarraMenu from "../components/home/Barra";
import React from "react";
import ContactoHead from "@/components/contacto/contactoHead";
import ContactForm from "@/components/contacto/ContactForm";
import SiguenosSection from "@/components/contacto/siguenosSection";
import Seo from "@/components/Seo";

export default function Contacto() {
    return (
        <>
        <Seo
            title="Contacto — MIMO, peluche interactivo para el desarrollo emocional"
            description="Escríbenos o conoce al equipo detrás de MIMO, el peluche interactivo que acompaña el desarrollo socioemocional de niños de 4 a 8 años en su día a día."
            path="/Contacto"
        />
        <main>
            <BarraMenu/>
            <ContactoHead/>
            <ContactForm/>
            <SiguenosSection/>
        </main>
        </>
    );
};
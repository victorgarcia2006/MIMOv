import BarraMenu from "../components/home/Barra";
import React from "react";
import ContactoHead from "@/components/contacto/contactoHead";
import ContactForm from "@/components/contacto/ContactForm";
import SiguenosSection from "@/components/contacto/siguenosSection";

export default function Contacto() {
    return (
        <main>
            <BarraMenu/>
            <ContactoHead/>
            <ContactForm/>
            <SiguenosSection/>
        </main>
    );
};
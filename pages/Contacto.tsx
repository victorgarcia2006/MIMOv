import { Inter } from "next/font/google";
import BarraMenu from "../components/home/Barra";
import React from "react";
import ContactoHead from "@/components/contacto/contactoHead";
import SiguenosSection from "@/components/contacto/siguenosSection";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
    return (
        <main>
            <BarraMenu/>
            <ContactoHead/>
            <SiguenosSection/>
        </main>
    );
};
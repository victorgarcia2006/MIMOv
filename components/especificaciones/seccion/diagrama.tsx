import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";

interface diagramaSectionProps {
    titulo: string;
    imagen: string;
}

function DiagramaSection({ titulo, imagen }: diagramaSectionProps) {
    return (
        <aside className="px-20 py-10 flex flex-col max-2xl:items-center">
            <h2>{titulo}</h2>
            <img src={imagen} alt="" className="w-[600px] h-[600px] rounded-xl mt-10" />
        </aside>
    );
}

export default DiagramaSection;
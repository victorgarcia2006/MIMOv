import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const SiguenosSection = () => {
  const siguenos = [
    {
      imagen: "images/github.webp",
      texto: "GitHub",
      href: "https://github.com/victorgarcia2006/MIMO.git",
    },
    {
      imagen: "images/instagram.webp",
      texto: "Instagram",
      href: "https://www.instagram.com/mimo.ipn/",
    },
    
  ];
  return (
    <section>
      <h2 className="text-center">¡SÍGUENOS!</h2>
      <div className="grid grid-cols-2">
        {siguenos.map((siguenos, index) => (
          <div key={index}>
            <div className="flex justify-around">
              <div className="flex items-center justify-start my-10">
                <img
                  src={siguenos.imagen}
                  alt={siguenos.texto}
                  className="w-12 h-12 object-cover mx-2"
                />
                <Link href={siguenos.href} target="_blank" className="no-underline"><h3 className="flex items-center justify-center">{siguenos.texto}</h3></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SiguenosSection;

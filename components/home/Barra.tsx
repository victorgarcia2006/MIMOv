import React from "react";
import Bar from "./barra/Bar";
import Link from "next/link";
import { Header } from "@mantine/core";

const BarraMenu = () => {
  const sections = [
    {
      sectionName: "Sobre MIMO",
      href: "/SobreMimo",
    },
    {
      sectionName: "Diseño",
      href: "/Diseno",
    },
    {
      sectionName: "Especificaciones",
      href: "/Especificaciones",
    },
    {
      sectionName: "Contacto",
      href: "/Contacto",
    },
  ];

  return (
    <Header height={64}>
      <div className="bg-[#95BCEC] w-full h-16 flex items-center justify-between">
        <Link href="/">
          <img src="images/logo.png" alt="" className="w-16 h-16 mx-10" />
        </Link>
        <div className="flex ml-20">
          {sections.map((sections, index) => (
            <div key={index}>
              <div>
                <Bar section={sections.sectionName} href={sections.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Header>
  );

  return <section></section>;
};

export default BarraMenu;

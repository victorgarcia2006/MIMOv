import BarraMenu from "../components/home/Barra";
import React from "react";
import DisenoHeadO from "@/components/diseño/DisenoHeadO";
import ProcesoSection from "@/components/diseño/ProcesoSection";


export default function Diseno() {
  return (
    <main>
      <BarraMenu></BarraMenu>
      <DisenoHeadO />
      <ProcesoSection/>
    </main>
  );
}

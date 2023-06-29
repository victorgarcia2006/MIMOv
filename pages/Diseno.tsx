import BarraMenu from "../components/home/Barra";
import React from "react";
import DisenoHeadO from "@/components/diseño/DisenoHeadO";
import ProcesoSection from "@/components/diseño/ProcesoSection";
import { AppShell } from "@mantine/core";


export default function Diseno() {
  return (
    <AppShell
      header={<BarraMenu/>}
      padding={0}
    >
      <DisenoHeadO />
      <ProcesoSection/>
    </AppShell>
  );
}

import BarraMenu from "../components/home/Barra";
import Cabezera from "../components/home/Cabezera";
import SobreMimo from "../components/home/sobreMimo";
import VisionMision from '../components/home/visionmision';
import Seo from "@/components/Seo";
import { AppShell } from "@mantine/core";

export default function Home() {
  return (
    <>
    <Seo
      title="MIMO — Peluche interactivo para el desarrollo socioemocional infantil"
      description="MIMO es un peluche interactivo que ayuda a niños de 4 a 8 años a reconocer, nombrar y comprender sus emociones, con rostro expresivo, vibración y tarjetas."
      path="/"
    />
    <AppShell header={<BarraMenu />} padding={0}>
      <Cabezera
        titulo="MIMO"
        descripcion="MIMO es un peluche interactivo que acompaña el desarrollo socioemocional
        de niños de 4 a 8 años. A través de un rostro expresivo, vibración y tarjetas físicas,
        ayuda a que los niños reconozcan, nombren y comprendan lo que sienten — a su propio ritmo."
      />
      <SobreMimo
        subtitulo="Sobre MIMO"
        texto="MIMO es un peluche interactivo que acompaña el desarrollo socioemocional
        de niños de 4 a 8 años. A través de un rostro expresivo, vibración y tarjetas físicas,
        ayuda a que los niños reconozcan, nombren y comprendan lo que sienten — a su propio ritmo."
      />
      <VisionMision />
    </AppShell>
    </>
  );
}

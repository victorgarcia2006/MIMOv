import BarraMenu from "../components/home/Barra";
import Cabezera from "../components/home/Cabezera";
import SobreMimo from "../components/home/sobreMimo";
import VisionMision from '../components/home/visionmision';
import { AppShell } from "@mantine/core";

export default function Home() {
  return (
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
  );
}

import BarraMenu from "../components/home/Barra";
import CabezeraMimo from "@/components/sobremimo/cabezeraMimo";
import AutismoSection from "@/components/sobremimo/AutismoSection";
import { AppShell } from "@mantine/core";

export default function SobreMimo() {
    return(
        <AppShell
            header={<BarraMenu/>}
            padding={0}
        >
            <CabezeraMimo
                titulo = "¿Quién es MIMO?"
                descripcion="MIMO es un peluche interactivo que acompaña el desarrollo socioemocional
                de niños de 4 a 8 años. A través de un rostro expresivo, vibración y tarjetas físicas,
                ayuda a que los niños reconozcan, nombren y comprendan lo que sienten — a su propio ritmo."
            />
            <AutismoSection></AutismoSection>
        </AppShell>
    );
}
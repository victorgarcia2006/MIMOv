import BarraMenu from "../components/home/Barra";
import CabezeraMimo from "@/components/sobremimo/cabezeraMimo";
import AutismoSection from "@/components/sobremimo/AutismoSection";
import RespaldoSection from "@/components/sobremimo/RespaldoSection";
import Carousel from "@/components/shared/Carousel";
import { carouselItems } from "@/components/sobremimo/carouselData";
import Seo from "@/components/Seo";
import { AppShell } from "@mantine/core";
import Link from "next/link";

export default function SobreMimo() {
    return(
        <>
        <Seo
            title="¿Quién es MIMO? — Peluche interactivo para niños"
            description="Conoce a MIMO: un peluche interactivo para el desarrollo socioemocional infantil, con un motor de actividades que se adapta al ritmo de cada niño, a su manera."
            path="/SobreMimo"
        />
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
            <section className="bg-secondary py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <Carousel items={carouselItems} />
                </div>
            </section>
            <RespaldoSection />
            <AutismoSection></AutismoSection>
            <section className="bg-base py-16 md:py-20 text-center">
                <div className="max-w-xl mx-auto px-6">
                    <h2 className="font-heading text-xl text-ink">¿Buscas un resumen rápido?</h2>
                    <p className="font-body text-ink-muted text-sm mt-2">
                        Un resumen ejecutivo de una página con el problema, la solución y el respaldo de MIMO.
                    </p>
                    <Link
                        href="/resumen-ejecutivo"
                        className="inline-block mt-5 font-heading font-semibold rounded-full border-2 border-primary text-primary px-6 py-3 hover:bg-primary-light transition-colors no-underline"
                    >
                        Descargar PDF
                    </Link>
                </div>
            </section>
        </AppShell>
        </>
    );
}
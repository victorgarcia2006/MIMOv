import BarraMenu from "../components/home/Barra";
import CabezeraMimo from "@/components/sobremimo/cabezeraMimo";
import AutismoSection from "@/components/sobremimo/AutismoSection";
import VideoSection from "@/components/sobremimo/Video";

export default function SobreMimo() {
    return(
        <main>
            <BarraMenu></BarraMenu>
            <CabezeraMimo
                titulo = "¿Quien es MIMO?"
                descripcion="MIMO, es una herramienta que pretende fungir como un apoyo didáctico en
                terapias conductuales y de lenguaje con el objetivo de lograr la identificación de
                las 5 emociones básicas: alegría, tristeza, enojo, angustia y miedo. Esta
                funcionalidad estará dirigida para las personas de grado subclínico.
                Por otro lado, para las personas de grado I y II, funcionará como medio de
                comunicación ya que de esta manera podrán hacer que el resto de personas
                entiendan las emociones que están experimentando sin necesidad de comunicarlo
                verbalmente. "
            />
            <AutismoSection></AutismoSection>
            <VideoSection></VideoSection>
        </main>
    );
}
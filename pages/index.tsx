import Image from "next/image";
import { Inter } from "next/font/google";
import BarraMenu from "../components/home/Barra";
import Cabezera from "../components/home/Cabezera";
import SobreMimo from "../components/home/sobreMimo";
import Diseño from "../components/home/diseño";
import Especificaciones from "../components/home/especificaciones";
import Boton from "../components/home/Boton";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  BackgroundImage,
  Center,
  Container,
  Grid,
  Button,
  Card,
} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppShell
      header={<BarraMenu/>}
      padding={0}
    >
      <Cabezera
        titulo="MIMO"
        descripcion="MIMO, es una herramienta que pretende fungir como un apoyo didáctico en
        terapias conductuales y de lenguaje con el objetivo de lograr la identificación de
        las 5 emociones básicas: alegría, tristeza, enojo, angustia y miedo."
      />
      <SobreMimo
        subtitulo="Sobre MIMO"
        texto="MIMO es una herramienta para terapias conductuales y de lenguaje que busca 
        identificar 5 emociones básicas en personas subclínicas: alegría, tristeza, enojo, 
        angustia y miedo. Por otro lado, para personas de grado I y II, funcionará como medio 
        de comunicación y control en crisis al utilizar el peluche como expresión emocional. "
      />
      <Diseño
        subtitulo="Diseño"
        texto="Se usó tela suave y azul por el autismo; se usaron patrones de internet, 
        adaptados a las medidas del circuito y la placa de Leds. "
      />
      <Especificaciones
        subtitulo="Especificaciones"
        texto="Con el objetivo de brindar una solución más completa y personalizada, 
        el grupo 4IM3 propone un Proyecto el cual consiste en un peluche que implementa 
        la tecnología del microcontrolador Arduino en conjunto de una matriz de LEDs de 
        Neopixel RGB."
      />
    </AppShell>
  );
}

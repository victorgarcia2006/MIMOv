import BarraMenu from "../components/home/Barra";
import Cabezera from "../components/home/Cabezera";
import SobreMimo from "../components/home/sobreMimo";
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
    </AppShell>
  );
}

import Autismo from "./Autismo/Autismo";
import Autismo2 from "./Autismo/Autismo2";

const AutismoSection = () => {
  const autismo = [
    {
      title: "¿Qué es el autismo?",
      descripcion:
        "El Trastorno del Espectro Autista, que se refiere a una amplia gama de afecciones caracterizadas por desafíos con habilidades sociales, comportamientos repetitivos, falta de habla y comunicación no verbal. Las capacidades y las necesidades de las personas con autismo varían y pueden evolucionar con el tiempo.",
    },
  ];
  const autismo2 = [
    {
      title: "Características",
      caracteristica1: "Ecolalia, repite lo mismo o lo que oye (frases o palabras).",
      caracteristica2: "Agresividad y/o auto lesiones.",
      caracteristica3: "No mostrar expresiones faciales como de felicidad, tristeza, enojo y sorpresa.",
      caracteristica4: "Gira o se mece sobre sí mismo.",
    },
  ];
  return (
    <section>
      <div className="bg-white py-20">
        <div className="flex flex-row justify-center pr-20 items-start max-sm:flex-col">
          <div>
            {autismo.map((autismo, index) => (
              <div key={index}>
                <Autismo
                  title={autismo.title}
                  description={autismo.descripcion}
                />
              </div>
            ))}
          </div>
          <div className="border-solid border-black border-l-[1px] w-[0.25px] h-96 my-auto mx-32 max-lg:mx-10 max-lg:h-[480px] max-sm:hidden" />
          <div>
            {autismo2.map((autismo2, index) => (
              <div key={index}>
                <Autismo2
                  title={autismo2.title}
                  elemento1={autismo2.caracteristica1}
                  elemento2={autismo2.caracteristica2}
                  elemento3={autismo2.caracteristica3}
                  elemento4={autismo2.caracteristica4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutismoSection;

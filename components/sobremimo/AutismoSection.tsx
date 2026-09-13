import Autismo from "./Autismo/Autismo";

const AutismoSection = () => {
  const autismo = [
    {
      title: "Una vía adicional: acompañamiento para niños con TEA",
      descripcion:
        "El mismo canal multisensorial de MIMO —visual, táctil y tangible— abre una posible vía de apoyo para niños con Trastorno del Espectro Autista, como herramienta de comunicación no verbal de emociones. Esta línea está en fase de exploración y no reemplaza la orientación de un especialista.",
    },
  ];
  return (
    <section>
      <div className="bg-white py-20">
        <div className="flex flex-row justify-center items-start max-sm:flex-col">
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
        </div>
      </div>
    </section>
  );
};

export default AutismoSection;

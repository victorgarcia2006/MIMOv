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
    <section className="bg-base py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-secondary border border-primary-light rounded-2xl p-8">
          {autismo.map((autismo, index) => (
            <Autismo
              key={index}
              title={autismo.title}
              description={autismo.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutismoSection;

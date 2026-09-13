import Image from "next/image";

function VisionMision() {
  const bloques = [
    {
      titulo: "Misión",
      texto: "Facilitar el desarrollo socioemocional de niños de 4 a 8 años mediante herramientas interactivas y accesibles que les ayuden a reconocer, nombrar y regular sus emociones, fortaleciendo su bienestar y su relación con quienes los rodean.",
    },
    {
      titulo: "Visión",
      texto: "Ser un referente en tecnología aplicada al desarrollo socioemocional infantil en México y Latinoamérica, construyendo puentes entre la psicología del desarrollo y la innovación tecnológica, en colaboración con especialistas, escuelas y familias.",
    },
    {
      titulo: "Objetivo",
      texto: "Brindar a niños de 4 a 8 años una herramienta lúdica que acompañe su desarrollo socioemocional, entregando a padres, tutores y especialistas información clara sobre su progreso — sin etiquetas ni diagnósticos.",
    },
  ];

  const ventajas = [
    "Aprendizaje progresivo: las actividades suben de dificultad según el ritmo de cada niño, nunca por tiempo fijo.",
    "Sin depender de la lectura: botones, expresiones y vibración permiten participar incluso antes de dominar el lenguaje escrito.",
    "Acompañamiento sin juicio: MIMO nunca marca error. Cuando algo no sale, modela la respuesta correcta y sigue jugando.",
    "Información clara para quien cuida: cada sesión entrega datos de progreso a cuidadores y especialistas, sin etiquetas evaluativas.",
    "Una vía adicional para necesidades especiales: el canal multisensorial (visual, táctil, tangible) también es útil como apoyo para niños con Trastorno del Espectro Autista, donde el apoyo visual estructurado es una estrategia reconocida.",
  ];

  return (
    <div>
      <div className="bg-base py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {bloques.map((bloque) => (
            <div key={bloque.titulo} className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-heading text-xl text-ink">{bloque.titulo}</h2>
              <p className="font-body text-ink-muted text-sm mt-3 text-justify">{bloque.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-ink text-center">Ventajas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {ventajas.map((ventaja) => (
              <div key={ventaja} className="bg-white rounded-2xl shadow-sm p-5 flex gap-3 items-start">
                <Image src="/images/heart-icon.png" alt="" width={20} height={20} className="mt-1 flex-none" />
                <p className="font-body text-ink text-sm">{ventaja}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMision;

import React from "react";

function VisionMision() {
  return (
    <div className="bg-white w-full px-40 py-16 flex flex-col justify-between items-center gap-10">
      <h2>Misión</h2>
      <p className="text-justify max-md:text-center max-2xl:text-center">
        Facilitar el desarrollo socioemocional de niños de 4 a 8 años mediante
        herramientas interactivas y accesibles que les ayuden a reconocer,
        nombrar y regular sus emociones, fortaleciendo su bienestar y su
        relación con quienes los rodean.
      </p>
      <h2>Visión</h2>
      <p className="text-justify max-md:text-center max-2xl:text-center">
        Ser un referente en tecnología aplicada al desarrollo socioemocional
        infantil en México y Latinoamérica, construyendo puentes entre la
        psicología del desarrollo y la innovación tecnológica, en
        colaboración con especialistas, escuelas y familias.
      </p>
      <h2>Objetivo</h2>
      <p className="text-justify max-md:text-center max-2xl:text-center">
        Brindar a niños de 4 a 8 años una herramienta lúdica que acompañe su
        desarrollo socioemocional, entregando a padres, tutores y
        especialistas información clara sobre su progreso — sin etiquetas ni
        diagnósticos.
      </p>
      <h2>Ventajas</h2>
      <ol className="text-justify max-md:text-center max-2xl:text-center">
        <li>
          Aprendizaje progresivo: las actividades suben de dificultad según el
          ritmo de cada niño, nunca por tiempo fijo.
        </li>
        <li>
          Sin depender de la lectura: botones, expresiones y vibración
          permiten participar incluso antes de dominar el lenguaje escrito.
        </li>
        <li>
          Acompañamiento sin juicio: MIMO nunca marca error. Cuando algo no
          sale, modela la respuesta correcta y sigue jugando.
        </li>
        <li>
          Información clara para quien cuida: cada sesión entrega datos de
          progreso a cuidadores y especialistas, sin etiquetas evaluativas.
        </li>
        <li>
          Una vía adicional para necesidades especiales: el canal
          multisensorial (visual, táctil, tangible) también es útil como
          apoyo para niños con Trastorno del Espectro Autista, donde el apoyo
          visual estructurado es una estrategia reconocida.
        </li>
      </ol>
    </div>
  );
}

export default VisionMision;

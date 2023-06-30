import React from "react";

interface AgradecimientosProps {
  titulo: string;
  personas: string[];
}

function AgradecimientosBase({ titulo, personas }: AgradecimientosProps) {
  return (
    <section className="">
      <div className="">
        <h3 className="w-96">{titulo}</h3>
        <div className="flex flex-col">
          {personas.map((personas, index) => (
            <div key={index}>
              <div className="flex ">
                <div className="flex items-start justify-start">
                  <div className="">{personas}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgradecimientosBase;

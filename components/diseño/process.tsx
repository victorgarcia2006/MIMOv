interface ProcesoProps {
    subtitulo: string;
    texto: string;
    imagen: string;
}

function Proceso({ subtitulo, texto, imagen }: ProcesoProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={imagen} alt="" className="w-96 h-96"/>
            <div className="text-center">
                <h3>{subtitulo}</h3>
                <p className="w-96">{texto}</p>
            </div>
        </div>
    )
}

export default Proceso
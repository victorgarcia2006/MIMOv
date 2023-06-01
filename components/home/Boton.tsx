import { Button } from "@mantine/core";

interface BotonProps {
    texto: string;
}

function Boton(props: BotonProps) {
    return (
        <button className="rounded-2xl bg-[#234269] w-24 h-7">
            <p className="font-semibold">{props.texto}</p>
        </button>
    );
}

export default Boton;
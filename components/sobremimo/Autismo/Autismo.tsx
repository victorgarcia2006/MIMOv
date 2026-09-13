interface AutismoProps {
    title: string;
    description: string;
}

function Autismo({ title, description }: AutismoProps) {
    return <div>
        <div className="text-center max-w-xl px-10">
            <h2>{title}</h2>
            <p className="text-black py-5 text-justify">{description}</p>
        </div>
    </div>
}

export default Autismo;
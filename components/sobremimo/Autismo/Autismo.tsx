interface AutismoProps {
    title: string;
    description: string;
}

function Autismo({ title, description }: AutismoProps) {
    return <div>
        <div className="ml-20 text-justify ">
            <h2>{title}</h2>
            <p className="text-black w-96 py-5">{description}</p>
        </div>
    </div>
}

export default Autismo;
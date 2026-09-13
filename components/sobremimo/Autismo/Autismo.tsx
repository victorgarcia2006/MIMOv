interface AutismoProps {
    title: string;
    description: string;
}

function Autismo({ title, description }: AutismoProps) {
    return (
        <div>
            <h2 className="font-heading text-xl text-ink">{title}</h2>
            <p className="font-body text-ink-muted text-sm mt-3 text-justify">{description}</p>
        </div>
    );
}

export default Autismo;

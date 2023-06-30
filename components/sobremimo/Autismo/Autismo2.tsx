interface Autismo2Props {
    title: string;
    elemento1: string;
    elemento2: string;
    elemento3: string;
    elemento4: string;
}

function Autismo2({ title, elemento1, elemento2, elemento3, elemento4 }: Autismo2Props) {
    return <div>
        <div className="max-sm:mx-10">
            <h2 className="">{title}</h2>
            <ol className="text-black py-5 list-disc px-5 text-justify w-96 max-lg:w-60 max-xl:py-10 max-lg:py-[72px] max-xl:w-72 max-sm:py-5 max-sm:w-72">
                <li>{elemento1}</li>
                <li>{elemento2}</li>
                <li>{elemento3}</li>
                <li>{elemento4}</li>
            </ol>
        </div>
    </div>
}

export default Autismo2;
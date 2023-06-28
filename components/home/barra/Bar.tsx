import Link from "next/link";

interface barProps {
    section: string;
    href: string;

}

function Bar({ section, href }: barProps) {
    return <div>
        <div className='mx-10'>
            <Link href={href} className='text-[#234269] font-semibold no-underline'>{section}</Link>
        </div>
    </div>
}

export default Bar;


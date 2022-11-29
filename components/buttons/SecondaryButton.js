import Link from 'next/link';

export default function LandingHeader({text, href}) {
    return (
        <Link href={href}>
            <button className='sm:w-[230px] w-[70vw] bg-white font-light text-black p-4 min-w-[150px] rounded-md hover:shadow-md transition'>{text}</button>
        </Link>
    );
}
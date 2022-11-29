import Link from 'next/link';

export default function LandingHeader({text, href}) {
    return (
        <Link href={href}>
            <button className='sm:w-auto w-[70vw] bg-herrmann-red font-light text-white p-4 min-w-[150px] rounded-md hover:shadow-md transition'>{text}</button>
        </Link>
        
    );
}
  
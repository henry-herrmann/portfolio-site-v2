import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return (
        <div className='bg-herrmann-gray-dark min-h-full'>
            <div className='text-center sm:text-left md:flex-row-reverse md:flex md:justify-between'>
                <div className='sm:flex sm:flex-grow sm:justify-evenly m-4 md:m-0'>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <div className='text-white font-bold text-2xl mb-1'>Links</div>
                        <div className='flex flex-col'>
                            <a href="mailto:henry@herrmann.page" className='text-white font-light mt-1'>Contact</a>
                            <Link href="https://rjks.us"><div className='text-white font-light mt-1'>Rjks</div></Link>
                        </div>
                    </div>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <div className='text-white font-bold text-2xl mb-1'>Social</div>
                        <div className='flex flex-col'>
                            <Link href="https://github.com/henry-herrmann"><div className='text-white font-light mt-1'>GitHub</div></Link>
                            <Link href="https://www.linkedin.com/in/henryherrmann/"><div className='text-white font-light mt-1'>LinkedIn</div></Link>
                        </div>
                    </div>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <div className='text-white font-bold text-2xl mb-1'>Documents</div>
                        <div className='flex flex-col'>
                            <Link href="https://herrmann.page/legal-notice"><div className='text-white font-light mt-1'>Legal Notice</div></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:m-10 p-10 md:p-0 text-center md:text-left'>
                    <Image
                        priority={true}
                        src="/logo/logo_white.svg"
                        alt="Logo"
                        width={90}
                        height={90}
                        />
                    <p className='text-sm text-white'>Henry Herrmann © 2023</p>
                </div>
            </div>
        </div>
    );
}
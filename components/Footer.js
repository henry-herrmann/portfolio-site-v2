import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return (
        <div className='bg-herrmann-gray-dark min-h-full'>
            <div className='text-center sm:text-left md:flex-row-reverse md:flex md:justify-between'>
                <div className='sm:flex sm:flex-grow sm:justify-evenly m-10 md:m-0'>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <h1 className='text-white font-bold text-2xl mb-1'>Links</h1>
                        <div className='flex flex-col'>
                            <a href="mailto:henry@herrmann.page" className='text-white font-light mt-1'>Contact</a>
                            <Link href="https://link.rjks.us/support"><div className='text-white font-light mt-1'>RJKS Support</div></Link>
                        </div>
                    </div>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <h1 className='text-white font-bold text-2xl mb-1'>Social</h1>
                        <div className='flex flex-col'>
                            <Link href="https://github.com/henry-herrmann"><div className='text-white font-light mt-1'>GitHub</div></Link>
                            <Link href="https://instagram.com/henry_herrm"><div className='text-white font-light mt-1'>Instagram</div></Link>
                        </div>
                    </div>
                    <div className='md:m-10 pt-10 md:p-0'>
                        <h1 className='text-white font-bold text-2xl mb-1'>Documents</h1>
                        <div className='flex flex-col'>
                            <Link href="https://herrmann.page/legal-notice"><div className='text-white font-light mt-1'>Legal Notice</div></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:m-10 p-10 md:p-0 text-center md:text-left'>
                    <Image
                        src="/logo_white.svg"
                        alt="Logo"
                        width={90}
                        height={60}/>
                    <p className='text-sm text-white'>herrmann.page © 2022</p>
                </div>
            </div>
        </div>
    );
}
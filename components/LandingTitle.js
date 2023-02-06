import Link from 'next/link';
import Image from 'next/image';

import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"
import { useEffect } from 'react';

export default function LandingTitle(){
    useEffect(() => {
        const entries = document.querySelectorAll(".fade-animation");

        entries.forEach((entry) =>{
            entry.classList.add("opacity-100");
            entry.classList.remove("opacity-0");
        });
    });

    return (
        <div className='landing-title flex h-auto flex-col sm:block bg-herrmann-gray-light'>
            <div className='flex justify-center'>
                <div className="flex justify-center items-center mt-36 sm:mt-48  mb-7 sm:mb-0">
                    <div className='text-center max-w-screen-md xl:mr-[10vw] 2xl:mr-[12vw]'>
                        <h1 className='w-auto font-bold text-slate-900 text-3xl md:text-5xl mb-6 mr-4 ml-4 fade-animation transition-opacity duration-[1200ms] delay-100 opacity-0 motion-reduce:transition-none'>Henry Herrmann Software Developer</h1>
                        <p className='text-lg md:text-xl font-light mr-4 ml-4 fade-animation transition-opacity duration-[1200ms] delay-[200ms] opacity-0 motion-reduce:transition-none'>Computer science student and programmer</p>
                        <div className='sm:flex sm:justify-center w-[100vw] sm:w-auto fade-animation transition-opacity duration-[1200ms] delay-[300ms] opacity-0 motion-reduce:transition-none'>
                            <div className='mt-10 sm:m-3 sm:mt-7 w-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><SecondaryButton text='Github Profile' href="https://github.com/henry-herrmann" /></div>
                            <div className='mt-4 sm:m-3 sm:mt-7 ww-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><PrimaryButton text='Contact me' href="mailto:henry@herrmann.page"/></div>
                        </div>
                    </div>
                    <div className='bg-white rounded-full hidden xl:block xl:mr-12 2xl:mr-5 fade-animation transition-opacity duration-[1200ms] delay-100 opacity-0 motion-reduce:transition-none'>
                        <Image
                          src="/logo/logo.svg"
                          alt="rjks Logo"
                          width={320}
                          height={60}
                        />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center p-7 sm:mt-20 animate-bounce fade-animation transition-opacity duration-[1200ms] delay-[800ms] opacity-0 motion-reduce:transition-none'>
                
            </div>
        </div>
    );
}
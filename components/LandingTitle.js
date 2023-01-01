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
        <div className='flex h-auto sm:h-[100vh] flex-col sm:block justify-between bg-gradient-to-tr from-gradient-1 to-gradient-2'>
            <div className='flex justify-center items-center'>
                <div className='text-center max-w-screen-md mt-36 sm:mt-64 ml:m-0 mr:m-0'>
                    <h1 className='font-bold text-5xl mb-4 mr-4 ml-4 fade-animation transition-opacity duration-[1200ms] delay-100 opacity-0 motion-reduce:transition-none'>Henry Herrmann</h1>
                    <p className='text-xl font-light fade-animation transition-opacity duration-[1200ms] delay-[200ms] opacity-0 motion-reduce:transition-none'>Java, JS and Dart Developer.</p>
                </div>
            </div>
            <div className='sm:flex sm:justify-center w-[100vw] sm:w-auto fade-animation transition-opacity duration-[1200ms] delay-[300ms] opacity-0 motion-reduce:transition-none'>
                <div className='mt-7 sm:m-3 sm:mt-5 w-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><SecondaryButton text='Github Profile' href="https://github.com/henry-herrmann" /></div>
                <div className='mt-4 sm:m-3 sm:mt-5 ww-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><PrimaryButton text='Contact me' href="mailto:henry@herrmann.page"/></div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center mt-12 sm:mt-8'>
                <div className='flex flex-col justify-center items-center mr-10 ml-10 sm:ml-0 fade-animation transition-opacity duration-[1200ms] delay-[400ms] opacity-0 motion-reduce:transition-none'>
                    <div className="rounded-lg bg-white w-20 h-20 flex justify-center items-center">
                        <Image className="ml-1" src="/icons/clock.svg" width={46} height={46} alt="Clock image"/>
                    </div> 
                    <p className='text-xl mt-2 ml-2'>Years of experience</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-6 sm:m-0 fade-animation transition-opacity duration-[1200ms] delay-[500ms] opacity-0 motion-reduce:transition-none'>
                    <div className="rounded-lg bg-white w-20 h-20 flex justify-center items-center">
                        <Image src="/icons/cert.svg" width={46} height={46} alt="Certificate image"/>
                    </div> 
                    <p className='text-xl mt-2 ml-2 '>Reliable software</p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10 mb-10 sm:mt-24 animate-bounce fade-animation transition-opacity duration-[1200ms] delay-[800ms] opacity-0 motion-reduce:transition-none'>
                <Image src="/icons/arrow_down.svg" alt="Arrow" width={50} height={50}/>
            </div>
        </div>
    );
}
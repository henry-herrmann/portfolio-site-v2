import Link from 'next/link';
import Image from 'next/image';

import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"

export default function LandingTitle(){
    return (
        <div className='flex h-auto flex-col sm:block justify-between bg-gradient-to-tr from-gradient-1 to-gradient-2'>
            <div className='flex justify-center'>
                <div className='text-center max-w-screen-md mt-36 sm:mt-40 ml:m-0 mr:m-0'>
                    <h1 className='font-bold text-5xl mb-4 mr-4 ml-4'>Henry Herrmann</h1>
                    <p className='text-xl font-light'>Java, JS and Dart Developer.</p>
                </div>
            </div>
            <div className='sm:flex sm:justify-center w-[100vw] sm:w-auto'>
                <div className='mt-10 sm:m-3 w-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><SecondaryButton text='Github Profile' href="https://github.com/henry-herrmann" /></div>
                <div className='mt-4 sm:m-3 ww-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><PrimaryButton text='Contact me' href="mailto:henry@herrmann.page"/></div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center mt-14 sm:mt-8'>
                <div className='flex flex-col justify-center items-center mr-10 ml-10 sm:ml-0'>
                    <div className="rounded-lg bg-white w-20 h-20 flex justify-center items-center">
                        <Image className="ml-1" src="/icons/clock.svg" width={46} height={45} />
                    </div> 
                    <p className='text-xl mt-2 ml-2'>Years of experience</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-6 sm:m-0'>
                    <div className="rounded-lg bg-white w-20 h-20 flex justify-center items-center">
                        <Image src="/icons/cert.svg" width={46} height={45} />
                    </div> 
                    <p className='text-xl mt-2 ml-2 '>Reliable software</p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-16 sm:mt-20 animate-bounce pb-7'>
                <Image src="/icons/arrow_down.svg" alt="Arrow" width={50} height={50}/>
            </div>
        </div>
    );
}
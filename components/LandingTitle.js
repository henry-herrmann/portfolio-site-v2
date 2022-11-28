import Link from 'next/link';
import Image from 'next/image';

import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"

export default function LandingTitle(){
    return (
        <div className='flex h-auto flex-col sm:block justify-between'>
            <div className='flex justify-center'>
                <div className='mr-8 ml-8 text-center max-w-screen-md mt-36 sm:mt-40 ml:m-0 mr:m-0'>
                    <h1 className='font-bold text-5xl mb-4 mr-4 ml-4'>Henry Herrmann</h1>
                    <p className='text-xl font-light'>Java, JS and Dart Developer.</p>
                </div>
            </div>
            <div className='sm:flex sm:justify-center w-[100vw] sm:w-auto'>
                <div className='mt-10 sm:m-3 w-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><SecondaryButton text='Github Profile' href="https://github.com/henry-herrmann" /></div>
                <div className='mt-4 sm:m-3 ww-[70vw] sm:w-auto mr-[15vw] ml-[15vw]'><PrimaryButton text='Contact me' href="mailto:henry@herrmann.page"/></div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center mt-7'>
                <div className='flex justify-center sm:mr-10 sm:ml-10'>
                    <p className="text-4xl">1.</p> 
                    <p className='text-xl mt-2 ml-2'>Years of experience in programming.</p>
                </div>
                <div className='flex justify-center'>
                    <p className="text-4xl">2.</p> 
                    <p className='text-xl mt-2 ml-2 '>Producing reliable software.</p>
                </div>
            </div>
        </div>
    );
}
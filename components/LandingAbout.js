import Image from 'next/image';
import Link from 'next/link';

import PrimaryButton from './buttons/PrimaryButton';

export default function LandingAbout() {
    return (
        <div id="about" className="flex flex-col xl:flex-row xl:justify-center items-center mb-16 xl:mb-36 mt-12 md:mt-16 xl:mt-28 js-show-on-scroll opacity-0 transition-all duration-[1.5s] motion-reduce:transition-none">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:items-center mb-4 justify-items-start'>
                    <Image className="hidden xl:block fill-current text-green-600" src="/icons/code.svg" alt="Code" width={35} height={25}/>
                    <h1 className="mt-6 xl:mt-0 font-bold text-3xl pl-4">Proficient at programming</h1>
                </div>
                <p className="text-xl font-light">My name is Henry and I have been programming in many different languages, since the age of 13. As of now, I am studying Computer Science at the Ruhr-Universität in Bochum.</p>
                <div className='mt-4 flex items-center flex-col sm:flex-row justify-center xl:justify-start'>
                    <div className='flex items-center mt-5 sm:mr-5'>
                        <Image src="/icons/clock_blue.svg" alt="Bolt" width={30} height={30}/>
                        <p className='ml-3 text-center font-light'>Reliable software</p>
                    </div>
                    <div className='flex items-center mt-5 sm:ml-5'>
                        <Image src="/icons/tool_blue.svg" alt="Rocket" width={30} height={30}/>
                        <p className='ml-2 text-center font-light'>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-4 gap-0 mt-5 xl:mt-0'>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/java.svg" alt="Dart" width={50} height={50}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/js.svg" alt="JavaScript" width={50} height={50}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/dart.svg" alt="Dart" width={50} height={50}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/sql.svg" alt="SQL" width={50} height={50}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/nodejs.svg" alt="IPadOS" width={50} height={55}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/flutter.svg" alt="Flutter" width={50} height={50}/>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <div className="flex justify-center">
                        <Image className="h-[50px]" src="/language/nextjs.svg" alt="NextJS" width={50} height={50}/>
                    </div>
                </div>
                <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                    <Image src="/language/reactjs.svg" alt="ReactJS" width={50} height={50}/>
                </div>
            </div>
        </div>
    );
}

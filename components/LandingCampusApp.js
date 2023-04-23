import Image from 'next/image';
import Link from 'next/link';

import PrimaryButton from './buttons/PrimaryButton';

export default function LandingCampusApp() {
    return (
        <div id="about" className="flex flex-col xl:flex-row xl:justify-center items-center mb-16 xl:mb-36 mt-12 md:mt-16 xl:mt-28 js-show-on-scroll opacity-0 transition-all duration-[1.5s] motion-reduce:transition-none">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:items-center mb-4 xl:mt-4 justify-items-start'>
                    <Image className="hidden xl:block fill-current text-green-600" src="/icons/code.svg" alt="Code" width={35} height={25}/>
                    <h1 className="mt-6 xl:mt-0 font-bold text-2xl md:text-3xl xl:pl-4 text-slate">My latest project: The Campus App</h1>
                </div>
                <p className="text-xl font-light">Currently I'm a Software Engineer apart of the development team of the <Link className="underline decoration-sky-500" href="https://app.asta-bochum.de/">Campus App</Link> released by the General Student Council of the Ruhr-University Bochum. My role comes with a large variety of tasks such as front-end development for mobile apps but also developing and utilising backend solutions.</p>
        
            </div>
            <div className='grid xl:grid-cols-4 grid-cols-1'>
                    <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[17px]'>
                        <Image src="/icons/campus_app.png" alt="Campus App" width={80} height={10}/>
                    </div>
            </div>
        </div>
    );
}

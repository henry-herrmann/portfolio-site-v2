import Link from 'next/link';
import Image from "next/image";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function LandingProjects({ json }){
    /*if(!(json instanceof Array)){
        return [
            <Link key={item.name} href={`https://github.com/henry-herrmann/portfolio-site-v2`}>
                <div className='bg-white h-[18vh] w-[32vw] sm:h-[18-vh] sm:w-[25vw] md:h-[15vh] md:w-[19vw] xl:h-[15vh] xl:w-[15vw] rounded-md m-5 hover:cursor-pointer text-center flex flex-col items-center justify-center hover:shadow-md'>
                    <div className="flex flex-col xl:flex-row justify-center items-center">
                        <Image
                        src="/icons/info.svg"
                        alt="Logo"
                        width={20}
                        height={20}/>
                        <p className='xl:ml-2'>portfolio-site-v2</p>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-center items-center">
                        <Image
                        src="/icons/tool.svg"
                        alt="Logo"
                        width={20}
                        height={20}/>
                        <p className='xl:ml-2'>JavaScript</p>
                    </div>
                </div>
            </Link>
        ];
    }
    
    const names = json.map((item) => 
        <Link key={item.name} href={`https://github.com/henry-herrmann/${item.name}`}>
            <div className='bg-white-gray h-[18vh] w-[32vw] sm:h-[18-vh] sm:w-[25vw] md:h-[15vh] md:w-[19vw] xl:h-[15vh] xl:w-[15vw] rounded-md m-5 hover:cursor-pointer text-center flex flex-col items-center justify-center hover:shadow-md'>
                <div className="flex flex-col xl:flex-row justify-center items-center">
                    <Image
                        src="/icons/info.svg"
                        alt="Logo"
                        width={20}
                        height={20}/>
                    <p className='xl:ml-2'>{item.name}</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-center items-center">
                    <Image
                        src="/icons/tool.svg"
                        alt="Logo"
                        width={20}
                        height={20}/>
                    <p className='xl:ml-2'>{item.language == null ? "N/A" : item.language}</p>
                </div>
            </div>
        </Link>
    );*/

    return (
        <div id="projects" className="flex flex-col-reverse xl:flex-row xl:justify-center items-center mb-40 mt-9 xl:mt-28 js-show-on-scroll opacity-0 transition-all duration-[1.5s] motion-reduce:transition-none">
            <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 mt-5'>
                    <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                        <Image src="/icons/android.svg" alt="Android" width={50} height={55}/>
                    </div>
                    <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                        <Image src="/icons/ios.svg" alt="Android" width={50} height={55}/>
                    </div>
                    <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                        <Image src="/language/nodejs.svg" alt="IPadOS" width={50} height={55}/>
                    </div>
                    <div className='bg-herrmann-gray-light h-[100px] w-[100px] rounded-md m-5 p-[25px]'>
                        <Image src="/language/flutter.svg" alt="Flutter" width={50} height={50}/>
                    </div>
            </div>
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-right max-w-screen-sm">
                <div className='flex flex-col-reverse xl:flex-row xl:items-center mb-4 xl:justify-end'>
                    <h1 className="mt-6 xl:mt-0 font-bold text-2xl md:text-3xl xl:pr-4">Countless projects</h1>
                    <Image className="hidden xl:block" src="/icons/list.svg" alt="Code" width={35} height={25}/>
                </div>
                <p className="text-xl font-light">Ever since I started programming, I always seeked for new and more challenging projects, reaching from mobile apps, backend servers to fully fledged chat bots.</p>
                <div className='mt-8 flex items-center flex-col sm:flex-row sm:justify-center xl:justify-end'>
                    <PrimaryButton text="View my Github profile" href="https://github.com/henry-herrmann" />
                </div>
            </div>
        </div>
        /*<div id="projects" className="js-show-on-scroll flex flex-col justify-center items-center opactiy-0 translate-x-[-100%] transition-all duration-[1.5s] motion-reduce:transition-none">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:items-center mb-4 justify-items-start mb-1'>
                    <h3 className="mt-6 xl:mt-0 font-bold text-4xl">My projects</h3>
                </div>
            </div>
            <hr className="text-center mb-8 xl:mb-10 w-56 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"/>
            <div className="flex flex-col xl:flex-row xl:justify-center items-center md:mb-32">
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-0xl:mt-0'>
                    {names}
                </div>
            </div>
        </div>*/
    );
}
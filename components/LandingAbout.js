import Image from 'next/image';

export default function LandingAbout() {
    return (
        <div id="about" className="js-show-on-scroll flex flex-col justify-center items-center mb-12 md:mb-20 opactiy-0 translate-x-[-100%] transition-all duration-[1.5s] motion-reduce:transition-none">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:flex-row justify-items-start mb-2'>
                    <h2 className="mt-14 xl:mt-24 font-bold text-4xl">About me</h2>
                </div>
            </div>
            <hr className="text-center mb-10 w-52 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"/>
            <div className="flex flex-col xl:flex-row ">
                <div className="flex flex-col bg-white-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <div className="px-2 mb-2 text-xl flex justify-center">Personal information</div>
                    <p className="text-center mb-2">Hey, I'm Henry and I'm a computer science student. I frequently work on various projects ranging from backend to full app solutions.</p>
                </div>
                <div className="flex flex-col bg-white-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <div className="px-2 mb-2 text-xl flex justify-center">Languages I use</div>
                    <ul className="ml-7 mb-2">
                        <li>1. Java</li>
                        <li>2. JavaScript</li>
                        <li>3. Dart</li>
                    </ul>
                </div>
                <div className="bg-white-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <div className="px-2 mb-2 text-xl flex justify-center">Programming career</div>
                    <p className="text-center mb-2">At first I started with programming minecraft plugins in Java, then moved on to JavaScript which I use for the majority of my projects. Just recently I got my hands on Flutter and Dart.</p>
                </div>
            </div>
        </div>
    );
}

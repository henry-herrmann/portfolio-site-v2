export default function LandingAbout() {
    return (
        <div id="about" className="flex flex-col justify-center items-center sm:mb-40 mt-16 sm:mt-48">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:items-center mb-4 justify-items-start mb-9'>
                    <h1 className="mt-6 xl:mt-0 font-bold text-4xl pl-4">About me</h1>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row ">
                <div className="flex flex-col bg-herrmann-blue-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <h1 className="m-2 xl:mt-3 text-xl flex justify-center">Personal information</h1>
                    <p className="ml-7 mr-10">Hey, I'm Henry and I'm a computer science student. I frequently work on various projects ranging from backend to full app solutions.</p>
                </div>
                <div className="flex flex-col bg-herrmann-blue-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <h1 className="m-2 xl:mt-3 text-xl flex justify-center">Languages I use</h1>
                    <ul className="ml-7">
                        <li>- Java</li>
                        <li>- Javascript</li>
                        <li>- Dart</li>
                    </ul>
                </div>
                <div className="flex flex-col bg-herrmann-blue-gray p-5 xl:w-[20vw] w-[80vw] rounded-md m-5">
                    <h1 className="m-2 xl:mt-3 text-xl flex justify-center">Programming career</h1>
                    <p className="ml-7 mr-10 mb-4">At first I started with programming minecraft plugins in Java, then moved on to JavaScript which I use for the majority of my projects. Just recently I got my hands on Flutter and Dart.</p>
                </div>
            </div>
        </div>
    );
}

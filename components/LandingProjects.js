import Link from 'next/link';

export default function LandingProjects({ json }){
    const names = json.map((item) => 
        <Link key={item.name} href={`https://github.com/henry-herrmann/${item.name}`}>
            <div className='bg-herrmann-blue-gray h-[18vh] w-[22vw] sm:h-[15vh] sm:w-[15vw] rounded-md m-5 text-center flex items-center justify-center hover:cursor-pointer hover:shadow-md'>
                <p>{item.name}</p>
            </div>
        </Link>
    );

    return (
        <div id="projects" className="flex flex-col justify-center items-center">
            <div className="text-center ml-10 mr-10 xl:m-0 xl:text-left max-w-screen-sm">
                <div className='xl:flex xl:items-center mb-4 justify-items-start mb-9'>
                    <h1 className="mt-6 xl:mt-0 font-bold text-4xl pl-4">My projects</h1>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-center items-center mb-40">
                <div className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-4 gap-0 mt-5 xl:mt-0'>
                    {names}
                </div>
            </div>
        </div>
    );
}
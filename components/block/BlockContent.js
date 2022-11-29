export default function BlockHeading(props) {
    return (
       <div className='flex justify-center mb-14'>
            <div className='flex w-[80vw] md:w-auto justify-center bg-white rounded-md'>
                <div className='max-w-2xl text-justify  p-10'>
                    {props.children}
                </div>
            </div>
       </div>
    );
}
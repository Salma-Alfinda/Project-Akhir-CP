import ErrorImg from '../assets/images/1x/Asset 2.png'
const NotFound = () => {
return(
    <>
    <div className="bg-black w-full h-screen">
        <div className="flex flex-col w-full items-center justify-center space-y-4 py-8">
            <h1 className="text-[5rem] font-Anton text-red-500">O O P S !</h1>
            <div className="w-44 md:w-72">
                <img src={ErrorImg} alt="" className='w-auto' />
            </div>
            <h1 className="text-[2rem] font-Roboto mb-4 text-white"><span className="text-red-500">404 </span>Not Found</h1>
            <p className="text-[1rem] font-Condensed text-white md:text-[2rem]">The page you are looking for does not exist :)</p>
        </div>
    </div>
    </>
)
}
export default NotFound;
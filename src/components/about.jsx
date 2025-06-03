export default function About(){
    return (
        <>
        <section id="about" className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-20 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20"></section>
        <div className="flex flex-col space-y-12">
            <div className="flex items-center space-x-4">
                <div className="border-l-2 border-[#ff6f51] h-12 relative">
                    <span className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-[#ff6f51]"></span>
                </div>
                <div className="flex items-center space-x-3">
                    <p className="text-xs sm:text-sm font-semibold">Website Developer</p>
                </div>
            </div>
            <div className="flex items-center space-x-4"></div>
            <div className="flex items-center space-x-4"></div>
        </div>
        <div className="">

        </div>
        </>
    )
}
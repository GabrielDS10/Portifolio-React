export default function About(){
    return (
        <>
        <section id="about" className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-20 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <div className="flex flex-col space-y-12">
            <div className="flex items-center space-x-4">
                <div className="border-l-2 border-[#ff6f51] h-12 relative">
                    <span className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-[#ff6f51]"></span>
                </div>
                <div className="flex items-center space-x-3">
                    <p className="text-xs sm:text-sm font-semibold">Desenvolvimento Web</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="border-l-2 border-[#ff6f51] h-12 relative">
                <span className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-[#ff6f51]"></span>
                </div>
                 <div className="flex items-center space-x-3">
                    <p className="text-xs sm:text-sm font-semibold">Website Developer</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="border-l-2 border-[#ff6f51] h-12 relative">
                <span className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-[#ff6f51]"></span>
                </div>
                 <div className="flex items-center space-x-3">
                    <p className="text-xs sm:text-sm font-semibold">Website Developer</p>
                </div>
            </div>
        </div>
        <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold mb-4">Sobre mim</h3>
            <p className="text-xs sm:text-sm text-[#a0a9b8] mb-8 max-w-xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi optio sunt nesciunt voluptate saepe molestias earum iure ipsam suscipit autem.
             </p>
             <div className="flex space-x-10 text-xs sm:text-sm font-semibold max-w-xl">
                <div>
                    <p className="text-white text-lg sm:text-xl">120
                    <span className="text-[#ff6f51]"> + </span>
                    </p>
                    <p className="text-[#a0a9b8] font-normal">projetos complestos</p>
                </div>
                <div>
                    <p className="text-white text-lg sm:text-xl">120
                    <span className="text-[#ff6f51]"> + </span>
                    </p>
                    <p className="text-[#a0a9b8] font-normal">projetos complestos</p>
                </div>
                <div>
                    <p className="text-white text-lg sm:text-xl">120
                    <span className="text-[#ff6f51]"> + </span>
                    </p>
                    <p className="text-[#a0a9b8] font-normal">projetos complestos</p>
                </div>
             </div>
            
        </div>

        </section>
        </>
    )
}
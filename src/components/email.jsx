export default function Email(){
    return(
        <>
        <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className="flex flex-col">
                <div className="border-t border-[#ff6f51] w-20 mb-4"></div>
                <h3 className="text-3xl font-extrabold leading-tight mb-4">Tem um Projeto?</h3>
                <span className="text-3xl font-extrabold leading-tight mb-4">Entre em Contato</span>
                <button className="bg-[#ff6f51] text-white text-sm sm:text-base font-semibold px-6 py-2 rounded max-w-[100px]">Enviar</button>
            </div>
            
            <form className="flex flex-col space-y-6 max-w-md">
                <input type="text" placeholder="Nome" className="bg-transparent border-b border-[#3a4a5a] text-white text-sm sm:text-base placeholder-[#5a6a7a] focus:outline-none" />
                <input type="text" placeholder="Email" className="bg-transparent border-b border-[#3a4a5a] text-white text-sm sm:text-base placeholder-[#5a6a7a] focus:outline-none"/>
                < textarea placeholder="Mensagem" className="bg-transparent border-b border-[#3a4a5a] text-white text-sm sm:text-base placeholder-[#5a6a7a] focus:outline-none resize-none" rows="3"/>
            </form>
        </section>
        
        </>
    )
}
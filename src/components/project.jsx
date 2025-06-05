    import Projeto1 from "../assets/img/noImage.png"
    import Projeto2 from "../assets/img/noImage.png"
    export default function Project(){
        return(
            <>
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-20">

            <h3 className="text-2xl font-extrabold mb-10 text-center">Projetos</h3>
            <div className="flex flex-col items-center space-y-2 mb-20">
                <div className="border-l-2 border-[#00CFFF] h-12 relative">
                    <span className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-[#00CFFF]"></span>
                </div>
            </div>

            {/* Ztype */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h4 className="font-semibold mb-2">Destruir Palavras</h4>
                    <div className="flex flex-wrap gap-2 mb-3 text-[9px] sm:text-xs font-semibold text-[#0f1724]">
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">HTML</span>
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">CSS</span>
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">JavaScript</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a9b8] mb-4 max-w-md leading-relaxed">Este projeto é um um jogo de digitação rápida.
                    No jogo, palavras descem do topo da tela, e o jogador deve digitá-las rapidamente
                    para destruí-las antes que atinjam a parte inferior. A dificuldade aumenta com o tempo,
                    à medida que mais palavras surgem e com maior velocidade</p>
                    <div className="flex space-x-4 mb-6">
                        <button className="bg-[#00CFFF] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded cursor-pointer ">Ver Github</button>
                        <button className="text-[#a0a9b8] text-xs sm:text-sm font-semibold underline flex items-center space-x-1 cursor-pointer">
                            <span>Ver Projeto</span>
                            <i className="fas fa-external-link-alt text-xs::before"></i>
                    </button></div>
                    <img src={Projeto1} alt="" className="border border-[#1a2a3a] rounded max-w-200 max-h-100" />
                </div>
                <div>
                     <h4 className="font-semibold mb-2">Langin Page</h4>
                    <div className="flex flex-wrap gap-2 mb-3 text-[9px] sm:text-xs font-semibold text-[#0f1724]">
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">HTML</span>
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">CSS</span>
                        <span className="bg-[#a0a9b8] rounded-full px-2 py-0.5">JavaScript</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a9b8] mb-4 max-w-md leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dignissimos animi illum repellat iusto repellendus autem corporis, delectus at doloribus similique quibusdam minus ab hic dolores odit voluptatibus quos. Molestias sapiente nam, cum fuga quibusdam magni odio temporibus animi architecto?</p>
                    <div className="flex space-x-4 mb-6">
                        <button className="bg-[#00CFFF] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded cursor-pointer ">Ver Github</button>
                        <button className="text-[#a0a9b8] text-xs sm:text-sm font-semibold underline flex items-center space-x-1 cursor-pointer">
                            <span>Ver Projeto</span>
                            <i className="fas fa-external-link-alt text-xs::before"></i>
                    </button></div>
                    <img src={Projeto2} alt="" className="border border-[#1a2a3a] rounded max-w-200 max-h-100" />
                </div>
                <div></div>
                <div></div>
            </div>






            </section>
            
            </>
        )
    }
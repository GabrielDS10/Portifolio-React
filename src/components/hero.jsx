import minhaFoto from "../assets/img/eu.png"
import { useState } from "react"
    


export default function Hero(){

    const [showModal, setShowModal] = useState(false);

    const contatos =() =>{
        setShowModal(true);
    }




    return (
        <>
        <section id="hero" className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-20 pb-10 md:pb-20">
            
            <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">OLÁ <span className="text-[#00CFFF]">.</span></h1>
                <div className="flex items-center space-x-3 mt-3 mb-2">
                    <div className="border-b border-[#00CFFF] w-14"></div>
                    <p className="text-lg">Bem vindo ao NogDev</p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">Estudante de T.i</h2>
                <div className="flex space-x-4">
                    <button className="bg-[#00CFFF] text-white text-sm sm:text-base font-semibold px-5 py-2 rounded cursor-pointer" onClick={contatos}>Contato</button>
                    <button className="border border-[#00CFFF] text-[#00CFFF] text-sm sm:text-base font-semibold px-5 py-2 rounded cursor-pointer">Iniciar conversa</button>
                </div>
            </div>

            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <img src={minhaFoto} alt="" srcset="" className="rounded-full object-cover w-full h-full relative z-10"/>
            </div>
        </section>
        
        <nav className="flex justify-center space-x-8 text-xs sm:text-sm text-[#1a2a3a] bg-[#0f1724] py-3 select-none">
            <span className="opacity-70 cursor-pointer hover:text-white">HTML</span>
            <span className="opacity-70 cursor-pointer hover:text-white">CSS</span>
            <span className="opacity-70 cursor-pointer hover:text-white">JavaScript</span>
            <span className="opacity-70 cursor-pointer hover:text-white">NodeJS.</span>
            <span className="opacity-70 cursor-pointer hover:text-white">React</span>
            <span className="opacity-70 cursor-pointer hover:text-white">Git</span>
            <span className="opacity-70 cursor-pointer hover:text-white">GitHub</span>
        </nav>

        {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Meus Contatos</h2>
      <ul className="space-y-2">
        <li>Email: seuemail@exemplo.com</li>
        <li>LinkedIn: linkedin.com/in/seuperfil</li>
        <li>GitHub: github.com/seuperfil</li>
        <li>WhatsApp: (00) 00000-0000</li>
      </ul>
      <button
        className="mt-4 bg-[#00CFFF] text-white px-4 py-2 rounded"
        onClick={() => setShowModal(false)}
      >
        Fechar
      </button>
    </div>
  </div>
)}

        </>
    )
}
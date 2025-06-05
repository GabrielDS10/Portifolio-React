export default function Header(){
    return (
       <>
     <header className=" px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-6">

       <nav className=" flex justify-between items-center text-sm sm:text-base">
        
        <div className="font-semibold">NogDev</div>
          <div>
  
              <ul className="flex space-x-6">
                <li><a  className="hover:underline" href="#">Menu</a></li>
                <li><a className="hover:underline" href="#about">Sobre</a></li>
                <li><a className="hover:underline"  href="#">Projetos</a></li>
                <li><a  className="hover:underline" href="">Contato</a></li>
              </ul>
          </div>

       </nav>
     </header>
       </> 
    )
}
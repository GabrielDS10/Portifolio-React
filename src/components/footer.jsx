import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0f1724] py-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center">
        <p className="font-semibold mb-1">Gabriel DS</p>
        <p className="text-xs text-[#5a6a7a] mb-4">Inspirado em Jensen Omega</p>

        <div className="flex justify-center space-x-6 text-[#5a6a7a] text-xl">
          <a aria-label="Email" href="mailto:seuemail@exemplo.com" className="hover:text-[#ff6f51] transition-colors">
            <i className="fas fa-envelope"></i>
          </a>

          <a
            aria-label="Github"
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff6f51] transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff6f51] transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

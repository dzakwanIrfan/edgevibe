import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex text-3xl font-bold">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M23 21.648H1L12 2.352z" />
                </svg>
                <span>Edge Vibe</span>
              </div>
            </Link>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu} // Tambahkan event handler
          >
            {/* Ikon Hamburger (tampil saat menu tertutup) */}
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            {/* Ikon Close (tampil saat menu terbuka) */}
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
                href="https://github.com/dzakwanIrfan/edgevibe"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Github
            </a>
            <a
                href="https://dzakwanirfan.framer.website/"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Dzakwan Irfan
            </a>
          </div>

          {/* Tombol Get Started (Desktop) */}
          <Link
            to="/editor"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Go to Editor
          </Link>
        </nav>

        {/* Menu Mobile (tampil hanya saat isMenuOpen true) */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a
                href="https://github.com/dzakwanIrfan/edgevibe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Github
              </a>
              <a
                href="https://dzakwanirfan.framer.website/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Dzakwan Irfan
              </a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <Link
              to="/editor"
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Go to Editor
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
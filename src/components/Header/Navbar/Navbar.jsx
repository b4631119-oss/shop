import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              Главная
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              Телефоны
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              Аксессуары
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              <span className="hidden sm:inline">❤️ Избранное</span>
              <span className="sm:hidden">❤️</span>
            </NavLink>

            <a
              href="https://wa.me/996551383739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
            >
              <span>💬</span>
              <span className="hidden sm:inline">Связаться</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* ✅ Переключатель языка */}
            <LanguageSwitcher />
          </div>

          {/* Бургер-меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 sm:w-6 h-4 sm:h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[450px] py-3 sm:py-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 sm:gap-3 border-t border-gray-100 pt-3 sm:pt-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg ${
                  isActive 
                    ? "bg-orange-50 text-orange-500 font-semibold" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`
              }
            >
              🏠 Главная
            </NavLink>
            <NavLink
              to="/phones"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg ${
                  isActive 
                    ? "bg-orange-50 text-orange-500 font-semibold" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`
              }
            >
              📱 Телефоны
            </NavLink>
            <NavLink
              to="/accessories"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg ${
                  isActive 
                    ? "bg-orange-50 text-orange-500 font-semibold" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`
              }
            >
              🎧 Аксессуары
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg ${
                  isActive 
                    ? "bg-orange-50 text-orange-500 font-semibold" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`
              }
            >
              ❤️ Избранное
            </NavLink>
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/996551383739"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 sm:py-3.5 rounded-xl text-base sm:text-lg font-medium transition-colors text-center"
              >
                💬 Связаться в WhatsApp
              </a>
            </div>
            {/* ✅ Переключатель языка в мобильном меню */}
            <div className="px-4 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
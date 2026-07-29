import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "../../../hook/useTranslation";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            <div className="md:hidden ml-auto">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              {t('nav.home')}
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              {t('nav.phones')}
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                    : "text-gray-700"
                }`
              }
            >
              {t('nav.accessories')}
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:scale-105 whitespace-nowrap ${
                  isActive 
                    ? "text-orange-500 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              <span>❤️ {t('nav.favorites')}</span>
            </NavLink>

            <a
              href="https://wa.me/996551383739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 flex items-center gap-2 whitespace-nowrap"
            >
              <span>💬</span>
              <span>{t('nav.contact')}</span>
            </a>

            {/* ✅ Переключатель языка */}
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
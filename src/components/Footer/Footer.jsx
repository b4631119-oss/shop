import { Link } from 'react-router-dom';
import { useTranslation } from '../../hook/useTranslation';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white mt-auto border-t border-gray-800/80 relative overflow-hidden">
      {/* Декоративное свечение на фоне */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      {/* Основная часть футера */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Колонка 1: О магазине */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Telephone Osh
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.about_text')}
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="https://wa.me/996551383739"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="text-base">💬</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+996551383739"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="text-base">📞</span>
                <span>Позвонить</span>
              </a>
            </div>
          </div>

          {/* Колонка 2: Быстрые ссылки */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/phones" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">›</span>
                  {t('footer.phones')}
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">›</span>
                  {t('footer.accessories')}
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">›</span>
                  {t('footer.favorites')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
              {t('footer.contact_us')}
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shrink-0">📍</span>
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shrink-0">⏰</span>
                <span>{t('footer.working_hours')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shrink-0">📞</span>
                <a
                  href="tel:+996551383739"
                  className="hover:text-orange-400 transition-colors font-medium"
                >
                  +996 551 383 739
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm shrink-0">💬</span>
                <a
                  href="https://wa.me/996551383739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors font-medium text-green-400"
                >
                  WhatsApp Чат
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Нижняя часть футера (с учётом отступа для мобильной навигации) */}
      <div className="border-t border-gray-800/60 bg-black/40 backdrop-blur-sm py-5 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-xs sm:text-sm text-gray-400">
          <p>© 2026 Telephone Osh. {t('footer.rights')}.</p>
          <p className="text-gray-500 flex items-center gap-1">
            <span>{t('footer.developed')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from '../../hook/useTranslation';

// SVG иконки с PropTypes
const Smartphone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" x2="12" y1="18" y2="18"/>
  </svg>
);
Smartphone.propTypes = { className: PropTypes.string };

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
MapPin.propTypes = { className: PropTypes.string };

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
Clock.propTypes = { className: PropTypes.string };

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
Phone.propTypes = { className: PropTypes.string };

const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
MessageCircle.propTypes = { className: PropTypes.string };

const Instagram = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
Instagram.propTypes = { className: PropTypes.string };

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
ChevronRight.propTypes = { className: PropTypes.string };

const GIS_LOCATION_URL = "https://2gis.kg/osh/geo/70030076156501927?m=72.789121%2C40.541648%2F20";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white mt-auto border-t border-gray-800/80 relative overflow-hidden">
      {/* Декоративное свечение на фоне */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      {/* Основная часть футера */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Колонка 1: О магазине */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-gray-950 font-bold">
                <Smartphone className="w-5 h-5 text-gray-950" />
              </div>
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
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+996551383739"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Позвонить</span>
              </a>
              <a
                href="https://instagram.com/telfonchi_umar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs font-medium transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
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
                  <ChevronRight className="w-4 h-4 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {t('footer.phones')}
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {t('footer.accessories')}
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
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
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <a
                  href={GIS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors flex flex-col group"
                >
                  <span className="font-medium text-gray-200 group-hover:text-orange-400 transition-colors">
                    {t('footer.address')}
                  </span>
                  <span className="text-xs text-orange-400/80 underline decoration-orange-400/30">
                    Открыть в 2GIS 🗺️
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shrink-0">
                  <Clock className="w-4 h-4" />
                </span>
                <span>{t('footer.working_hours')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <a
                  href="tel:+996551383739"
                  className="hover:text-orange-400 transition-colors font-medium"
                >
                  +996 551 383 739
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <a
                  href="https://wa.me/996551383739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors font-medium text-green-400"
                >
                  WhatsApp Чат
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-sm shrink-0">
                  <Instagram className="w-4 h-4" />
                </span>
                <a
                  href="https://instagram.com/telfonchi_umar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors font-medium text-pink-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Нижняя часть */}
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
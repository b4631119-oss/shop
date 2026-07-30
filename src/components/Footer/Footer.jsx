import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Instagram, 
  ChevronRight 
} from 'lucide-react';
import { useTranslation } from '../../hook/useTranslation';

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

          {/* Колонка 3: Контакты с интерактивной ссылкой 2GIS */}
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
                  className="hover:text-pink-400 transition-colors font-medium text-pink-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Нижняя часть футера */}
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
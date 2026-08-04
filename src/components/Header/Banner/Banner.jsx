import { Link } from "react-router-dom";
import { useTranslation } from "../../../hook/useTranslation";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
          
          <div className="space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
              {t('banner.sale')}
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-500">{t('banner.title1')}</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {t('banner.title2')}
              </span>
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              {t('banner.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link
                to="/phones"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 text-center"
              >
                {t('banner.btn.catalog')}
              </Link>
              <a
                href="https://wa.me/996551383739"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-orange-50 text-gray-700 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium border-2 border-orange-200 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-orange-400 text-center"
              >
                {t('banner.btn.contact')}
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 pt-2 md:pt-4 text-center">
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">100+</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-gray-500">{t('banner.stats.products')}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">100%</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-gray-500">{t('banner.stats.original')}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">⭐ 4.9</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-gray-500">{t('banner.stats.reviews')}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-full">
              <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-48 sm:h-48 bg-amber-300 rounded-full opacity-20 animate-pulse delay-100"></div>
              
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-5 md:p-8 transform hover:scale-105 transition-transform duration-500 shadow-orange-300/50">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="text-5xl sm:text-6xl md:text-8xl text-center mb-2 filter drop-shadow-lg">
                    <img src="/iphone.jpeg" alt="iPhone 17 Pro" className="w-full h-auto object-cover rounded-xl" />
                  </div>
                  <div className="bg-orange-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                    <p className="text-white font-bold text-sm sm:text-base">iPhone 17 Pro</p>
                    <p className="text-orange-100 text-[11px] sm:text-xs md:text-sm">{t('banner.titanium')}</p>
                    <div className="flex justify-center gap-1 mt-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></span>
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full"></span>
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"></span>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-amber-300 rounded-2xl sm:rounded-3xl opacity-20 blur-lg -z-10"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hidden sm:block absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-amber-200 rounded-full opacity-30 animate-bounce delay-100"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Banner;
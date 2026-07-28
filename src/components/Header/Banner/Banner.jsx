const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          
          {/* Текстовая часть */}
          <div className="space-y-4 md:space-y-6 order-2 md:order-1">
            
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Стиль</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                в каждой детали
              </span>
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
              Эксклюзивные смартфоны и аксессуары в Оше. 
              Оранжевый iPhone — символ яркости и индивидуальности.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#catalog"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200"
              >
                Смотреть каталог
              </a>
              <a
                href="https://wa.me/996551383739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-orange-50 text-gray-700 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium border-2 border-orange-200 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-orange-400"
              >
                💬 Связаться
              </a>
            </div>

            {/* Быстрая статистика */}
            <div className="flex gap-6 md:gap-8 pt-2 md:pt-4">
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-500">500+</div>
                <div className="text-xs md:text-sm text-gray-500">Товаров</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-500">100%</div>
                <div className="text-xs md:text-sm text-gray-500">Оригинал</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-500">⭐ 4.9</div>
                <div className="text-xs md:text-sm text-gray-500">Отзывы</div>
              </div>
            </div>
          </div>

          {/* Оранжевый iPhone */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-full">
              {/* Оранжевый градиентный фон */}
              <div className="absolute -top-10 -left-10 w-60 h-60 sm:w-80 sm:h-80 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 sm:w-60 sm:h-60 bg-amber-300 rounded-full opacity-20 animate-pulse delay-100"></div>
              
              {/* Карточка с iPhone */}
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-500 shadow-orange-300/50">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                
                  <img 
  src="/public/iphone.jpeg" 
  alt="iPhone 17 Pro Orange" 
  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto"
/>
                  <div className="bg-orange-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                    <p className="text-white font-bold text-base sm:text-lg">iPhone 17 Pro</p>
                    <p className="text-orange-100 text-xs sm:text-sm">Оранжевый титан</p>
                    
                  </div>
                </div>
                
                {/* Декоративная рамка */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-amber-300 rounded-2xl sm:rounded-3xl opacity-20 blur-lg -z-10"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Декоративные элементы - скрываем на мобилках */}
      <div className="hidden sm:block absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-amber-200 rounded-full opacity-30 animate-bounce delay-100"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Banner;
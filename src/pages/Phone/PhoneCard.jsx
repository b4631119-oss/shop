// src/pages/Phone/PhoneCard.jsx
import PropTypes from 'prop-types';
import { useMemo, useState, useRef } from 'react';
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useTranslation } from '../../hook/useTranslation';

const PhoneCard = ({ phone }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, description, images } = phone || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Свайп
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const imageRef = useRef(null);
  
  // ✅ Правильно собираем все URL фото
  const imageList = useMemo(() => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      return [];
    }
    
    return images
      .map(img => {
        if (typeof img === 'object') {
          return img.image_url || img.image || null;
        }
        if (typeof img === 'string') {
          return img;
        }
        return null;
      })
      .filter(Boolean);
  }, [images]);

  const handleAddToFavorites = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    const isExists = favoriteItems.find((item) => item.id === id);
    
    if (!isExists) {
      favoriteItems.push(phone);
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      swal(t('product.added'), "", "success");
    } else {
      swal(t('product.already'), "", "error");
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const whatsappLink = useMemo(() => {
    const whatsappMessage = t('whatsapp.msg')
      .replace('{name}', name || '')
      .replace('{price}', formatPrice(price));
    return `https://wa.me/996551383739?text=${encodeURIComponent(whatsappMessage)}`;
  }, [name, price, t]);

  // Навигация
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // ✅ СВАЙП
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (imageList.length <= 1) return;
    
    const diff = touchStartX - touchEndX;
    const threshold = 50; // Минимальное расстояние для свайпа
    
    if (diff > threshold) {
      // Свайп влево → следующее фото
      handleNextImage();
    } else if (diff < -threshold) {
      // Свайп вправо → предыдущее фото
      handlePrevImage();
    }
    
    // Сбрасываем значения
    setTouchStartX(0);
    setTouchEndX(0);
  };

  if (!phone || !name) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-700">{t('detail.not_found') || 'Товар не найден'}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 pb-24 sm:pb-12">
      <div className="grid md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Левая часть — фото с каруселью и свайпом */}
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-8 md:p-12 flex items-center justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
          {imageList.length > 0 ? (
            <div 
              className="relative w-full max-w-md select-none"
              ref={imageRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={imageList[currentImageIndex] || 'https://placehold.co/600x600/e2e8f0/94a3b8?text=Нет+фото'} 
                alt={name} 
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 pointer-events-none"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x600/e2e8f0/94a3b8?text=Нет+фото';
                }}
              />
              
              {/* Кнопки навигации (десктоп) */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full items-center justify-center text-sm hover:scale-110 transition-all"
                  >
                    ◀
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full items-center justify-center text-sm hover:scale-110 transition-all"
                  >
                    ▶
                  </button>
                  
                  {/* Индикаторы */}
                  <div className="flex justify-center gap-2 mt-4">
                    {imageList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Счетчик фото */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {imageList.length}
                  </div>

                  {/* Подсказка о свайпе (только мобилки) */}
                  <div className="sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-gray-400 bg-white/80 px-3 py-1 rounded-full">
                    👆 Свайпай для смены фото
                  </div>
                </>
              )}
            </div>
          ) : (
            <img 
              src="https://placehold.co/600x600/e2e8f0/94a3b8?text=Нет+фото" 
              alt={name} 
              className="w-full max-w-md h-auto object-contain"
            />
          )}
          
          {!inStock && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t('product.outofstock') || 'Нет в наличии'}
            </div>
          )}
          {oldPrice && inStock && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
            </div>
          )}
        </div>

        {/* Правая часть — информация */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 pb-8 sm:pb-10">
          <div className="mb-2">
            <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">
              {category === "Смартфоны" ? t('category.smartphones') : category === "Аксессуары" ? t('category.accessories') : category}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
              {formatPrice(price)} сом
            </span>
            {oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(oldPrice)} сом
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {description || t('detail.no_description') || 'Описание товара отсутствует'}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {inStock ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>{t('detail.order_whatsapp') || 'Заказать в WhatsApp'}</span>
              </a>
            ) : (
              <button
                disabled
                className="w-full sm:flex-1 bg-gray-100 text-gray-400 px-6 py-3.5 rounded-xl font-medium cursor-not-allowed border border-gray-200 flex items-center justify-center gap-2"
              >
                <span>🚫</span>
                <span>{t('product.outofstock') || 'Нет в наличии'}</span>
              </button>
            )}
            
            <button
              onClick={handleAddToFavorites}
              className="w-full sm:flex-1 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-700 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] border border-gray-200 hover:border-orange-200 flex items-center justify-center gap-2"
            >
              <span>❤️</span>
              <span>{t('detail.add_favorite') || 'В избранное'}</span>
            </button>
          </div>

          <Link to="/" className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-medium">
            {t('detail.back') || '← Назад к каталогу'}
          </Link>
        </div>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    inStock: PropTypes.bool,
    images: PropTypes.array,
    description: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default PhoneCard;
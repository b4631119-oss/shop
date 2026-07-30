// src/pages/Phone/PhoneCard.jsx
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useTranslation } from '../../hook/useTranslation';
import { getImageUrl } from '../../lib/api';

const PhoneCard = ({ phone }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, description, images } = phone || {};
  const [imageUrl, setImageUrl] = useState('');

  // Получаем URL картинки
  useEffect(() => {
    if (phone && images && images.length > 0) {
      const url = getImageUrl(phone, images[0]);
      setImageUrl(url);
      console.log('🖼️ URL картинки (детально):', url);
    }
  }, [phone, images]);

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

  const whatsappMessage = t('whatsapp.msg')
    .replace('{name}', name || '')
    .replace('{price}', formatPrice(price));
  const whatsappLink = `https://wa.me/996551383739?text=${encodeURIComponent(whatsappMessage)}`;

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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
      <div className="grid md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Левая часть — фото */}
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-8 md:p-12 flex items-center justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
          <img 
            src={imageUrl || 'https://placehold.co/600x600/e2e8f0/94a3b8?text=Нет+фото'} 
            alt={name} 
            className="w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x600/e2e8f0/94a3b8?text=Нет+фото';
            }}
          />
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
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
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
    image: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default PhoneCard;
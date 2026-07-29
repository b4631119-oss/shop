// src/components/PhonesCard/PhonesCard.jsx
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useTranslation } from '../../hook/useTranslation';

const PhonesCard = ({ phone }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, image,  } = phone || {};
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some(item => item.id === id);
    setIsFavorite(exists);
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const whatsappLink = `https://wa.me/996551383739?text=Здравствуйте!%20Хочу%20купить:%20${name}%20за%20${formatPrice(price)}%20сом`;

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some(item => item.id === id);

    if (exists) {
      const updated = favorites.filter(item => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
      swal(t('product.removed'), "", "info");
    } else {
      favorites.push(phone);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      swal(t('product.added'), "", "success");
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {!inStock && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {t('product.outofstock')}
        </div>
      )}
      
      {oldPrice && inStock && (
        <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
          -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
        </div>
      )}

      <button
        onClick={handleToggleFavorite}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
          isFavorite 
            ? 'bg-red-500 text-white shadow-lg shadow-red-200' 
            : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white'
        }`}
        aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.312-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <Link to={`/phones/${id}`}>
        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4 md:p-5">
        <p className="text-xs text-orange-500 font-medium uppercase tracking-wider mb-1">
          {category === "Смартфоны" ? t('category.smartphones') : category === "Аксессуары" ? t('category.accessories') : category}
        </p>

        <Link to={`/phones/${id}`}>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[48px] sm:min-h-[56px] hover:text-orange-500 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          <span className="text-xl sm:text-2xl font-bold text-orange-500">
            {formatPrice(price)} сом
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(oldPrice)} сом
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <Link 
            to={`/phones/${id}`} 
            className="w-full sm:flex-1 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-1.5 border border-gray-200/80 hover:border-orange-200"
          >
            <span>ℹ️</span>
            <span>{t('product.details')}</span>
          </Link>

          {inStock ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-1.5"
            >
              <span>💬</span>
              <span>{t('product.order')}</span>
            </a>
          ) : (
            <button
              disabled
              className="w-full sm:flex-1 bg-gray-100 text-gray-400 px-4 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed border border-gray-200 flex items-center justify-center gap-1.5"
            >
              <span>🚫</span>
              <span>{t('product.outofstock')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PhonesCard.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    inStock: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

export default PhonesCard;
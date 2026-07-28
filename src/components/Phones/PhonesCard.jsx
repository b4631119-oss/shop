// src/components/PhonesCard/PhonesCard.jsx
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useTranslation } from '../../hook/useTranslation';

const PhonesCard = ({ phone }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, image, rating } = phone || {};
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
          {category}
        </p>

        <Link to={`/phones/${id}`}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[56px] hover:text-orange-500 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.round(rating || 0) ? "#f59e0b" : "#e5e7eb"} className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">({rating || 0})</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-orange-500">
            {formatPrice(price)} сом
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(oldPrice)} сом
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Link 
            to={`/phones/${id}`} 
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 text-center"
          >
            {t('product.details')}
          </Link>

          {inStock ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 text-center"
            >
              {t('product.order')}
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-500 px-4 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
            >
              {t('product.outofstock')}
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
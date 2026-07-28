// src/components/FavoritesCard/FavoritesCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hook/useTranslation';

const FavoritesCard = ({ phone, onRemove }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, image } = phone || {};

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(id);
    }
  };

  const whatsappLink = `https://wa.me/996551383739?text=Здравствуйте!%20Хочу%20купить:%20${name}%20за%20${formatPrice(price)}%20сом`;

  if (!phone || !name) {
    return null;
  }

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
        <Link to={`/phones/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        <button
          onClick={handleRemove}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all hover:scale-110 shadow-lg"
          aria-label="Удалить из избранного"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {oldPrice && inStock && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-orange-500 font-medium uppercase tracking-wider mb-1">
          {category === "Смартфоны" ? t('category.smartphones') : category === "Аксессуары" ? t('category.accessories') : category}
        </p>

        <Link to={`/phones/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-orange-500 transition-colors min-h-[56px]">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-orange-500">
            {formatPrice(price)} сом
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(oldPrice)} сом
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5">
          {inStock ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-1.5"
            >
              <span>💬</span>
              <span>{t('product.order')}</span>
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-100 text-gray-400 px-4 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed border border-gray-200 flex items-center justify-center gap-1.5"
            >
              <span>🚫</span>
              <span>{t('product.outofstock')}</span>
            </button>
          )}
          
          <Link 
            to={`/phones/${id}`}
            className="flex-1 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-1.5 border border-gray-200/80 hover:border-orange-200"
          >
            <span>ℹ️</span>
            <span>{t('product.details')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

FavoritesCard.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    inStock: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FavoritesCard;
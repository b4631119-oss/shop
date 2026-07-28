import PropTypes from 'prop-types';
import Rating from "react-rating";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { id, name, category, price, oldPrice, inStock, image, rating } = phone || {};

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const whatsappLink = `https://wa.me/996551383739?text=Здравствуйте!%20Хочу%20купить:%20${name}%20за%20${formatPrice(price)}%20сом`;

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {!inStock && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Нет в наличии
        </div>
      )}
      
      {oldPrice && inStock && (
        <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
          -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
        </div>
      )}

      <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 md:p-5">
        <p className="text-xs text-orange-500 font-medium uppercase tracking-wider mb-1">
          {category}
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[56px]">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <Rating
            emptySymbol={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            }
            fullSymbol={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            }
            initialRating={rating || 0}
            readonly
          />
          <span className="text-sm text-gray-500">({rating || 0})</span>
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
            Подробнее
          </Link>

          {inStock ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 text-center"
            >
              💬 Заказать
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-500 px-4 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
            >
              Нет в наличии
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// PropTypes для валидации
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
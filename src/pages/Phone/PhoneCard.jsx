import PropTypes from 'prop-types';
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useTranslation } from '../../hook/useTranslation';

const PhoneCard = ({ phone }) => {
  const { t } = useTranslation();
  const { id, name, category, price, oldPrice, inStock, image, description, rating } = phone || {};

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

  const whatsappLink = `https://wa.me/996551383739?text=Здравствуйте!%20Хочу%20купить:%20${name}%20за%20${formatPrice(price)}%20сом`;

  if (!phone || !name) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-700">Товар не найден</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
        
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <img 
            src={image} 
            alt={name} 
            className="w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500"
          />
          {!inStock && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t('product.outofstock')}
            </div>
          )}
          {oldPrice && inStock && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <div className="mb-2">
            <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">
              {category}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.round(rating || 0) ? "#f59e0b" : "#e5e7eb"} className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm">({rating || 0})</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl md:text-4xl font-bold text-orange-500">
              {formatPrice(price)} сом
            </span>
            {oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(oldPrice)} сом
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {description || "Описание товара отсутствует"}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {inStock ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-orange-200 text-center"
              >
                {t('detail.order_whatsapp')}
              </a>
            ) : (
              <button
                disabled
                className="flex-1 bg-gray-300 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                {t('product.outofstock')}
              </button>
            )}
            
            <button
              onClick={handleAddToFavorites}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              {t('detail.add_favorite')}
            </button>
          </div>

          <Link to="/" className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-medium">
            {t('detail.back')}
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
    description: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default PhoneCard;
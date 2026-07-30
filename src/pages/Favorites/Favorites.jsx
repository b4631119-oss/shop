import FavoritesCard from "./FavoritesCard"
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hook/useTranslation";

const Favorites = () => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadFavorites = useCallback(() => {
    try {
      const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
      if (Array.isArray(favoriteItems)) {
        setFavorites(favoriteItems);
        const total = favoriteItems.reduce((prev, current) => prev + (current.price || 0), 0);
        setTotalPrice(total);
      }
    } catch (e) {
      setFavorites([]);
      setTotalPrice(0);
    }
  }, []);

  useEffect(() => {
    loadFavorites();
    const handleStorageChange = (e) => {
      if (e.key === "favorites") {
        loadFavorites();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [loadFavorites]);

  const handleRemoveAll = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
    setTotalPrice(0);
  };

  const handleRemoveItem = (id) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    const total = updatedFavorites.reduce((prev, current) => prev + (current.price || 0), 0);
    setTotalPrice(total);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-semibold text-gray-700">{t('favorites.empty')}</h2>
          <p className="text-gray-500 mt-2">{t('favorites.empty_desc')}</p>
          <Link
            to="/"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
          >
            {t('favorites.go_catalog')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {t('favorites.title')}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {favorites.length} {t('favorites.total')} {formatPrice(totalPrice)} сом
          </p>
        </div>
        
        {favorites.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
          >
            {t('favorites.clear')}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {favorites.map((phone) => (
          <FavoritesCard 
            key={phone.id} 
            phone={phone} 
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
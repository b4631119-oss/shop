import  { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favoriteItems.length > 0) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce((prev, current) => prev + current.price, 0);
      setTotalPrice(total);
    }
  }, []);

  const handleRemoveAll = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
    setTotalPrice(0);
  };

  const handleRemoveItem = (id) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    const total = updatedFavorites.reduce((prev, current) => prev + current.price, 0);
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
          <h2 className="text-2xl font-semibold text-gray-700">Избранное пусто</h2>
          <p className="text-gray-500 mt-2">Добавьте товары в избранное, чтобы они появились здесь</p>
          <Link
            to="/"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
          >
            Перейти в каталог
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
            ❤️ Избранное
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {favorites.length} товаров на сумму {formatPrice(totalPrice)} сом
          </p>
        </div>
        
        {favorites.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
          >
            🗑️ Очистить всё
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {(isShow ? favorites : favorites.slice(0, 4)).map((phone) => (
          <FavoritesCard 
            key={phone.id} 
            phone={phone} 
            onRemove={handleRemoveItem}
          />
        ))}
      </div>

      {favorites.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium transition-all hover:scale-105"
          >
            {isShow ? "📕 Скрыть" : "📖 Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
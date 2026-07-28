import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Search = ({ phones }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Закрываем поиск при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Поиск с учетом всех полей
  useEffect(() => {
    if (searchTerm.length > 0) {
      const term = searchTerm.toLowerCase().trim();
      const filtered = phones.filter(phone => {
        const nameMatch = phone.name?.toLowerCase().includes(term) || false;
        const categoryMatch = phone.category?.toLowerCase().includes(term) || false;
        const priceMatch = String(phone.price).includes(term) || false;
        const descriptionMatch = phone.description?.toLowerCase().includes(term) || false;
        
        return nameMatch || categoryMatch || priceMatch || descriptionMatch;
      });
      setResults(filtered.slice(0, 8)); // Показываем максимум 8 результатов
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [searchTerm, phones]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length > 0) {
      // Можно перейти на страницу с результатами
      // window.location.href = `/search?q=${searchTerm}`;
    }
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-2xl mx-4">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (searchTerm.length > 0) setIsOpen(true);
          }}
          placeholder="🔍 Поиск телефонов, аксессуаров..."
          className="w-full px-4 py-2.5 pr-12 rounded-full border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-200 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </form>

      {/* Результаты поиска */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
          {results.map((phone) => (
            <Link
              key={phone.id}
              to={`/phones/${phone.id}`}
              onClick={() => {
                setSearchTerm("");
                setIsOpen(false);
              }}
              className="flex items-center gap-3 p-3 hover:bg-orange-50 transition-all duration-200 border-b border-gray-50 last:border-0"
            >
              <img 
                src={phone.image} 
                alt={phone.name} 
                className="w-12 h-12 object-contain rounded-lg bg-gray-50 p-1"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 truncate">
                  {phone.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-gray-500">{phone.category}</span>
                  <span className="text-xs font-bold text-orange-500">
                    {formatPrice(phone.price)} сом
                  </span>
                  {phone.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(phone.oldPrice)} сом
                    </span>
                  )}
                </div>
              </div>
              {!phone.inStock && (
                <span className="text-xs text-red-500 font-medium">Нет в наличии</span>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Нет результатов */}
      {isOpen && searchTerm.length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-6 text-center">
          <div className="text-4xl mb-2">🔍</div>
          <p className="text-gray-500">Ничего не найдено</p>
          <p className="text-sm text-gray-400 mt-1">Попробуйте изменить запрос</p>
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Search;
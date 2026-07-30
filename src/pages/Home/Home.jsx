// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Phones from '../../components/Phones/Phones';
import { getProducts } from '../../lib/api';

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // ← Предотвращаем обновление после размонтирования

    
    getProducts()
      .then(data => {
        if (isMounted) {
          console.log('✅ Товары загружены:', data);
          console.log('📦 Количество товаров:', data.length);
          setPhones(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          console.error('❌ Ошибка:', err);
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // ← Очистка
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-semibold text-gray-700">Ошибка загрузки</h2>
          <p className="text-gray-500 mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl"
          >
            Обновить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <Phones phones={phones || []} />
    </div>
  );
};

export default Home;
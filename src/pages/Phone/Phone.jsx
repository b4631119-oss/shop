// src/pages/Phone/Phone.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../../lib/api';
import PhoneCard from './PhoneCard';

const Phone = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!id) return;

    getProduct(id)
      .then(data => {
        if (isMounted) {
          if (data) {
            setPhone(data);
          } else {
            setError('Товар не найден');
          }
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error || !phone) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-700">Товар не найден</h2>
          <Link to="/" className="text-orange-500 hover:underline mt-4 inline-block">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return <PhoneCard phone={phone} />;
};

export default Phone;
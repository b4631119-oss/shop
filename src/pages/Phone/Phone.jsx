// src/components/Phones/Phones.jsx
import PropTypes from 'prop-types';
import PhonesCard from '../../components/Phones/PhonesCard';

const Phones = ({ phones }) => {
  if (!phones || phones.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl text-center text-gray-500">Товаров пока нет</h2>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-bold text-center mb-8'>Все товары</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {phones.map(phone => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
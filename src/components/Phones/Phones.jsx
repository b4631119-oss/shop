import PropTypes from 'prop-types';
import PhonesCard from './PhonesCard';

const Phones = ({ phones }) => {
  if (!phones || phones.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl text-center text-gray-500">📭 Товаров пока нет</h2>
        <p className="text-center text-gray-400 text-sm mt-2">Товары скоро появятся</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          📱 Каталог товаров
        </h1>
        <p className="text-gray-500 text-sm mt-2">Всего товаров: {phones.length}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {phones.map(phone => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.array,
};

export default Phones;
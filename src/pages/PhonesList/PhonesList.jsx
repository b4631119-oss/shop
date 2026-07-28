import PropTypes from 'prop-types';
import PhonesCard from '../../components/Phones/PhonesCard';

const PhonesList = ({ phones }) => {
  if (!phones || phones.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-700">Товаров не найдено</h2>
          <p className="text-gray-500 mt-2">Попробуйте выбрать другую категорию</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          📱 Все товары
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          {phones.length} товаров в наличии
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {phones.map(phone => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      inStock: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number,
    })
  ),
};

export default PhonesList;
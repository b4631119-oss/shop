import PropTypes from 'prop-types';
import PhonesCard from './PhonesCard';
import { useTranslation } from '../../hook/useTranslation';

const Phones = ({ phones }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          {t('catalog.title')}
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {phones?.map(phone => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      inStock: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default Phones;
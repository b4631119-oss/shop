import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phone = () => {
  const phones = useLoaderData();
  const { id } = useParams();

  const phone = phones?.find((item) => String(item.id) === String(id));

  return <PhoneCard phone={phone} />;
};

export default Phone;
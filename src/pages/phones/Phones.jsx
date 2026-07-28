import { useLoaderData } from "react-router-dom";
import PhonesList from "../../components/PhonesList/PhonesList";

const Phones = () => {
  const phones = useLoaderData();
  
  // Фильтруем только телефоны
  const filteredPhones = phones?.filter(phone => phone.category === "Смартфоны") || [];

  return <PhonesList phones={filteredPhones} />;
};

export default Phones;
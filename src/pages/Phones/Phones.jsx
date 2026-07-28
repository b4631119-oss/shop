import { useLoaderData } from "react-router-dom";
import PhonesList from "../PhonesList/PhonesList";

const Phones = () => {
  const phones = useLoaderData();
  
  const filteredPhones = phones?.filter(phone => phone.category === "Смартфоны") || [];

  return <PhonesList phones={filteredPhones} />;
};

export default Phones;
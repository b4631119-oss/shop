import { useLoaderData } from "react-router-dom";
import PhonesList from "../../components/PhonesList/PhonesList";

const Accessories = () => {
  const phones = useLoaderData();
  
  
  const filteredPhones = phones?.filter(phone => phone.category === "Аксессуары") || [];

  return <PhonesList phones={filteredPhones} />;
};

export default Accessories;
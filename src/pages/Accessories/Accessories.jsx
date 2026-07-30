import { useEffect, useState } from "react";
import PhonesList from "../PhonesList/PhonesList";
import { getProducts } from "../../lib/api";

const Accessories = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getProducts().then((data) => {
      if (isMounted) {
        setPhones(data || []);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPhones = phones.filter((phone) => phone.category === "Аксессуары");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return <PhonesList phones={filteredPhones} titleKey="catalog.accessories" />;
};

export default Accessories;
import Banner from '../../components/Header/Banner/Banner';
import Phones from '../../components/Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  // Если используете loader из роутера
  const phones = useLoaderData();
  
  // Если используете хук
  // const { phones, loading, error } = useGetPhones();

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-[60vh]">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
  //         <p className="mt-4 text-gray-500">Загрузка...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center h-[60vh]">
  //       <div className="text-center">
  //         <div className="text-6xl mb-4">😞</div>
  //         <h2 className="text-2xl font-semibold text-gray-700">Ошибка загрузки</h2>
  //         <p className="text-gray-500 mt-2">{error}</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
     <Banner/>
      <Phones phones={phones || []} />
    </div>
  );
};

export default Home;
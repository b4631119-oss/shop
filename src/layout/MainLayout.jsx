// src/layout/MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Header/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navigation/BottomNav";

const MainLayout = () => {
  const location = useLocation();
  const isProductDetailPage = /^\/phones\/[^/]+$/.test(location.pathname);

  useEffect(() => {
    const pageNames = {
      '/': 'Главная',
      '/phones': 'Телефоны',
      '/accessories': 'Аксессуары',
      '/favorites': 'Избранное',
    };

    const pageName = pageNames[location.pathname] || 'Telephone Osh';
    document.title = `Telephone Osh - ${pageName}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pb-24 sm:pb-0">
        <Outlet />
      </main>
      {!isProductDetailPage && <Footer />}
      
      {/* Нижняя навигация для мобилок (если нужна) */}
      {!isProductDetailPage && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
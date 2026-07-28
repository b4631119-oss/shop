import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import BottomNav from "../components/Navigation/BottomNav";
import { useEffect } from "react";

const MainLayout = () => {
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `Telephone Osh`;
    } else {
      document.title = `Telephone ${loc.pathname.replace("/", " ")}`;
    }

    if (loc.state) {
      document.title = ` ${loc.state}`;
    }
  }, [loc.pathname, loc.state]);

  return (
    <div className="max-w-[1300px] mx-auto min-h-screen flex flex-col pb-20 md:pb-6">
      <Navbar />
      <div className="flex-1 py-4 sm:py-6 md:py-10 px-2 sm:px-4">
        <Outlet context={{ name: "hasib" }} />
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;

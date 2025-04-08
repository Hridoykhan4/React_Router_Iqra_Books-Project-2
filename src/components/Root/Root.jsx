import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home : Iqra Books";
    } else if (
      location.pathname === "/listedBooks" ||
      location.pathname === "/rokomaribooks" ||
      location.pathname === "/dashboard" ||
      location.pathname === "/rokomarilistedbooks"
    ) {
      const locationTitle = location.pathname.replace("/", "");
      document.title = `${
        locationTitle[0].toUpperCase() + locationTitle.slice(1)
      }`;
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="shadow-sm">
        <Navbar></Navbar>
      </header>
      <section className="max-w-[1440px] w-11/12 mx-auto mt-7  mb-4">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;

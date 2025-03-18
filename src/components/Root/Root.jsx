import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="max-w-[1440px] w-11/12 mx-auto">
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

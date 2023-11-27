import { Fragment } from "react";
import Nemesislogo from "../assets/Nemesislogo.png";
import "../App.css"
const Navbar = () => {
  return (
    <Fragment>
      <header className="bg-black text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font items-center">
            <img src={Nemesislogo} alt="Logo" className="w-40" />
          </a>
          <nav className="md:ml-auto md:flex gap-5 flex-wrap items-center text-base hidden justify-center">
            <a className="nav-link">Home</a>
            <a className="nav-link">Eventos</a>
            <a className="nav-link">Renta</a>
            <a className="nav-link">Servicios</a>
            <a className="nav-link">Sala</a>
            <a className="nav-link">Torneos</a>

          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;

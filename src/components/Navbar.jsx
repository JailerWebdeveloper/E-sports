import { Fragment } from "react";
import Nemesislogo from "../assets/Nemesislogo.png";
import "../App.css";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <Fragment>
      <header className="bg-black text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font items-center">
            <img src={Nemesislogo} alt="Logo" className="w-40" />
          </a>
          <nav className="md:ml-auto md:flex gap-5 flex-wrap items-center text-base hidden justify-center">
            <div className="flex gap-2 nav-link items-center">
              <Icon icon="ph:game-controller" />
              <a href="/" className=" ">
                Home
              </a>
            </div>
            <div className="flex gap-2 nav-link items-center">
              <Icon icon="material-symbols:event-available-rounded" />{" "}
              <a href="/" className=" ">
                Eventos
              </a>
            </div>
            <div className="flex gap-2 nav-link items-center">
              <Icon icon="fluent:service-bell-16-filled" />
              <a href="/service" className="nav-link">
                Servicios
              </a>
            </div>
            <div className="flex gap-2 nav-link items-center">
              <Icon icon="icon-park-twotone:game-console-one" />
              <a href="/" className=" ">
                Sala
              </a>
            </div>
            <div className="flex gap-2 nav-link items-center">
              <Icon icon="material-symbols:trophy-rounded" />{" "}
              <a href="/" className=" ">
                Torneos
              </a>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;

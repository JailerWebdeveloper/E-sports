import { Fragment, useState } from "react";
import Wallpaper from "../assets/Wallpaper.jpg";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Ourservices = () => {
  const [cardinfo, setcardinfo] = useState([
    {
      title: "I SEMESTRE",
      subtitle: "Fundamentos de E-sports y Desarrollo personal",
      description: [
        "introduccion a los e-sports",
        "introduccion al gaming",
        "introduccion al marketing",
        "introduccion a la gestion de negocios",
        "introduccion a la gestion de equipos",
      ],
    },
    {
      title: "II SEMESTRE",
      subtitle: "Fundamentos de E-sports y Desarrollo personal",
      description: [
        "introduccion a los e-sports",
        "introduccion al gaming",
        "introduccion al marketing",
        "introduccion a la gestion de negocios",
        "introduccion a la gestion de equipos",
      ],
    },
    {
      title: "III SEMESTRE",
      subtitle: "Fundamentos de E-sports y Desarrollo personal",
      description: [
        "introduccion a los e-sports",
        "introduccion al gaming",
        "introduccion al marketing",
        "introduccion a la gestion de negocios",
        "introduccion a la gestion de equipos",
      ],
    },
    {
      title: "IV SEMESTRE",
      subtitle: "Fundamentos de E-sports y Desarrollo personal",
      description: [
        "introduccion a los e-sports",
        "introduccion al gaming",
        "introduccion al marketing",
        "introduccion a la gestion de negocios",
        "introduccion a la gestion de equipos",
      ],
    },
    {
      title: "V SEMESTRE",
      subtitle: "Fundamentos de E-sports y Desarrollo personal",
      description: [
        "introduccion a los e-sports",
        "introduccion al gaming",
        "introduccion al marketing",
        "introduccion a la gestion de negocios",
        "introduccion a la gestion de equipos",
      ],
    },
  ]);
  return (
    <Fragment>
      <Navbar />
      <div
        className="hero min-h-screen bg-blend-darken z-0"
        style={{
          backgroundImage: "url(" + Wallpaper + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black  "></div>
        <div className="w-full h-full flex justify-center p-5 flex-col items-center text-neutral-content">
          <div className="text-center text-white w-3/5 tracking-wide  items-center  break-all flex flex-col gap-5  my-2 p-4">
            <p className="text-6xl uppercase  font-bold">
              Programa de formacion academico
            </p>
            <p className="uppercase">gestion y administracion de gaming</p>
            <p className="uppercase w-5/6">
              Carrera diseñada para jovenes, jugadores, influencers y
              aficionados a los videojuegos que quieran conocer y conciderar
              este hobby como profesion de negocios o proyecto de vida
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 place-content-center place-items-center gap-5 grid-flow-row">
            {cardinfo.map((card, index) => (
              <Cards
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ourservices;

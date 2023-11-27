import { Fragment,useState } from "react";
import Wallpaper from "../assets/Wallpaper.jpg";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Ourservices = () => {

    const [cardinfo, setcardinfo] = useState([
        {
            title: "I SEMESTRE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
        },
        {
            title: "II SEMESTRE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
        },
        {
            title: "III SEMESTRE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
        },
        {
            title: "IV SEMESTRE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
        },
        {
            title: "V SEMESTRE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
        }
    ])
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
              <Cards key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ourservices;

import { Fragment } from "react";
import Wallpaper from "../assets/Wallpaper.jpg";
import "../Styles/Buttongamer.css";

const Hero = () => {
  return (
    <Fragment>
      <div
        className="hero min-h-screen bg-blend-darken z-0"
        style={{
          backgroundImage: "url(" + Wallpaper + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black  "></div>
        <div className="w-full h-full text-justify text-neutral-content">
          <div className="grid  grid-cols-2  place-items-start    p-10">
            <div className=" rounded-xl w-full flex flex-col  gap-4 justify-center items-center  ">
              {/* Video */}
              <iframe
                width="560"
                height="315"
                className=" border-2  border-rgb "
                src="https://www.youtube.com/embed/-U48AAZo_Cw?si=XP84luoBTPYvJbj8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <button className="text-white">
                VER PROGRAMA ACADEMICO
                <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
              </button>
            </div>
            <div className=" text-break self-start w-4/5">
              <p className="text-justify text-white font-bold  font-sans text-4xl antialiased">
                Especialistas en Formacion Profesional <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">E-SPORT</span> Desarrolla tu
                carrera en el <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-200 to-green-600">GAMING</span> con expertos que comparten tu pasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;

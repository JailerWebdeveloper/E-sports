import { Fragment } from "react";
import "../Styles/Card.css";
const Cards = ({title}) => {
  return (
    <Fragment>
      <div class="card">
        <div class="card2 p-4">
        <p className="text-white font-bold uppercase text-2xl">{title}</p>

        </div>
      </div>
    </Fragment>
  );
};

export default Cards;

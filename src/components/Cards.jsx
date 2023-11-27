import { Fragment } from "react";
import "../Styles/Card.css";
const Cards = ({title,subtitle,description}) => {
  return (
    <Fragment>
      <div class="card">
        <div class="card2 p-4">
        <div className="flex flex-col gap-1 text-white break-all">
        <p className=" font-bold uppercase text-2xl">{title}</p>
        <p className="">{subtitle}</p>
        <p >
            {description.map((item) => (
                <li className="list-disc">{item}</li>
            ))
            }
        </p>

        </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Cards;

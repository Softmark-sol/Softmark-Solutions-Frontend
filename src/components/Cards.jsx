import React from "react";
import "../css/Cards.css";
import Singlecard from "./Singlecard";

const Cards = ({data, heading}) => {
  return (
    <div>
      <div className="card-heading-service" id="services">
        <h2 className="heading-underline-service" id="services">{heading}</h2>
      </div>
      <div className="cards-container container">
        {data.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

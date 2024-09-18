import React from "react";
import "../css/Cards.css";
import Singlecard from "./PlansCard";



const Plancards = ({data}) => {
  return (
    <div>
      <div className="cards-container container">
        {data.map((item, index) => (
          <Singlecard
            key={index}
            title={item.title}
            desciptions={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Plancards;

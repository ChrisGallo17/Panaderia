import React, { useState } from "react";
import Pastry from "./components/pastry"

let pastryList = [
  {
    name: "Canoli",
    calories: 200,
    img:
      "https://www.browneyedbaker.com/wp-content/uploads/2010/01/cannoli-65-754.jpg",
    description:
      "Italian pastries consisting of tube-shaped shells of fried pastry dough, filled with a sweet, creamy filling",
  },
  {
    name: "Napoleon",
    calories: 300,
    img:
      "https://ofbatteranddough.com/wp-content/uploads/2016/09/600-Napoleon-dessert-8.jpg",
    description: "A light buttery flakey pastry filled with bavarian creme",
  },
  {
    name: "Croissant",
    calories: 150,
    img:
      "https://www.thespruceeats.com/thmb/QKBOaapSCzMfE0deUda9IJMAh9s=/1806x1806/smart/filters:no_upscale()/croissantscropGettyImages-590585455-56ed366a3df78ce5f8367412.jpg",
    description: "A buttery, flaky, viennoiserie pastry",
  },
];

export default function Pastries() {
  const [pastries, setPastries] = useState(pastryList);
    
    return (
      <div className="pastryList">
        {pastries.map((v, i) => {
          return (
            <Pastry
              key={"${i}${v.name}"}
              name={v.name}
              img={v.img}
              calories={v.calories}
              description={v.description}
            />
          );
        })}
      </div>
    );
}
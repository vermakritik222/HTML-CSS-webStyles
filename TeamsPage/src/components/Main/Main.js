import React, { useState } from "react";
import MainCard from "../shared/MainCard/MainCard";
import "./Main.css";
import universityList from "../../data/universityList.json";

function Main() {
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <div className="container">
        <div className="mainSec_heading center">
          <h2>Teams Page</h2>
          <p>
            Learn from Scientists, researcher scholars from the top institutes
            in the world
          </p>
        </div>
        <div className="mainSec_cardContainer">
          {universityList.main.map((el) => (
            <MainCard key={el.id} val={el.val} />
          ))}
          {show &&
            universityList.more.map((el) => (
              <MainCard key={el.id} val={el.val} />
            ))}
        </div>
        <div className="mainSec_showMore  center">
          <span onClick={() => setShow(true)}>show more...</span>
        </div>
      </div>
    </div>
  );
}

export default Main;

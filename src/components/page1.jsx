import React, { Component } from "react";
import bigAirplane from "./bigAirplane.png";
import browse from "./browse.png";
import openThisAirplane from "./openThisAirplane.png";
import yellowTop from "./yellowTop.png";
import searchBar from "./searchBar.png";

class Page1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={yellowTop}
          alt="yellowTop.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "15%",
          }}
        />
        <img
          src={browse}
          alt="browse.png"
          style={{
            width: 319,
            height: 154,
            position: "absolute",
            top: 59.5,
            left: 255,
          }}
        />
        <img
          src={bigAirplane}
          alt="bigAirplane.png"
          style={{
            width: 372,
            height: 372,
            position: "absolute",
            top: 233,
            left: 998,
          }}
        />
        <img
          src={openThisAirplane}
          alt="openThisAirplane.png"
          style={{
            width: 451,
            height: 101,
            position: "absolute",
            top: 605,
            left: 594,
          }}
        />
        <img
          src={searchBar}
          alt="searchBar.png"
          style={{
            width: 510,
            height: 50,
            position: "absolute",
            top: 57,
            left: 626,
          }}
        />
      </div>
    );
  }
}

export default Page1;

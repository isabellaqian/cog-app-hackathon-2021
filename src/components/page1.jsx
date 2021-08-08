import React, { Component } from "react";
import bigAirplane from "./bigAirplane.png";
import browse from "./browse.png";
import openThisAirplane from "./openThisAirplane.png";
import yellowTop from "./yellowTop.png";
import searchBar from "./searchBar.png";
import miniBar from "./miniBar.png";

class Page1 extends Component {
  state = {};
  airplaneClick = () => {
    window.location.href = "/play";
  };
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
          src={searchBar}
          alt="searchBar.png"
          style={{
            width: "30%",
            height: "6%",
            position: "absolute",
            top: "6%",
            left: "40%",
          }}
        />
        <img
          src={bigAirplane}
          alt="bigAirplane.png"
          style={{
            width: "25%",
            height: "50%",
            position: "absolute",
            top: "18%",
            left: "45%",
          }}
        />
        <img
          src={openThisAirplane}
          alt="openThisAirplane.png"
          style={{
            width: "25%",
            height: "11%",
            position: "absolute",
            top: "65%",
            left: "46%",
          }}
          onClick={this.airplaneClick}
        />
        <img
          src={browse}
          alt="browse.png"
          style={{
            width: "17%",
            height: "15%",
            position: "absolute",
            top: "8%",
            left: "17.7%",
          }}
        />
        <img
          src={miniBar}
          alt="miniBar.png"
          style={{
            width: "0.8%",
            height: "9%",
            position: "absolute",
            top: "30%",
            left: "0%",
          }}
        />
      </div>
    );
  }
}

export default Page1;

import React, { Component } from "react";
import bigAirplane from "./bigAirplane.png";
import pinkBackground from "./pinkBackground.png";
import cover from "./cover.png";
import miniBar from "./miniBar.png";

class Title extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={cover}
          alt="cover.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "15%",
          }}
        />
        <img
          src={miniBar}
          alt="miniBar.png"
          style={{
            width: "0.8%",
            height: "9%",
            position: "absolute",
            top: "75%",
            left: "0%",
          }}
        />
        {/* <img
          src={bigAirplane}
          alt="bigAirplane.png"
          style={{
            width: "25%",
            height: "50%",
            position: "absolute",
            top: "18%",
            left: "45%",
          }}
        /> */}
      </div>
    );
  }
}

export default Title;

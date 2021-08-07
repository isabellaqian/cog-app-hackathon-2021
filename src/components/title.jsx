import React, { Component } from "react";
import bigAirplane from "./bigAirplane.png";
import pinkBackground from "./pinkBackground.png";

class Title extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={pinkBackground}
          alt="pinkBackground.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "15%",
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
      </div>
    );
  }
}

export default Title;

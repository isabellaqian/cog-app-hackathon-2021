import React, { Component } from "react";
import blueTop from "./blueTop.png";
import sendAnAirplane from "./sendAnAirplane.png";
import bigAirplane from "./bigAirplane.png";
// import dottedcurveline from "./dottedcurveline.png";
// import greenhalfcircle from "./greenhalfcircle.png";
import airplaneDotted from "./airplaneDotted.png";
import greenHalfCircle from "./greenHalfCircle.png";
import searchBar from "./searchBar.png";
import FileUploadButton from "./fileuploadbutton";
import miniBar from "./miniBar.png";
class Page2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={blueTop}
          alt="blueTop.png"
          style={{
            width: "85%",
            height: "1024",
            position: "absolute",
            top: 0,
            left: "15%",
          }}
        />
        <img
          src={sendAnAirplane}
          alt="sendAnAirplane.png"
          style={{
            width: "17%",
            height: "15%",
            position: "absolute",
            top: "15%",
            left: "17.7%",
          }}
        />

        <img
          src={airplaneDotted}
          alt="airplaneDotted.png"
          style={{
            width: "26%",
            height: "38%",
            position: "absolute",
            top: "23%",
            left: "42%",
          }}
        />
        <img
          src={greenHalfCircle}
          alt="greenHalfCircle.png"
          style={{
            width: "90%",
            height: "50%",
            position: "absolute",
            top: "60%",
            left: "11.5%",
          }}
        />
        <img
          src={miniBar}
          alt="miniBar.png"
          style={{
            width: "0.8%",
            height: "9%",
            position: "absolute",
            top: "45%",
            left: "0%",
          }}
        />
        <FileUploadButton />
      </div>
    );
  }
}

export default Page2;

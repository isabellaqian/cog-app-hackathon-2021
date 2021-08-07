import React, { Component } from "react";
import blueTop from "./blueTop.png";
import sendAnAirplane from "./sendAnAirplane.png";
import bigAirplane from "./bigAirplane.png";
import dottedcurveline from "./dottedcurveline.png";
import greenhalfcircle from "./greenhalfcircle.png";
import searchBar from "./searchBar.png";

class Page2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={blueTop}
          alt="blueTop.png"
          style={{
            width: "1218",
            height: "1205",
            position: "absolute",
            top: 0,
            left: 15,
          }}
        />
        <img
          src={sendAnAirplane}
          alt="sendAnAirplane.png"
          style={{
            width: "319",
            height: "154",
            position: "absolute",
            top: 18,
            left: 20,
          }}
        />

        <img
          src={bigAirplane}
          alt="bigAirplane.png"
          style={{
            width: "372",
            height: "372",
            position: "absolute",
            top: 30,
            left: 40,
          }}
        />

        <img
          src={dottedcurveline}
          alt="dottedcurveline.png"
          style={{
            width: "243.63",
            height: "54.11",
            position: "absolute",
            top: 50,
            left: 57,
          }}
        />

        <FileUploadButton />

        <img
          src={greenhalfcircle.png}
          alt="greenhalfcircle.png.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 60,
            left: 15,
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

export default Page2;

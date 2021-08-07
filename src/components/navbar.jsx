import React, { Component } from "react";
//import bigAirplane from "./bigAirplane.png";
//import bookmark from "./bookmark.png";
//import browse from "./browse.png";
//import comment from "./comment.png";
import download from "./download.png";
//import like from "./like.png";
//import logOut from "./logOut.png";
//import magnifyingGlass from "./magnifyingGlass.png";
//import message from "./message.png";
import name from "./name.png";
//import openThisAirplane from "./openThisAirplane.png";
// ovalshape.png -> ovalShape.png
//import ovalShape from "./ovalShape.png";
import sideBlock from "./sideblock.png";
import topBlock from "./topBlock.png";
//import airplane from "./airplane.png";
//import chatBox from "./chatBox.png";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={sideBlock}
              alt="sideBlock.png"
              style={{
                width: 226,
                height: 1024,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <img
              src={topBlock}
              alt="topBlock.png"
              style={{
                width: 1218,
                height: 291,
                position: "absolute",
                top: 0,
                left: 225,
              }}
            />
            <img
              src={name}
              alt="name.png"
              style={{
                width: 144,
                height: 144,
                position: "absolute",
                top: 43,
                left: 33,
              }}
            />
            <img
              src={download}
              alt="download.png"
              style={{
                width: 65,
                height: 65,
                position: "absolute",
                top: 291,
                left: 79,
              }}
            />
            <img
              src={download}
              alt="download.png"
              style={{
                width: 65,
                height: 65,
                position: "absolute",
                top: 446,
                left: 77,
              }}
            />
            <img
              src={download}
              alt="download.png"
              style={{
                width: 65,
                height: 65,
                position: "absolute",
                top: 601,
                left: 77,
              }}
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;

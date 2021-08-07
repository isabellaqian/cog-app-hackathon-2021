import React, { Component } from "react";
import download from "./download.png";
import logOut from "./logOut.png";
import name from "./name.png";
import sideBlock from "./sideblock.png";
import airplane from "./airplane.png";
import chatBox from "./chatBox.png";

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
                width: "15%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
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
              src={airplane}
              alt="airplane.png"
              style={{
                width: 65,
                height: 65,
                position: "absolute",
                top: 446,
                left: 77,
              }}
            />
            <img
              src={chatBox}
              alt="chatBox.png"
              style={{
                width: 65,
                height: 65,
                position: "absolute",
                top: 601,
                left: 77,
              }}
            />
            <img
              src={logOut}
              alt="logOut.png"
              style={{
                width: 50,
                height: 50,
                position: "absolute",
                top: 938,
                left: 45,
              }}
            />
            <img
              src={setting}
              alt="setting.png"
              style={{
                width: 50,
                height: 50,
                position: "absolute",
                top: 937,
                left: 110,
              }}
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;

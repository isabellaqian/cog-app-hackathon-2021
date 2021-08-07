import React, { Component } from "react";
import download from "./download.png";
import logOut from "./logOut.png";
import name from "./name.png";
import sideBlock from "./sideblock.png";
import airplane from "./airplane.png";
import chatBox from "./chatBox.png";
import settings from "./settings.png";
import { useHistory } from "react-router-dom";

class NavBar extends Component {
  state = {};

  uploadClick = () => {
    console.log("airplane");
    window.location.href = "/upload";
    // let path = `/upload`;
    // let history = useHistory();
    // history.push(path);
  };
  downloadClick = () => {
    console.log("browse");
    window.location.href = "/browse";
    // let path = `/browse`;
    // let history = useHistory();
    // history.push(path);
  };
  // chatBoxClick = () => {
  //   window.location.href = "/browse/play";
  // };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
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
                width: "7.5%",
                height: "12%",
                position: "absolute",
                top: "8%",
                left: "3.5%",
              }}
            />
            <img
              src={download}
              alt="download.png"
              style={{
                width: "5%",
                height: "8%",
                position: "absolute",
                top: "35%",
                left: "5%",
              }}
              onClick={this.downloadClick}
            />
            <img
              src={airplane}
              alt="airplane.png"
              style={{
                width: "5%",
                height: "8%",
                position: "absolute",
                top: "50%",
                left: "5%",
              }}
              onClick={this.uploadClick}
            />

            <img
              src={chatBox}
              alt="chatBox.png"
              style={{
                width: "5%",
                height: "8%",
                position: "absolute",
                top: "65%",
                left: "5%",
              }}
              // onClick={this.chatBoxClick}
            />
            <img
              src={logOut}
              alt="logOut.png"
              style={{
                width: "3%",
                height: "6%",
                position: "absolute",
                top: "90%",
                left: "3%",
              }}
            />
            <img
              src={settings}
              alt="settings.png"
              style={{
                width: "3%",
                height: "6%",
                position: "absolute",
                top: "90%",
                left: "8%",
              }}
            />
          </a>
        </div>
      </nav>
    );
  }
}
export default NavBar;

import React, { Component } from "react";
import "./App.css";
import FileUploadButton from "./components/fileuploadbutton";
import NavBar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <FileUploadButton />
      </React.Fragment>
    );
  }
}

export default App;

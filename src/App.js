import React, { Component } from "react";
import "./App.css";
import FileUploadButton from "./components/fileuploadbutton";
import NavBar from "./components/navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import page1 from "./components/page1.jsx";
import page2 from "./components/page2.jsx";
import page3 from "./components/page3.jsx";

function App() {
  state = {};
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Link to="/browse">{page1}</Link>
        <Link to="/upload">{page2}</Link>
        <Link to="/browse/play">{page3}</Link>

        <Switch>
          <Route path="/browse">
            <page1 />
          </Route>
          <Route path="/upload">
            <page2 />
          </Route>
          <Route path="/browse/play">
            <page3 />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
//  <React.Fragment>
//       <NavBar />
//       <FileUploadButton />
//     </React.Fragment>

export default App;

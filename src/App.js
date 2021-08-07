import "./App.css";
import FileUploadButton from "./components/fileuploadbutton";
import NavBar from "./components/navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./components/page1.jsx";
import Page2 from "./components/page2.jsx";
import Page3 from "./components/page3.jsx";

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Link to="/browse">{Page1}</Link>
        <Link to="/upload">{Page2}</Link>
        <Link to="/browse/play">{Page3}</Link>

        <Switch>
          <Route path="/browse">
            <Page1 />
          </Route>
          <Route path="/upload">
            <Page2 />
          </Route>
          <Route path="/browse/play">
            <Page3 />
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
